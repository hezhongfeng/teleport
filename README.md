# teleport

在线[体验](https://teleport-demo.vercel.app/)

`Vue 3.0` 新增了一个内置组件`teleport`，主要是为了解决以下场景：

> 有时组件模板的一部分逻辑上属于该组件，而从技术角度来看，最好将模板的这一部分移动到 DOM 中 Vue app 之外的其他位置

场景举例：一个`Button`，点击后呼出模态对话框

这个模态对话框的业务逻辑位置肯定是属于这个`Button`，但是按照`DOM`结构来看，模态对话框的实际位置应该在整个应用的中间

这样就有了一个问题：组件的逻辑位置和 DOM 位置不在一起

按照以前`Vue2`的做法，一般是使用`position: fixed;`等 CSS 属性强行把对话框定位到了应用的中间位置，属于没有办法的办法，下面展示下`teleport`的基础用法。

## 用法

用法非常简单，只需要使用`to`这个属性就可以把组件渲染到想要的位置

```js
// 渲染到body标签下
<teleport to='body'>
  <div class='modal'>I'm a teleported modal!</div>
</teleport>
```

也可以使用

```js
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-teleport]" />
```

必须是有效的查询选择器或`HTMLElement`

## 进一步

现在我们来封装一个标准的模态对话框

```
<template>
  <teleport to="body">
    <transition name="dialog-fade">
      <div class="dialog-wrapper" v-show="visible">
        <div class="dialog">
          <div class="dialog-header">
            <slot name="title">
              <span class="dialog-title">
                {{ title }}
              </span>
            </slot>
          </div>
          <div class="dialog-body">
            <slot></slot>
          </div>
          <div class="dialog-footer">
            <slot name="footer">
              <button @click="onClose">关闭</button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'tdialog'
});
</script>

<script setup>
const props = defineProps({
  title: String,
  visible: Boolean
});

const emit = defineEmits(['close']);

const onClose = () => {
  emit('close');
};
</script>
```

使用的时候，只需要

```
<t-dialog title="LGD是不可战胜的" :visible="visible" @close="onClose"> 这是一段内容，萧瑟仙贝。 </t-dialog>

// ...
const visible = ref(false);

const onDialog = () => {
  visible.value = !visible.value;
};

const onClose = () => {
  visible.value = false;
};
```

## 更进一步

上面我们已经把标准的模态对话框组件完成了，还有另外一种相似的，只需要展示少量文字的轻量级提示组件`Message`

在上面的例子中，我们总是把`TDialog`组件写在使用的地方，但是这个`Messgae`组件，我们在想提示的时候使用一个 js 语句就把它呼出来，类似于下面的这样

```js
// 呼出一个提示
Message({ message: '这是一条Message消息' });
```

想使用一个函数呼出来，我们需要准备下这个函数，这个函数的作用就是完成组件的渲染。

```
const Message = options => {
  // 准备渲染容器
  const container = document.createElement('div');
  // 生成vnode
  const vnode = createVNode(MessageConstructor, options);
  // 渲染
  render(vnode, container);
};
```

`MessageConstructor`是什么？就是我们的 SFC(单文件组件)：

```vue
<template>
  <teleport to="#app">
    <transition name="message-fade">
      <div v-show="visible" ref="ins" class="message" :style="customStyle">{{ message }}</div>
    </transition>
  </teleport>
</template>
```

## 总结

以上就是关于`teleport`组件的基础用法和扩展用法，给我们提供了不少的方便。

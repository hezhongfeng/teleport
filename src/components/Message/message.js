import { createVNode, render, nextTick } from 'vue';
import MessageConstructor from './index.vue';

const instances = [];
let seed = 1;

const Message = options => {
  const container = document.createElement('div');

  let verticalOffset = 20;
  const id = 'message_' + seed++;

  for (const { vnode, container: __container } of instances) {
    // console.log(__container);
    // verticalOffset += vnode.component.proxy.ins.offsetHeight + 16;
    console.log(vnode);
    console.log(vnode.component);
    console.log(vnode.component.proxy);
    // console.log(vnode.component.proxy.getOffsetHeight);
    // console.log(vnode.component.proxy.ins);
    // console.log(vnode.component.proxy.ins.offsetHeight);
  }

  verticalOffset += 10;
  options.offset = verticalOffset;
  options.id = id;

  options.onClose = id => {
    const index = instances.findIndex(({ vnode }) => {
      return vnode.props.id === id;
    });

    if (index === -1) {
      return;
    }
    let { vnode: _vnode, container: _container } = instances[index];
    nextTick(() => {
      setTimeout(() => {
        render(null, _container);
      }, 300);
    });

    instances.splice(index, 1);
  };

  const vnode = createVNode(MessageConstructor, options);

  render(vnode, container);

  instances.push({ vnode, container });
};

export default Message;

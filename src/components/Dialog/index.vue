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

<style>
.dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: #00000080;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-wrapper > .dialog {
  width: 40%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  color: rgb(48, 49, 51);
}
.dialog > .dialog-header {
  font-size: 18px;
  line-height: 1.4;
  padding: 20px 20px 10px 20px;
}
.dialog > .dialog-body {
  line-height: 1.4;
  padding: 30px 20px 30px 20px;
}
.dialog > .dialog-footer {
  line-height: 1.4;
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: flex-end;
}
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out 0.3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>

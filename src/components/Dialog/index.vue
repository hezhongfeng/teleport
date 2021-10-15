<template>
  <teleport to="body">
    <transition name="dialog-fade">
      <div class="dialog" v-show="visible">
        <div class="el-dialog__header">
          <slot name="title">
            <span class="el-dialog__title">
              {{ title }}
            </span>
          </slot>
        </div>
        <div class="el-dialog__body">
          <slot></slot>
        </div>
        <div class="el-dialog__footer">
          <slot name="footer">
            <button @click="onClose">关闭</button>
          </slot>
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
.dialog-fade-enter-active {
  animation: dialog-fade-in var(--el-transition-duration);
}

.dialog-fade-leave-active {
  animation: dialog-fade-out var(--el-transition-duration);
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

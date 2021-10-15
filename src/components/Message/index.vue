<template>
  <teleport to="body">
    <transition name="message-fade">
      <div v-show="visible" ref="ins" class="message" :style="customStyle">{{ message }}</div>
    </transition>
  </teleport>
</template>

<script lang="ts">
export default defineComponent({
  name: 'TMessage'
});
</script>

<script lang="ts" setup>
import { ref, defineComponent, computed, onMounted } from 'vue';

const props = defineProps({
  id: String,
  message: String,
  duration: { type: Number, default: 3000 },
  offset: Number,
  onClose: {
    type: Function,
    required: true
  }
});

const visible = ref(false);

const ins = ref(null);

let timer = ref(null);

const show = () => {
  visible.value = true;
};

const getOffsetHeight = () => {
  return ins.offsetHeight || 0;
};

const close = () => {
  visible.value = false;
  clearTimeout(timer);
  props.onClose(props.id);
};

const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close();
    }, props.duration);
  }
};

onMounted(() => {
  show();
  startTimer();
});

const customStyle = computed(() => {
  return {
    top: `${props.offset}px`
  };
});
</script>

<style>
.message {
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 0px;
  transform: translateX(-50%);
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #f0f9eb;
  border: solid 1px #e1f3d8;
  border-radius: 4px;
  padding: 15px 15px 20px 20px;
}
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>

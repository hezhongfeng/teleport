<template>
  <transition name="t-message-fade">
    <teleport to="#app">
      <div ref="ins" class="t-message" :style="customStyle">{{ message }}</div>
    </teleport>
  </transition>
</template>

<script lang="ts">
export default defineComponent({
  name: 'TMessage'
});
</script>

<script lang="ts" setup>
import { Ref, ref, defineComponent, computed, onMounted, getCurrentInstance } from 'vue';

const props = defineProps({
  message: String,
  offset: Number
});
const isShow = ref(false);

const ins = ref(null);

const show = () => {
  isShow.value = true;
};

onMounted(() => {});

const top = ref(0);

setTimeout(() => {
  top.value = props.offset;
}, 0);

// const internalInstance = getCurrentInstance();

const customStyle = computed(() => {
  return {
    top: `${top.value}px`
  };
});
</script>

<style>
.t-message {
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
.t-message-fade-enter-from,
.t-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>

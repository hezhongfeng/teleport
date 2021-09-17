<template>
  <!-- 这个div会被渲染为 app 的子级 -->
  <teleport to="#app">
    <div class="t-message">我是TMessage</div>
  </teleport>
</template>

<script lang="ts">
export default defineComponent({
  name: 'TMessage'
});
</script>

<script lang="ts" setup>
import { Ref, ref, defineComponent, onMounted } from 'vue';

const isShow = ref(false);

const show = () => {
  isShow.value = true;
};

onMounted(() => {});
</script>

<style>
.t-message {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>

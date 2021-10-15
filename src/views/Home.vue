<template>
  <div class="home">
    <t-dialog title="我是Title" :visible="visible" @close="onClose"> 内容 </t-dialog>
    <button @click="onDialog">dialogbtn</button>
    <button @click="onMessage">message</button>
  </div>
</template>

<script>
import TDialog from '../components/Dialog/index.vue';
import TMessage from '../components/Message/message';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  components: {
    TDialog,
    TMessage
  }
});
</script>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const onDialog = () => {
  visible.value = !visible.value;
};

const onMessage = () => {
  TMessage({ message: '这是一条Message消息' });
};

const onClose = () => {
  visible.value = false;
};
</script>

<style>
.home {
  display: flex;
}
</style>

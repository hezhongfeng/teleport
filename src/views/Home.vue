<template>
  <div class="home">
    <t-dialog title="LGD是不可战胜的" :visible="visible" @close="onClose"> 这是一段内容，萧瑟仙贝。 </t-dialog>
    <button @click="onDialog">dialog</button>
    <span style="width: 10px"></span>
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

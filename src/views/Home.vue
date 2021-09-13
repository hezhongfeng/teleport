<template>
  <div class="home">
    <t-dialog title="我是Title" :visible="visible"> 内容 </t-dialog>
    <button @click="onDialog">dialogbtn</button>
  </div>
</template>

<script>
import TDialog from '../components/Dialog/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  components: {
    TDialog
  }
});
</script>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const onDialog = () => {
  visible.value = !visible.value;
};
</script>

<style>
.home {
}
</style>

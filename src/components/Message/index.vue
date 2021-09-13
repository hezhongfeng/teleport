<template>
  <div class="message"></div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent ({
  name: 'message',
  components: {},
  props: {},
  setup(props) {
    const count = ref(0);
    return { count };
  }
});
</script>

<style lang="scss">
.message {
}
</style>


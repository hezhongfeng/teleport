import { createVNode, render } from 'vue';
import MessageConstructor from './index.vue';

const instances = [];
let seed = 1;

const Message = function (params) {
  const id = 'message_' + seed++;

  const container = document.createElement('div');

  container.className = `container_${id}`;

  const vm = createVNode(MessageConstructor, params);

  render(vm, container);

  instances.push(vm);
};

export default Message;

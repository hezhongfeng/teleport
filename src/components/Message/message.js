import { createVNode, render } from 'vue';
import MessageConstructor from './index.vue';

const instances = [];
let seed = 1;

const Message = function (params) {
  const container = document.createElement('div');

  let verticalOffset = 20;

  for (const instance of instances) {
    verticalOffset += instance.component.ctx.ins.offsetHeight + 16;
  }
  params.offset = verticalOffset;
  const vm = createVNode(MessageConstructor, params);

  render(vm, container);

  instances.push(vm);
};

export default Message;

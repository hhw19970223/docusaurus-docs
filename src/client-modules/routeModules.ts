import mitt from 'mitt';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const emitter = mitt();

if (ExecutionEnvironment.canUseDOM) {
  window.emitter = emitter;
}

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM) {
    // setTimeout(() => {
    //   window.emitter.emit('onRouteDidUpdate');
    // });
  }
}

export function onClientEntry() {
  if (ExecutionEnvironment.canUseDOM) {
    // setTimeout(() => {
    //   window.emitter.emit('onRouteDidUpdate');
    // });
  }
}
import MInput from './molecules/input.vue';
import MSelect from './molecules/select.vue';
import MTextarea from './molecules/textarea.vue';

const components = {
  MInput,
  MSelect,
  MTextarea,
};

export default {
  ...components,
  install (Vue, options) {
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component);
    }
  }
};

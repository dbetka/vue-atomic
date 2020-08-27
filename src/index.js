import AInput from './atoms/input.vue';
import ALabel from './atoms/label.vue';

import MField from './molecules/field.vue';
import MSelect from './molecules/select.vue';
import MTextarea from './molecules/textarea.vue';

const components = {
  AInput,
  ALabel,
  MField,
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

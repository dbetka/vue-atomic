import AButton from './atoms/button.vue';

const components = {
  AButton,
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

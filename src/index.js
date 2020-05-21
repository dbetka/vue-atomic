import AButton2 from './atoms/button.vue';

const components = {
  AButton2,
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

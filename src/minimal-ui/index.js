import * as components from "./lib";

export default {
  install: (app, options) => {
    for (let key in components) {
      const component = components[key];
      app.component(component.name, component);
    }
  }
};

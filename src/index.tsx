import { createIntegration, createComponent } from '@gitbook/runtime';

// const defaultContent = `@startuml
//   a -> b
//   @enduml`;

const plantumlBlock = createComponent({
  componentId: 'plantuml',
  async render() {
    return ('Hello World');
  }
});

export default createIntegration({
    components: [plantumlBlock]
});


import { createIntegration, createComponent } from '@gitbook/runtime';

// const defaultContent = `@startuml
//   a -> b
//   @enduml`;

const plantumlBlock = createComponent({
  componentId: 'plantuml',
  async render() {
    return (
      <block>
        <box>
          <text>Hello world</text>
        </box>
      </block>
    );
  }
});

export default createIntegration({
    components: [plantumlBlock]
});


import { createIntegration, createComponent } from '@gitbook/runtime';

// const defaultContent = `@startuml
//   a -> b
//   @enduml`;

// const plantumlBlock = createComponent({
//     componentId: 'plantuml',
//     initialState: (props) => {
//         return {
//             content: props.content || defaultContent,
//         };
//     },
//     render: async ({ props, state }) => {
//         return (
//           <block>
//             <box>
//               <text>Hello world</text>
//             </box>
//           </block>
//         );
//       }
// });

// export default createIntegration({
//     components: [plantumlBlock]
// });

const helloWorld = createComponent({
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
  components: [helloWorld]
});
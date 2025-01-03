import { createIntegration, createComponent } from '@gitbook/runtime';

const defaultContent = `@startuml
  a -> b
  @enduml`;

const plantumlBlock = createComponent({
    componentId: 'plantuml',
    initialState: (props) => {
        return {
            content: props.content || defaultContent,
        };
    },
    action: async (previous, action) => {
        switch (action.action) {
            case 'say':
                return { state: { message: 'Hello world' } };
        }
    },
    render: async ({ props, state }) => {
        return (
            <block>
                <button label={state.message} onPress={{ action: 'say' }} />
            </block>
        );
    }
});

export default createIntegration({
    components: [plantumlBlock]
});
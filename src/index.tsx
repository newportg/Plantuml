import { createComponent, createIntegration } from '@gitbook/runtime';

interface BlockProps {
 id: string;
}

const plantuml = createComponent<BlockProps>({
  componentId: 'plantuml',
  async action(block, action) {
    if (action.action === '@link.unfurl') {
      return {
        props: {
          id: action.url.slice('https://myapp.com/'.length)
        }
      };
    }
  },
  
  async render(block) {
    const { id } = block.props;
  
    return (
      <block>
        <box>
          <text>Hello {id}!</text>
        </box>
      </block>
    );
  }
});

export default createIntegration({
  components: [plantuml]
});
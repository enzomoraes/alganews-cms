import { ComponentMeta, ComponentStory } from '@storybook/react';
import Info from '../app/components/Info/Info';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Info',
  component: Info,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = args => <Info {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Post não encontrado',
  description:
    'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.',
};

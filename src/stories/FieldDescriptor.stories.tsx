import { ComponentMeta, ComponentStory } from '@storybook/react';
import FieldDescriptor from '../app/components/FieldDescriptor/FieldDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof FieldDescriptor>;

const Template: ComponentStory<typeof FieldDescriptor> = args => (
  <FieldDescriptor {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'data de Nascimento',
  value: '26 de Dezembro de 1997 (22 anos)',
};

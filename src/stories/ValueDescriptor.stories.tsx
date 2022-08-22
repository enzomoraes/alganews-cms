import { ComponentMeta, ComponentStory } from '@storybook/react';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = args => (
  <ValueDescriptor {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: 560322.02,
  description: 'Ganhos na semana',
  color: 'default',
};

export const DefaultCurrency = Template.bind({});

DefaultCurrency.args = {
  value: 560322.02,
  description: 'Ganhos na semana',
  isCurrency: true,
  color: 'default',
};

export const Primary = Template.bind({});

Primary.args = {
  value: 560322.02,
  description: 'Ganhos na semana',
  color: 'primary',
};

export const PrimaryCurrency = Template.bind({});

PrimaryCurrency.args = {
  value: 560322.02,
  description: 'Ganhos na semana',
  isCurrency: true,
  color: 'primary',
};

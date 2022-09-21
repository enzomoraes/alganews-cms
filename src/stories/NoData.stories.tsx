import { ComponentMeta, ComponentStory } from '@storybook/react';
import NoData from '../app/components/NoData/NoData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/NoData',
  component: NoData,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = args => <NoData {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const FixedHeight = Template.bind({});

FixedHeight.args = {
  height: 240,
};

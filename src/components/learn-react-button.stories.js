import React from 'react';
import HelloWorldButton from './learn-react-button';

export default {
  title: 'Components/LearnReactButton',
  component: HelloWorldButton,
}

const Template = (args) => <HelloWorldButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
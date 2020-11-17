import React from 'react';
import MarvelAppBar from './marvel-app-bar';

export default {
  title: 'layout/MarvelAppBar',
  component: MarvelAppBar,
}

const Template = (args) => <MarvelAppBar />;

export const DefaultAppBar = Template.bind({});
DefaultAppBar.args = {
};
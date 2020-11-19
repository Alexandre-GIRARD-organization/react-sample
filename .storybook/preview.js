import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { blueTheme, redTheme } from '../src/themes';
const themes = [blueTheme, redTheme];


const providerFn = ({ theme, children }) => {
  //const muTheme = createMuiTheme(theme);
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createMuiTheme(serialTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};
addDecorator(withThemes(null, themes, { providerFn }));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['layout', 'characters', 'example'],
    },
  }
}


import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';

/**
 * Blue theme
 */
export const blueTheme = createMuiTheme({
    themeName: "Blue Theme",
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: green[500],
        },
    },
});

/**
 * Red theme
 */
export const redTheme = createMuiTheme({
    themeName: "Red Theme",
    palette: {
        primary: {
            main: red[800],
        },
        secondary: {
            main: green[500],
        },
    },
});
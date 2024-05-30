import { Theme, createTheme } from "@mui/material";

const getCSSVariable = (variable: string) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

const pinkColor = getCSSVariable('--text-primary-color');
const backgroundColor = getCSSVariable('--background-color');
// const containerBg = getCSSVariable('--container-bg');
const navbarBg = getCSSVariable('--navbar-bg-color');
const primaryColor = getCSSVariable('--primary-color');

export const AppLightTheme: Theme = createTheme({
    palette: {
        // primary: {
        //     main: 'rgb(237, 233, 239)',
        //     contrastText: 'rgb(202, 93, 111)',
        // },
        primary: {
            main: backgroundColor,
            contrastText: pinkColor,
          },
          background: {
            default: backgroundColor,
            paper: backgroundColor,
          },
          text: {
            primary: primaryColor,
          }
        // background: {
        //     default: "rgb(237, 233, 239)",
        //     paper: "rgb(255,255,255)",
        // },

    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: navbarBg,
            },
          },
        },
    }
});

export const AppDarkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: backgroundColor, // Use background color as primary main color
            contrastText: pinkColor, // Use primary color as contrast text
          },
          background: {
            default: backgroundColor, // Set background color
            paper: backgroundColor, // Set container background color
          },
          text: {
            primary: primaryColor,
          },
        // primary: {
        //     main: 'rgb(33,37,39)',
        //     contrastText: 'rgb(237, 233, 239)',
        // },
        // background: {
        //     default: "rgb(33,37,39)",
        //     paper: "rgb(41,44,49)",
        // },
        
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: navbarBg,
            },
          },
        },
    }
});
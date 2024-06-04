import { Theme, createTheme } from "@mui/material";

const getCSSVariable = (variable: string) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

// const pinkColor = getCSSVariable('--text-primary-color');
// const backgroundColor = getCSSVariable('--background-color');
// const containerBg = getCSSVariable('--container-bg');
// const navbarBg = getCSSVariable('--navbar-bg-color');
// const primaryColor = getCSSVariable('--primary-color');

const darkBackgroundColor = 'rgb(34, 34, 34)';
const darkPrimaryColor = 'rgb(210, 210, 210)';
const darkPinkColor = 'rgb(202, 93, 111)';
const lightBackgroundColor = 'rgb(236, 234, 236)';
const lightPrimaryColor = 'rgb(34, 40, 43)';
const lightPinkColor = 'rgb(202, 93, 111)';

export const AppLightTheme: Theme = createTheme({
    palette: {
      mode: 'light',
        // primary: {
        //     main: 'rgb(237, 233, 239)',
        //     contrastText: 'rgb(202, 93, 111)',
        // },
        primary: {
            main: lightBackgroundColor,
            contrastText: lightPinkColor,
          },
          background: {
            default: lightBackgroundColor,
            paper: lightBackgroundColor,
          },
          text: {
            primary: lightPrimaryColor,
          }
        // background: {
        //     default: "rgb(237, 233, 239)",
        //     paper: "rgb(255,255,255)",
        // },

    },
    // components: {
    //     MuiAppBar: {
    //       styleOverrides: {
    //         root: {
    //           backgroundColor: navbarBg,
    //         },
    //       },
    //     },
    // }
});

export const AppDarkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: darkBackgroundColor, // Use background color as primary main color
            contrastText: darkPinkColor, // Use primary color as contrast text
          },
          background: {
            default: darkBackgroundColor, // Set background color
            paper: darkBackgroundColor, // Set container background color
          },
          text: {
            primary: darkPrimaryColor,
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
    // components: {
    //     MuiAppBar: {
    //       styleOverrides: {
    //         root: {
    //           backgroundColor: navbarBg,
    //         },
    //       },
    //     },
    // }
});
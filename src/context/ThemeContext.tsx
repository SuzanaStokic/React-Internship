// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ReactNode, useContext, useEffect, useState } from "react";
// import { createContext } from "react";
// import { IThemeContext, IThemeMode } from "./types";
// import { AppDarkTheme, AppLightTheme } from "./theme";

// // export const ThemeContext = createContext<IThemeContext | null>(null);
// export const ThemeContext = createContext<IThemeContext | null>(null);

// export const ThemeContextProvider:React.FC<{children: ReactNode}> = ({children}) => {
//     const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
//     // const [theme, setTheme] = useState<Theme>(AppLightTheme);

//     useEffect(() => {
//         const root = document.documentElement;
//         if (themeMode === IThemeMode.DARK) {
//           root.classList.add('dark-mode');
//           root.classList.remove('light-mode');
//         } else {
//           root.classList.remove('dark-mode');
//           root.classList.add('light-mode');
//         }
//       }, [themeMode]);
    
//       const switchThemeMode = (mode: IThemeMode) => {
//         setThemeMode(mode);
//       };
//       const theme = themeMode === IThemeMode.DARK ? AppDarkTheme : AppLightTheme;

//     return (
//         <ThemeContext.Provider value={{themeMode, switchThemeMode}}>
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 {children}
//             </ThemeProvider>
//         </ThemeContext.Provider>
//     );
// }

        // useEffect(() => {
    //     switch(themeMode) {
    //         case IThemeMode.LIGHT:
    //             setTheme(AppLightTheme);
    //             break;
    //         case IThemeMode.DARK: 
    //             setTheme(AppDarkTheme);
    //             break;
    //         default:
    //             setTheme(AppLightTheme);
    //             break;
    //     }
    // }, [themeMode]);

    // const switchThemeMode = (mode: IThemeMode) => {
    //     setThemeMode(mode);
    // }

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { AppDarkTheme, AppLightTheme } from './theme';
import { IThemeContext, IThemeMode } from './types';
    
    
    export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
    
    export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
        const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
    
        useEffect(() => {
            const root = document.documentElement;
            if (themeMode === IThemeMode.DARK) {
                root.classList.add('dark-mode');
                root.classList.remove('light-mode');
            } else {
                root.classList.remove('dark-mode');
                root.classList.add('light-mode');
            }
        }, [themeMode]);
    
        const switchThemeMode = (mode: IThemeMode) => {
            setThemeMode(mode);
        };
    
        const theme: Theme = themeMode === IThemeMode.DARK ? AppDarkTheme : AppLightTheme;
    
        return (
            <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        );
    };
    
    export const useThemeContext = () => {
        const context = useContext(ThemeContext);
        if (!context) {
            throw new Error('useThemeContext must be used within a ThemeContextProvider');
        }
        return context;
    };
    


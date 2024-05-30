import { Button, Menu, MenuItem } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { IThemeContext, IThemeMode } from '../context/types';
import { DarkMode } from '@mui/icons-material';

const ThemeSwitcher: React.FunctionComponent = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const {themeMode, switchThemeMode} = useContext(ThemeContext) as IThemeContext;

    const handleOpen = () => {
        setOpenMenu(true);
    }
    const handleClose = () => {
        setOpenMenu(false);
    }

    const handleSwitchTheme = (mode: IThemeMode) => {
        switchThemeMode(mode)
        handleClose()
    }

  return (
    <>
        <Button variant='contained' 
        onClick={handleOpen} 
        startIcon={<DarkMode /> } 
        ref={buttonRef}>
            {themeMode}
        </Button>
        <Menu open={openMenu} anchorEl={buttonRef.current} onClose={handleClose}>
            <MenuItem 
            onClick={() => handleSwitchTheme(IThemeMode.LIGHT)} 
            selected={themeMode === IThemeMode.LIGHT}>
                Light
            </MenuItem>    
            <MenuItem 
            onClick={() => handleSwitchTheme(IThemeMode.DARK)}
            selected={themeMode === IThemeMode.DARK}>
                Dark
            </MenuItem>    
        </Menu>
    </>
  )
}
export default ThemeSwitcher;
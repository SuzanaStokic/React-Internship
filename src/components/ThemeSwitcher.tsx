import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { IThemeContext, IThemeMode } from '../context/types';
import { LightMode, NightsStaySharp } from '@mui/icons-material';

const ThemeSwitcher: React.FunctionComponent = () => {
    // const buttonRef = useRef<HTMLButtonElement>(null);
    // const [openMenu, setOpenMenu] = useState<boolean>(false);
    const {themeMode, switchThemeMode} = useContext(ThemeContext) as IThemeContext;

    // const handleOpen = () => {
    //     setOpenMenu(true);
    // }
    // const handleClose = () => {
    //     setOpenMenu(false);
    // }
    useEffect(() => {
        const root = document.documentElement;
        if (themeMode) {
              root.classList.add('dark-mode');
            } else {
                  root.classList.remove('dark-mode');
                }
}, [themeMode]);

    const handleSwitchTheme = (mode: IThemeMode) => {
        switchThemeMode(mode)
    }

  return (
    <>
        <button className="btn btn-dark" onClick={() => handleSwitchTheme(themeMode)}>
                {themeMode ? <LightMode style={{color: 'white'}} /> : <NightsStaySharp style={{color: 'rgb(86, 85, 85)'}}/> }
        </button>
        {/* <Button variant='contained' 
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
        </Menu> */}
    </>
  )
}
export default ThemeSwitcher;
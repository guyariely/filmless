import React, { useState, createContext,  } from 'react';
import { saveTheme } from '../utils/themePersist';
import themes from '../Constants/themes';

export const ThemesContext = createContext();

const ThemesContextProvider = props => {

  const [theme, setTheme] = useState(themes.default.colors);
  const [themeType, setThemeType] = useState(themes.default.type);

  const toggleTheme = theme => {
    setTheme(theme.colors);
    setThemeType(theme.type);
    saveTheme(theme).then().catch(error => console.log(error));
  };

  return (
    <ThemesContext.Provider value={{theme, themeType, setTheme, toggleTheme}}>
      {props.children}
    </ThemesContext.Provider>
  );
};

export default ThemesContextProvider;

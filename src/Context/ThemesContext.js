import React, { useState, createContext,  } from 'react';
import { saveTheme } from '../utils/themePersist';
import themes from '../Constants/themes';

export const ThemesContext = createContext();

const ThemesContextProvider = props => {

  const [theme, setTheme] = useState(themes.default.colors);

  const toggleTheme = theme => {
    setTheme(theme.colors);
    saveTheme(theme).then().catch(error => console.log(error));
  };

  return (
    <ThemesContext.Provider value={{theme, setTheme, toggleTheme}}>
      {props.children}
    </ThemesContext.Provider>
  );
};

export default ThemesContextProvider;

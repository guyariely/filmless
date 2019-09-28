import React, { useState, useEffect, createContext,  } from 'react';
import { saveTheme } from '../utils/themePersist';
import themes from '../Constants/themes';

export const ThemesContext = createContext();

const ThemesContextProvider = props => {

  const [theme, setTheme] = useState(themes.default);

  const toggleTheme = theme => {
    setTheme(theme);
    saveTheme(theme).then().catch(error => console.log(error));
  };

  return (
    <ThemesContext.Provider value={{theme, setTheme, toggleTheme}}>
      {props.children}
    </ThemesContext.Provider>
  );
};

export default ThemesContextProvider;

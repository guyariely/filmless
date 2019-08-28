import React, { useContext } from 'react';

const ThemesContext = React.createContext();

const ThemesProvider = props => {

  const state = {
    themeType: 'dark'
  };
  
  return (
    <ThemesContext.Provider value={state}>
      {props.children}
    </ThemesContext.Provider>
  );
};

export default ThemesContext;
export { ThemesProvider };

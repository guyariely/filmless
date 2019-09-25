import React, { createContext, useState } from 'react';

export const DiscoverContext = createContext();

const DiscoverContextProvider = props => {

  const [rating, setRating] = useState(null);
  const [time, setTime] = useState(null);
  const [fromYear, setFromYear] = useState(null);
  const [toYear, setToYear] = useState(null);
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  return (
    <DiscoverContext.Provider 
      value={{
        rating, setRating,
        time, setTime,
        fromYear, setFromYear,
        toYear, setToYear, 
        genres, setGenres,
        languages, setLanguages,
        sortBy, setSortBy
      }}
    >
      {props.children}
    </DiscoverContext.Provider>
  );
};

export default DiscoverContextProvider; 
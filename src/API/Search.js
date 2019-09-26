import axios from 'axios';
import API_KEY from '../../env';

const MultiSearch = async input => {
  try {
    const searchResults = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${escape(input)}&include_adult=false`
    );
    return searchResults;
  } 
  catch (error) {
    console.log(error);
  }
};

export default { MultiSearch };
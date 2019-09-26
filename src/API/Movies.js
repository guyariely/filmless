import axios from 'axios';
import API_KEY from '../../env';

const GetDetails = async movie => {

  try {
    const movieDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=images,reviews,videos,credits`
    );
    return movieDetails;
  } 
  catch (error) {
    console.log(error);
  }
};

const GetList = async (listType, page) => {
  if (page == 501) return; 

  try {
    const list = await axios.get(
      `https://api.themoviedb.org/3/movie/${listType}?api_key=${API_KEY}&page=${page}`
    );
    return list.data.results;
  } 
  catch (error) {
    console.log(error);
  }
};

export default { GetDetails, GetList };
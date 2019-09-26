import axios from 'axios';
import API_KEY from '../../env';

const Discover = async (queries, page) => {

  const { rating, time, fromYear, toYear, genres, languages, sortBy } = queries;

  try {
    const movieResults = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY +
      '&page=' + page +
      (sortBy ? ('&sort_by=' + sortBy + '.desc') : '') + 
      (fromYear ? '&primary_release_date.gte=' + fromYear + '-01-01' : '') +
      (toYear ? '&primary_release_date.lte=' + toYear + '-12-31' : '') +
      (rating ? '&vote_average.gte=' + rating + '&sort_by=' + (sortBy ? sortBy : 'vote_count') + '.desc' : '') +
      (genres.length > 0 ? '&with_genres=' + genres.join('%2C') : '') +
      (time ? '&with_runtime.lte=' + time : '') +
      (languages.length > 0 ? '&with_original_language=' + languages.join('%2C') : '')
    );

    return movieResults.data.results;
  } 
  catch (error) {
    console.log(error);
  }
};

export default { Discover };
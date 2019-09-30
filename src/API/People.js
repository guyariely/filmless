import axios from 'axios';
import API_KEY from '../../env';

const GetDetails = async person => {

  try {
    const personDetails = await axios.get(
      `https://api.themoviedb.org/3/person/${person.id}?api_key=${API_KEY}&append_to_response=movie_credits,tagged_images,images`
    );
    return personDetails;
  } 
  catch (error) {
    console.log(error);
  }
};

export default { GetDetails };
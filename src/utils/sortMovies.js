
const sortMovies = (movies, sortMethod, sortDirection) => {
    
  switch (sortMethod) {
    case null:
      return movies.sort(
        sortDirection == 'des' ?
        (a, b) => b.dateAdded - a.dateAdded : 
        (a, b) => a.dateAdded - b.dateAdded
      );
    case 'Release Date':
      return movies.sort(
        sortDirection == 'des' ?
        (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime() : 
        (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      );
    case 'Rating':
      return movies.sort(
        sortDirection == 'des' ?
        (a, b) => b.vote_average - a.vote_average : 
        (a, b) => a.vote_average - b.vote_average
      );
    case 'Alphabetical':
      return movies.sort(
        sortDirection == 'des' ?
        (a, b) => b.title > a.title : 
        (a, b) => a.title > b.title
      );
    case 'Runtime':
      return movies.sort(
        sortDirection == 'des' ?
        (a, b) => b.runtime - a.runtime : 
        (a, b) => a.runtime - b.runtime
      );
    default:
      return movies.sort(
        sortDirection == 'des' ?
        (a, b) => b.popularity - a.popularity : 
        (a, b) => a.popularity - b.popularity
      );
  }
};

export default sortMovies;
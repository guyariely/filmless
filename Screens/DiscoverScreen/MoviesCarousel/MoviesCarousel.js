import { API_KEY } from '../../../env';
import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import colors from '../../../Constants/colors';
import Carousel from 'react-native-snap-carousel';
import CarouselHeader from './CarouselHeader';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import { Dimensions } from "react-native";

const MoviesCarousel = props => {

  const [movies, setMovies] = useState(moviesDD);

  useEffect(() => {
    const getMoviesImages = async () => {
      console.log('getting images...');
      const moviesWithImages = movies;
  
      try {
        for (let movie of moviesWithImages) {
          const images = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${API_KEY}`
            );
          movie.images = images.data.backdrops;
        }
        console.log(moviesWithImages);
        setMovies(moviesWithImages);
      } 
      catch (error) {
        console.log(error);
      }
    };

    getMoviesImages();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      > 
        <CarouselHeader closeCarousel={props.closeCarousel} />
        <Carousel
          data={movies}
          renderItem={({item}) => <CarouselSlide movie={item} />}
          sliderWidth={ Math.round(Dimensions.get('window').width) }
          itemWidth={ Math.round(Dimensions.get('window').width) }
          firstItem={props.index}
          containerCustomStyle={styles.carousel}
        />
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  carousel: {
    backgroundColor: colors.base01,
  }
});

const moviesDD = [ 
  { 
    adult: false,
    backdrop_path: '/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg',
    genre_ids: [ 12, 16, 10751, 18, 28 ],
    id: 420818,
    original_language: 'en',
    original_title: 'The Lion King',
    overview:
    'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.',
    popularity: 237.168,
    poster_path: '/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
    release_date: '2019-07-12',
    title: 'The Lion King',
    video: false,
    vote_average: 7.1,
    vote_count: 1884 
  },
  { 
    adult: false,
    backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    genre_ids: [ 12, 878, 28 ],
    id: 299534,
    original_language: 'en',
    original_title: 'Avengers: Endgame',
    overview:
    'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
    popularity: 155.207,
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    release_date: '2019-04-24',
    title: 'Avengers: Endgame',
    video: false,
    vote_average: 8.4,
    vote_count: 8831 
  },
  { 
    adult: false,
    backdrop_path: '/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg',
    genre_ids: [ 80, 28, 53 ],
    id: 458156,
    original_language: 'en',
    original_title: 'John Wick: Chapter 3 – Parabellum',
    overview:
    'Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.',
    popularity: 138.72,
    poster_path: '/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
    release_date: '2019-05-15',
    title: 'John Wick: Chapter 3 – Parabellum',
    video: false,
    vote_average: 7.1,
    vote_count: 1957 
  },
  { 
    adult: false,
    backdrop_path: '/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg',
    genre_ids: [ 16, 12, 35, 10751 ],
    id: 920,
    original_language: 'en',
    original_title: 'Cars',
    overview:
    'Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town\'s offbeat characters.',
    popularity: 125.089,
    poster_path: '/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg',
    release_date: '2006-06-08',
    title: 'Cars',
    video: false,
    vote_average: 6.7,
    vote_count: 7901 
  },
  { 
    adult: false,
    backdrop_path: '/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
    genre_ids: [ 12, 14, 10749, 35, 10751 ],
    id: 420817,
    original_language: 'en',
    original_title: 'Aladdin',
    overview:
    'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',
    popularity: 115.612,
    poster_path: '/yYWGCAerbVAHyfuGBCHKzWJdEtj.jpg',
    release_date: '2019-05-22',
    title: 'Aladdin',
    video: false,
    vote_average: 7.1,
    vote_count: 2756 
  },
  { 
    adult: false,
    backdrop_path: '/dihW2yTsvQlust7mSuAqJDtqW7k.jpg',
    genre_ids: [ 28, 12, 878 ],
    id: 429617,
    original_language: 'en',
    original_title: 'Spider-Man: Far from Home',
    overview:
    'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    popularity: 103.87,
    poster_path: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
    release_date: '2019-06-28',
    title: 'Spider-Man: Far from Home',
    video: false,
    vote_average: 7.8,
    vote_count: 3094 
  },
  { 
    adult: false,
    backdrop_path: '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
    genre_ids: [ 12, 28, 878 ],
    id: 299536,
    original_language: 'en',
    original_title: 'Avengers: Infinity War',
    overview:
    'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    popularity: 78.877,
    poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    release_date: '2018-04-25',
    title: 'Avengers: Infinity War',
    video: false,
    vote_average: 8.3,
    vote_count: 14859 
  },
  { 
    adult: false,
    backdrop_path: '/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
    genre_ids: [ 28, 12, 878 ],
    id: 299537,
    original_language: 'en',
    original_title: 'Captain Marvel',
    overview:
    'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
    popularity: 77.683,
    poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    release_date: '2019-03-06',
    title: 'Captain Marvel',
    video: false,
    vote_average: 7,
    vote_count: 6888 
  },
  { 
    adult: false,
    backdrop_path: '/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg',
    genre_ids: [ 28, 53 ],
    id: 245891,
    original_language: 'en',
    original_title: 'John Wick',
    overview:
    'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.',
    popularity: 74.459,
    poster_path: '/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
    release_date: '2014-10-22',
    title: 'John Wick',
    video: false,
    vote_average: 7.2,
    vote_count: 10583 
  },
  { 
    adult: false,
    backdrop_path: '/8yjqnpOfuFQg3qLRl9Ca1NgIBB5.jpg',
    genre_ids: [ 28, 878, 53, 12 ],
    id: 399579,
    original_language: 'en',
    original_title: 'Alita: Battle Angel',
    overview:
    'When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.',
    popularity: 72.944,
    poster_path: '/xRWht48C2V8XNfzvPehyClOvDni.jpg',
    release_date: '2019-01-31',
    title: 'Alita: Battle Angel',
    video: false,
    vote_average: 6.8,
    vote_count: 3122 
  },
  { 
    adult: false,
    backdrop_path: '/m67smI1IIMmYzCl9axvKNULVKLr.jpg',
    genre_ids: [ 12, 16, 35, 10751 ],
    id: 301528,
    original_language: 'en',
    original_title: 'Toy Story 4',
    overview:
    'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
    popularity: 62.156,
    poster_path: '/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
    release_date: '2019-06-19',
    title: 'Toy Story 4',
    video: false,
    vote_average: 7.7,
    vote_count: 1942 
  },
  { 
    adult: false,
    backdrop_path: '/OIGX2lm5tmlCKvZUghtwHzoxxO.jpg',
    genre_ids: [ 28, 35, 14 ],
    id: 287947,
    original_language: 'en',
    original_title: 'Shazam!',
    overview:
    'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
    popularity: 61.046,
    poster_path: '/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
    release_date: '2019-03-23',
    title: 'Shazam!',
    video: false,
    vote_average: 7,
    vote_count: 2998 
  } 
];

export default MoviesCarousel;

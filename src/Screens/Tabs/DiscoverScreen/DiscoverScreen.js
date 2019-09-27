import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import API from '../../../API/Discover';
import { withNavigationFocus } from "react-navigation";
import { getHidelistIDs } from '../../../utils/hidelistActions';
import isSmallScreen from '../../../utils/isSmallScreen';
import colors from '../../../Constants/colors';
import Form from './Form/Form';
import MovieCards from '../../../Components/MovieCards';
import { DiscoverContext } from '../../../Context/DiscoverContext';

const DiscoverScreen = props => {

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [hidelist, setHidelist] = useState([]);

  useEffect(() => {
    getHidelistIDs().then(hidelist => { setHidelist(hidelist) });
  }, [props.isFocused, movies])

  const queries = useContext(DiscoverContext);

  const validateQueries = () => {

    // remove keyboard and any error message 
    setError(null);
    Keyboard.dismiss();

    // inputs validation
    const { rating, fromYear, toYear } = queries;

    if (!Number(rating) && rating) {
      return setError("Rating number is invalid.");
    }
    if (Number(fromYear) > Number(toYear) && toYear && fromYear) {
      return setError("You can't select a start year that is bigger then the end year.");
    }
    if (Number(toYear) < Number(fromYear) && toYear && fromYear) {
      return setError("You can't select an end year that is smaller then the start year.");
    }

    // fetching the movies
    setPage(1);
    loadMovies(1);
  };

  const loadMovies = page => {

    if (page == 501) return; 
    if (page == 1) setIsLoading(true);

    API.Discover(queries, page).then(movieResults => {

      if (page == 1) {
        setMovies(movieResults);
      } 
      else if (movieResults.length > 0) {
        setMovies(movies.concat(movieResults));
      }
  
      if (page == 1) setIsLoading(false);
      setPage(page + 1);
    })
  };

  useEffect(() => Keyboard.dismiss(), [props.isFocused])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.form}>
          <Form validateQueries={validateQueries} />  
        </View>
        { 
          isLoading && 
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='small' color={colors.text01} />
          </View> 
        }
        { 
          error && 
          <Text style={styles.error}>
            <Text style={styles.errorKeyword}>
              Error: {''} 
            </Text>
            {error}
          </Text> 
        }
        {
          (!error && !isLoading) &&
          <MovieCards 
            movies={movies.filter(movie => !hidelist.includes(movie.id))} 
            loadMovies={() => loadMovies(page)}
            selectMovie={movie => {
              props.navigation.push(
                'MovieScreen', { movie, loadDetails: true }
              );
            }}
          />
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  title: {
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingHorizontal: 28,
    paddingTop: isSmallScreen() ? 10 : 20
  },
  form: {
    height: isSmallScreen() ? 330 : 350,
    paddingHorizontal: 28,
    paddingVertical: isSmallScreen() ? 10 : 20, 
  },
  activityIndicator: {
    justifyContent: 'center',
    flex: 6
  },
  errorKeyword: {
    color: colors.primary
  }, 
  error: {
    flex: 6,
    paddingHorizontal: 30,
    alignSelf: 'center',
    paddingVertical: 15,
    fontSize: 20, 
    color: colors.text01,
    fontStyle: 'italic'
  }
});

const results = JSON.parse(JSON.stringify({
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results": [
    {
      "popularity": 346.653,
      "vote_count": 478,
      "video": false,
      "poster_path": "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
      "id": 429203,
      "adult": false,
      "backdrop_path": "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
      "original_language": "en",
      "original_title": "The Old Man & the Gun",
      "genre_ids": [
        35,
        80,
        18
      ],
      "title": "The Old Man & the Gun",
      "vote_average": 6.4,
      "overview": "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
      "release_date": "2018-09-28"
    },
    {
      "popularity": 287.8,
      "vote_count": 72,
      "video": false,
      "poster_path": "/wF6SNPcUrTKFA4fOFfukm7zQ3ob.jpg",
      "id": 474350,
      "adult": false,
      "backdrop_path": "/2V5RR4Ps1i4x7ifjjDvlmrSYzvL.jpg",
      "original_language": "en",
      "original_title": "It: Chapter Two",
      "genre_ids": [
        27
      ],
      "title": "It: Chapter Two",
      "vote_average": 7.3,
      "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
      "release_date": "2019-09-06"
    },
    {
      "popularity": 233.924,
      "vote_count": 1529,
      "video": false,
      "poster_path": "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
      "id": 320288,
      "adult": false,
      "backdrop_path": "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
      "original_language": "en",
      "original_title": "Dark Phoenix",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Dark Phoenix",
      "vote_average": 6.1,
      "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
      "release_date": "2019-06-07"
    },
    {
      "popularity": 173.709,
      "vote_count": 2261,
      "video": false,
      "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      "id": 458156,
      "adult": false,
      "backdrop_path": "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
      "original_language": "en",
      "original_title": "John Wick: Chapter 3 – Parabellum",
      "genre_ids": [
        80,
        53
      ],
      "title": "John Wick: Chapter 3 – Parabellum",
      "vote_average": 7.1,
      "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      "release_date": "2019-05-17"
    },
    {
      "popularity": 170.246,
      "vote_count": 938,
      "video": false,
      "poster_path": "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
      "id": 384018,
      "adult": false,
      "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
      "original_language": "en",
      "original_title": "Fast & Furious Presents: Hobbs & Shaw",
      "genre_ids": [
        28
      ],
      "title": "Fast & Furious Presents: Hobbs & Shaw",
      "vote_average": 6.5,
      "overview": "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
      "release_date": "2019-08-02"
    },
    {
      "popularity": 154.848,
      "vote_count": 34,
      "video": false,
      "poster_path": "/kTca5fpKhFOKIiG0tz8tynhsWs5.jpg",
      "id": 593961,
      "adult": false,
      "backdrop_path": "/foMDjFHrTrex6Rr6bApB8TbWlie.jpg",
      "original_language": "tl",
      "original_title": "Hello, Love, Goodbye",
      "genre_ids": [
        18,
        10749
      ],
      "title": "Hello, Love, Goodbye",
      "vote_average": 5.6,
      "overview": "A love story of Joy and Ethan, Filipino workers based in Hong Kong. Ethan, a bartender, is keen on romantically pursuing Joy, a domestic helper who is wholly dedicated to providing for her family.",
      "release_date": "2019-07-31"
    },
    {
      "popularity": 156.564,
      "vote_count": 204,
      "video": false,
      "poster_path": "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
      "id": 423204,
      "adult": false,
      "backdrop_path": "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
      "original_language": "en",
      "original_title": "Angel Has Fallen",
      "genre_ids": [
        28
      ],
      "title": "Angel Has Fallen",
      "vote_average": 5.9,
      "overview": "Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.",
      "release_date": "2019-08-23"
    },
    {
      "popularity": 143.031,
      "vote_count": 2247,
      "video": false,
      "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      "id": 420818,
      "adult": false,
      "backdrop_path": "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      "original_language": "en",
      "original_title": "The Lion King",
      "genre_ids": [
        28,
        12,
        16,
        18,
        10751
      ],
      "title": "The Lion King",
      "vote_average": 7.2,
      "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      "release_date": "2019-07-19"
    },
    {
      "popularity": 143.904,
      "vote_count": 3056,
      "video": false,
      "poster_path": "/yYWGCAerbVAHyfuGBCHKzWJdEtj.jpg",
      "id": 420817,
      "adult": false,
      "backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
        12,
        35,
        14,
        10749,
        10751
      ],
      "title": "Aladdin",
      "vote_average": 7.1,
      "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      "release_date": "2019-05-24"
    },
    {
      "popularity": 89.55,
      "vote_count": 7994,
      "video": false,
      "poster_path": "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
      "id": 920,
      "adult": false,
      "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
      "original_language": "en",
      "original_title": "Cars",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "title": "Cars",
      "vote_average": 6.7,
      "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
      "release_date": "2006-06-09"
    },
    {
      "popularity": 97.802,
      "vote_count": 3295,
      "video": false,
      "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      "id": 429617,
      "adult": false,
      "backdrop_path": "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Spider-Man: Far from Home",
      "vote_average": 7.7,
      "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      "release_date": "2019-07-02"
    },
    {
      "popularity": 109.293,
      "vote_count": 20,
      "video": false,
      "poster_path": "/tltTPQeVK2XF3J0CgMc6kOzdF91.jpg",
      "id": 435941,
      "adult": false,
      "backdrop_path": "/6g0weS4HxtGjPYvSYFlPv1NAopu.jpg",
      "original_language": "ja",
      "original_title": "花鳥籠",
      "genre_ids": [
        18,
        36
      ],
      "title": "The Caged Flower",
      "vote_average": 6.5,
      "overview": "Yoriko Jun turned Miyuki Fukashi’s sensual novel with the same name into a movie. An ordinary office lady and a boy meet on the Internet, they get into a master-slave relationship and are drowned in a world of pleasure.",
      "release_date": "2013-11-23"
    },
    {
      "popularity": 121.682,
      "vote_count": 27,
      "video": false,
      "poster_path": "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",
      "id": 486589,
      "adult": false,
      "backdrop_path": "/bga3i5jcejBekr2FCGJga1fYCh.jpg",
      "original_language": "en",
      "original_title": "Red Shoes and the Seven Dwarfs",
      "genre_ids": [
        16,
        10749
      ],
      "title": "Red Shoes and the Seven Dwarfs",
      "vote_average": 5.2,
      "overview": "Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.",
      "release_date": "2019-08-01"
    },
    {
      "popularity": 96.932,
      "vote_count": 9171,
      "video": false,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "id": 299534,
      "adult": false,
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Avengers: Endgame",
      "vote_average": 8.3,
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "release_date": "2019-04-26"
    },
    {
      "popularity": 86.045,
      "vote_count": 1110,
      "video": false,
      "poster_path": "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
      "id": 479455,
      "adult": false,
      "backdrop_path": "/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg",
      "original_language": "en",
      "original_title": "Men in Black: International",
      "genre_ids": [
        28,
        12,
        35,
        878
      ],
      "title": "Men in Black: International",
      "vote_average": 5.9,
      "overview": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
      "release_date": "2019-06-14"
    },
    {
      "popularity": 88.828,
      "vote_count": 429,
      "video": false,
      "poster_path": "/fgGzTEoNxptCRtEOpOPvIEdlxAq.jpg",
      "id": 535581,
      "adult": false,
      "backdrop_path": "/sLmVJIvwlGioO8C0wAOdzJWGUHP.jpg",
      "original_language": "en",
      "original_title": "The Dead Don't Die",
      "genre_ids": [
        35,
        27
      ],
      "title": "The Dead Don't Die",
      "vote_average": 5.7,
      "overview": "In a small peaceful town, zombies suddenly rise to terrorize the town. Now three bespectacled police officers and a strange Scottish morgue expert must band together to defeat the undead.",
      "release_date": "2019-06-14"
    },
    {
      "popularity": 80.995,
      "vote_count": 1258,
      "video": false,
      "poster_path": "/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
      "id": 373571,
      "adult": false,
      "backdrop_path": "/uovH5k4BAEPqXqxgwVrTtqH169g.jpg",
      "original_language": "en",
      "original_title": "Godzilla: King of the Monsters",
      "genre_ids": [
        28,
        878
      ],
      "title": "Godzilla: King of the Monsters",
      "vote_average": 6.2,
      "overview": "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species - thought to be mere myths - rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
      "release_date": "2019-05-31"
    },
    {
      "popularity": 81.54,
      "vote_count": 166,
      "video": false,
      "poster_path": "/jIthqo2tQmW8TFN1fYpF8FmVL0o.jpg",
      "id": 521777,
      "adult": false,
      "backdrop_path": "/6Xsz9KHQmCcIcj3CoWQq5eLtVoT.jpg",
      "original_language": "en",
      "original_title": "Good Boys",
      "genre_ids": [
        35
      ],
      "title": "Good Boys",
      "vote_average": 6.6,
      "overview": "A group of young boys on the cusp of becoming teenagers embark on an epic quest in the San Fernando Valley to fix their broken toy before their parents get home.",
      "release_date": "2019-08-16"
    },
    {
      "popularity": 83.718,
      "vote_count": 10711,
      "video": false,
      "poster_path": "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      "id": 245891,
      "adult": false,
      "backdrop_path": "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
      "original_language": "en",
      "original_title": "John Wick",
      "genre_ids": [
        28,
        53
      ],
      "title": "John Wick",
      "vote_average": 7.2,
      "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      "release_date": "2014-10-24"
    },
    {
      "popularity": 82.135,
      "vote_count": 0,
      "video": false,
      "poster_path": "/ljAMsxYS3i8GlEoXAKZxaK88EAO.jpg",
      "id": 566057,
      "adult": false,
      "backdrop_path": "/uIAnWjl1PNsFL9M24KzVMmO6sdo.jpg",
      "original_language": "ja",
      "original_title": "ルパンレンジャーＶＳパトレンジャーＶＳキュウレンジャー",
      "genre_ids": [
        28,
        12,
        80,
        878
      ],
      "title": "Lupinranger VS Patranger VS Kyuranger",
      "vote_average": 0,
      "overview": "\"Lupinranger VS Patranger VS Kyuranger\" is an upcoming V-Cinext film between Kaitou Sentai Lupinranger VS Keisatsu Sentai Patranger and Uchu Sentai Kyuranger. The story begins when the Lupinrangers, Kairi, Touma, and Umika, are kidnapped by someone mysterious. The Patrangers are then tasked with an Abduction Case to find the missing thieves, where they run into the Kyuranger team as they pass through space. Just who exactly kidnapped them? And why did the 12 Kyurangers return to space?",
      "release_date": "2019-05-03"
    }
  ]
})).results;

export default withNavigationFocus(DiscoverScreen);

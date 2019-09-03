import React, { useState, useEffect } from "react";
import API_KEY from '../../../env';
import { StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';
import SearchResults from './SearchResults';
import MovieModal from './MovieModal';
import axios from 'axios';
import colors from '../../Constants/colors';
import isSmallScreen from '../../utils/isSmallScreen';

const SearchScreen = () => {

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getSearchResults = async () => {
    if (!input) return;
    setShowBorder(false);
    setIsLoading(true);
    const searchResults = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${escape(input)}&include_adult=false`);
    setSearchResults(searchResults.data.results);
    setIsLoading(false);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View style={
        showBorder ? 
        [styles.searchButtonContainer, styles.searchButtonContainerBorder] : 
        styles.searchButtonContainer}
      >
        <TextInput
          style={input ? [styles.searchButton, styles.searchButton__active] : styles.searchButton}
          placeholder="Search movies"
          placeholderTextColor={colors.text03}
          selectionColor={colors.primary}
          onChangeText={input => setInput(input)}
          value={input}
          returnKeyType="go"
          keyboardType={'ascii-capable'}
          onSubmitEditing={getSearchResults}
        />
      </View>
      { 
        isLoading ?
        <View style={styles.activityIndicator}>
          <ActivityIndicator size='small' color={colors.text01} />
        </View> 
        :
        <SearchResults 
          searchResults={searchResults}
          setShowBorder={setShowBorder}
          selectMovie={movie => {
            setSelectedMovie(movie);
            setShowModal(true);
          }}
        />
      }
      {
        showModal &&
        <MovieModal 
          visible={showModal} 
          movie={selectedMovie}
          closeModal={() => setShowModal(false)}
        /> 
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01,
  },
  title: {
    paddingHorizontal: 28,
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingTop: isSmallScreen() ? 44 : 54,
  },
  searchButtonContainer: {
    paddingTop: 15,
    paddingHorizontal: 28,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: colors.base01,
  },
  searchButtonContainerBorder: {
    borderColor: colors.base02,
  },
  searchButton: {
    backgroundColor: colors.base02,
    color: colors.text01,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 24,
  },
  searchButton__active: {
    borderColor: colors.primary,
    borderWidth: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center'
  }
});

const results = JSON.parse(JSON.stringify({
  "page": 1,
  "total_results": 12,
  "total_pages": 1,
  "results": [
  {
  "popularity": 46.3,
  "vote_count": 19336,
  "video": false,
  "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
  "id": 157336,
  "adult": false,
  "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
  "original_language": "en",
  "original_title": "Interstellar",
  "genre_ids": [
  12,
  18,
  878
  ],
  "title": "Interstellar",
  "vote_average": 8.2,
  "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  "release_date": "2014-11-05"
  },
  {
  "popularity": 18.706,
  "vote_count": 161,
  "video": false,
  "poster_path": "/2lhOV8CCqsiGL1aIFvQzI0WLTek.jpg",
  "id": 11049,
  "adult": false,
  "backdrop_path": "/mhbBZvchVKwhsGVaMveF6vew7nN.jpg",
  "original_language": "en",
  "original_title": "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem",
  "genre_ids": [
  12,
  16,
  10402,
  878
  ],
  "title": "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem",
  "vote_average": 7.7,
  "overview": "Four talented alien musicians are kidnapped by a record producer who disguises them as humans. Shep, a space pilot in love with bass player Stella, follows them to Earth. Reprogrammed to forget their real identities and renamed The Crescendolls, the group quickly becomes a huge success playing soulless corporate pop. At a concert, Shep manages to free all the musicians except Stella, and the band sets out to rediscover who they really are -- and to rescue Stella.",
  "release_date": "2003-05-28"
  },
  {
  "popularity": 6.331,
  "id": 301959,
  "video": false,
  "vote_count": 137,
  "vote_average": 7.9,
  "title": "Interstellar: Nolan's Odyssey",
  "release_date": "2014-11-05",
  "original_language": "en",
  "original_title": "Interstellar: Nolan's Odyssey",
  "genre_ids": [
  99
  ],
  "backdrop_path": "/bT5jpIZE50MI0COE8pOeq0kMpQo.jpg",
  "adult": false,
  "overview": "Behind the scenes of Christopher Nolan's sci-fi drama, which stars Matthew McConaughey and Anne Hathaway",
  "poster_path": "/xZwUIPqBHyJ2QIfMPANOZ1mAld6.jpg"
  },
  {
  "popularity": 2.914,
  "id": 398188,
  "video": false,
  "vote_count": 7,
  "vote_average": 3.8,
  "title": "Interstellar Wars",
  "release_date": "2016-05-23",
  "original_language": "en",
  "original_title": "Interstellar Wars",
  "genre_ids": [
  878
  ],
  "backdrop_path": "/yTnHa6lgIv8rNneSNBDkBe8MnZe.jpg",
  "adult": false,
  "overview": "For Millennia the Aliien force has watched and waited, a brooding menace that has now at last decided to take over the Earth. Communications systems worldwide are sent into chaos by a strange atmospheric interference and this has turned into a global phenomenon. A massive spaceship headed towards Earth and smaller spaceships began to cover entire cities around the world. Suddenly, the wonder turns into horror as the spaceships destroy the cities with energy weapons. When the world counterattacks, the alien ships are invincible to military weapons.  The survivors have to use their wits to kill the aliens, or die.",
  "poster_path": "/cjvTebuqD8wmhchHE286ltVcbX6.jpg"
  },
  {
  "popularity": 1.97,
  "id": 336592,
  "video": false,
  "vote_count": 8,
  "vote_average": 7.8,
  "title": "The Science of Interstellar",
  "release_date": "2014-11-25",
  "original_language": "en",
  "original_title": "The Science of Interstellar",
  "genre_ids": [
  99
  ],
  "backdrop_path": null,
  "adult": false,
  "overview": "The science of Christopher Nolan's sci-fi, Interstellar.",
  "poster_path": "/6KBD7YSBjCfgBgHwpsQo3G3GGdx.jpg"
  },
  {
  "popularity": 1.056,
  "id": 529107,
  "video": false,
  "vote_count": 1,
  "vote_average": 9,
  "title": "Inside Interstellar",
  "release_date": "2015-03-31",
  "original_language": "en",
  "original_title": "Inside Interstellar",
  "genre_ids": [
  99
  ],
  "backdrop_path": null,
  "adult": false,
  "overview": "Cast and crew of Christopher Nolan's 'Interstellar' discuss project origins, the film's imagery, ambitions, incorporating IMAX footage, the human element within the film, arm shooting locations outside of Calgary, the set construction and design, working with real corn, mechanical characters, including backstory, design, the blend of practical and digital effects in bringing them to life, the differences in the characters, the human performances behind the characters, the creative process behind the film's music, Icelandic locations, vehicle interiors, the processes of simulating the absence of gravity, the crucial end-film visuals and influence and inspiration for future generations",
  "poster_path": "/vemBplPKQhVe5cRWL7kxtgp15Vq.jpg"
  },
  {
  "popularity": 2.05,
  "id": 287954,
  "video": false,
  "vote_count": 1,
  "vote_average": 7,
  "title": "Lolita from Interstellar Space",
  "release_date": "2014-03-08",
  "original_language": "en",
  "original_title": "Lolita from Interstellar Space",
  "genre_ids": [
  35
  ],
  "backdrop_path": "/mgb6tVEieDYLpQt666ACzGz5cyE.jpg",
  "adult": false,
  "overview": "An undeniably beautiful alien is sent to Earth to study the complex mating rituals of human beings, which leads to the young interstellar traveler experiencing the passion that surrounds the centuries-old ritual of the species.",
  "poster_path": "/buoq7zYO4J3ttkEAqEMWelPDC0G.jpg"
  },
  {
  "popularity": 2.665,
  "id": 47662,
  "video": false,
  "vote_count": 12,
  "vote_average": 5.2,
  "title": "Trancers 4: Jack of Swords",
  "release_date": "1994-02-02",
  "original_language": "en",
  "original_title": "Trancers 4: Jack of Swords",
  "genre_ids": [
  878,
  28
  ],
  "backdrop_path": "/5ism2HNUGuQi5a3ajYaN9ypMQMf.jpg",
  "adult": false,
  "overview": "Jack is now back in the future. He had since lost Lena, and finds out that he's lost his other wife Alice to none other than Harris. While heading out for another assignment, something goes awry with the TCL chamber. Jack finds himself in a whole new dimension. He also runs across a different version of trancers. These guys seem to be in control of this planet. Jack manages to assist a rebel group known as the \"Tunnel Rats\" crush the rule of the evil Lord Calaban.",
  "poster_path": "/69yr3oxBpSgua26RJkFmsm7plTG.jpg"
  },
  {
  "popularity": 1.4,
  "id": 261443,
  "video": false,
  "vote_count": 1,
  "vote_average": 4.5,
  "title": "Angry Planet",
  "release_date": "2008-01-01",
  "original_language": "en",
  "original_title": "Angry Planet",
  "genre_ids": [
  878
  ],
  "backdrop_path": "/u4JBwlGZN8hGeLxwu7Q0WmibACp.jpg",
  "adult": false,
  "overview": "A criminal sentenced to life on a prison planet reveals his true purpose: to extract revenge on the killers who murdered his family.",
  "poster_path": "/ie5luS87ess1c5VgFhbGECJTQVK.jpg"
  },
  {
  "popularity": 0.6,
  "id": 552531,
  "video": false,
  "vote_count": 0,
  "vote_average": 0,
  "title": "The Prom Goer's Interstellar Excursion",
  "release_date": "",
  "original_language": "en",
  "original_title": "The Prom Goer's Interstellar Excursion",
  "genre_ids": [
  12
  ],
  "backdrop_path": null,
  "adult": false,
  "overview": "High schooler Bennett lands the prom date of his dreams, Sophie, just days before the dance. Not long after, he witnesses Sophie being abducted by aliens in the middle of the New Mexico desert.",
  "poster_path": null
  },
  {
  "popularity": 2.93,
  "id": 47663,
  "video": false,
  "vote_count": 8,
  "vote_average": 5,
  "title": "Trancers 5: Sudden Deth",
  "release_date": "1994-11-04",
  "original_language": "en",
  "original_title": "Trancers 5: Sudden Deth",
  "genre_ids": [
  28,
  53,
  878
  ],
  "backdrop_path": "/an0xpUEX1P1BI80sCpkU1pSoREx.jpg",
  "adult": false,
  "overview": "Jack Deth is back for one more round with the trancers. Jack must attempt to find his way home from the other-dimensional world of Orpheus, where magic works and the trancers were the ruling class (before Trancers IV, that is). Unfortunately, Jack's quest to find the mystical Tiamond in the Castle of Unrelenting Terror may be thwarted by the return of Caliban, king of the trancers who was thought dead.",
  "poster_path": "/epMaTjPDMbgC8TbW1ZToh4RNv0i.jpg"
  },
  {
  "popularity": 0.6,
  "vote_count": 1,
  "video": false,
  "poster_path": "/1lDY7ZpEKOl3OaIQURjRbmFPfT8.jpg",
  "id": 460616,
  "adult": false,
  "backdrop_path": null,
  "original_language": "en",
  "original_title": "Interstellar Civil War: Shadows of the Empire",
  "genre_ids": [
  28,
  14,
  878
  ],
  "title": "Interstellar Civil War: Shadows of the Empire",
  "vote_average": 4,
  "overview": "The Imperial Empire is attacked by an Alliance of rebels led by fanatical mystics. The ruler, Empress Nobu, the 8th generation of her family, wants to execute a bold plan to rescue a cyborg, Leah C6, trapped on the battle ravaged planet Endor. The Empress believes Leah C6 holds the secret to destroying the Alliance of Rebels before their insurgency can kill millions of citizens of the Empire. She recruits her heroic fleet commander, Lord General Luka Raan and asks him to gather a team from the Empire's elite soldiers, the Galactic Rangers. Raan assembles the team in the ruins of Endor which was attacked by depraved Rebels and outlaws led by, Kindo-Ker, a fanatical mystic in Dark Energy. The Galactic Rangers begin a desperate search to find and rescue Leah C6 before the Alliance Rebels can.",
  "release_date": "2018-04-15"
  }
  ]
})).results;

export default SearchScreen;

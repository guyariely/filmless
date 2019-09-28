import React, { useState, useEffect, useContext } from "react";
import { Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";
import isSmallScreen from '../../../utils/isSmallScreen';
import API from '../../../API/Search';
import SearchResults from './SearchResults';

const SearchScreen = props => {

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const getSearchResults = () => {
    if (!input) return;
    setShowBorder(false);
    setIsLoading(true);

    API.MultiSearch(input).then(searchResults => {
      setSearchResults(searchResults.data.results);
      setIsLoading(false);
    });
  }
  
  useEffect(() => Keyboard.dismiss(), [props.isFocused]);

  const { theme } = useContext(ThemesContext);
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles(theme).container}>
        <Text style={styles(theme).title}>Search</Text>
        <View style={
          showBorder ? 
          [styles(theme).searchButtonContainer, styles(theme).searchButtonContainerBorder] : 
          styles(theme).searchButtonContainer}
        >
          <TextInput
            style={input ? [styles(theme).searchButton, styles(theme).searchButton__active] : styles(theme).searchButton}
            keyboardAppearance="dark"
            placeholder="Search movies"
            placeholderTextColor={theme.text03}
            selectionColor={theme.primary}
            onChangeText={input => setInput(input)}
            value={input}
            returnKeyType="go"
            keyboardType={'ascii-capable'}
            onSubmitEditing={getSearchResults}
          />
        </View>
        <SearchResults 
          isLoading={isLoading}
          searchResults={searchResults}
          setShowBorder={setShowBorder}
          selectMovie={movie => {
            props.navigation.push(
              'MovieScreen', { movie, loadDetails: true }
            );
          }}
          openPersonScreen={person => {
            props.navigation.push(
              'PersonScreen', { person, loadDetails: true }
            );
          }}
        /> 
      </View>
    </TouchableWithoutFeedback>
  )
};


const styles = theme => {
  return {
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: theme.base01,
    },
    title: {
      paddingHorizontal: 28,
      justifyContent: 'flex-end',
      color: theme.text01,
      fontSize: 38,
      paddingTop: isSmallScreen() ? 10 : 20
    },
    searchButtonContainer: {
      paddingTop: 15,
      paddingHorizontal: 28,
      paddingBottom: 30,
      borderBottomWidth: 1,
      borderColor: theme.base01,
    },
    searchButtonContainerBorder: {
      borderColor: theme.base02,
    },
    searchButton: {
      backgroundColor: theme.base02,
      color: theme.text01,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 20,
      fontSize: 24,
    },
    searchButton__active: {
      borderColor: theme.primary,
      borderWidth: 1,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
    }  
  }
};

const multi = JSON.parse(JSON.stringify({
  "page": 1,
  "total_results": 2831,
  "total_pages": 142,
  "results": [
    {
      "known_for_department": "Acting",
      "id": 287,
      "name": "Brad Pitt",
      "known_for": [
        {
          "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
          "vote_count": 17099,
          "video": false,
          "media_type": "movie",
          "id": 550,
          "adult": false,
          "backdrop_path": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
          "original_language": "en",
          "original_title": "Fight Club",
          "genre_ids": [
            18
          ],
          "title": "Fight Club",
          "vote_average": 8.4,
          "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
          "release_date": "1999-10-15"
        },
        {
          "poster_path": "/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
          "vote_count": 12777,
          "video": false,
          "media_type": "movie",
          "id": 16869,
          "adult": false,
          "backdrop_path": "/7nF6B9yCEq1ZCT82sGJVtNxOcl5.jpg",
          "original_language": "en",
          "original_title": "Inglourious Basterds",
          "genre_ids": [
            28,
            18,
            53,
            10752
          ],
          "title": "Inglourious Basterds",
          "vote_average": 8.1,
          "overview": "In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \"The Basterds\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
          "release_date": "2009-08-18"
        },
        {
          "poster_path": "/8zw8IL4zEPjkh8Aysdcd0FwGMb0.jpg",
          "vote_count": 11270,
          "video": false,
          "media_type": "movie",
          "id": 807,
          "adult": false,
          "backdrop_path": "/A0WKbRIojF9DUWG4XLCmg5JK6I5.jpg",
          "original_language": "en",
          "original_title": "Se7en",
          "genre_ids": [
            80,
            9648,
            53
          ],
          "title": "Se7en",
          "vote_average": 8.3,
          "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
          "release_date": "1995-09-22"
        }
      ],
      "popularity": 19.759,
      "profile_path": "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg",
      "adult": false,
      "media_type": "person",
      "gender": 2
    },
    {
      "vote_count": 179,
      "popularity": 7.381,
      "id": 425980,
      "video": false,
      "media_type": "movie",
      "vote_average": 6.1,
      "title": "Brad's Status",
      "release_date": "2017-09-15",
      "original_language": "en",
      "original_title": "Brad's Status",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/eRfANc4xSRNaR8E9fUI9hdLkCWB.jpg",
      "adult": false,
      "overview": "Although Brad has a satisfying career, a sweet wife and a comfortable life in suburban Sacramento, things aren't quite what he imagined during his college glory days. When he accompanies his musical prodigy son on a university tour, he can't help comparing his life with those of his four best college friends who seemingly have more wealthy and glamorous lives. But when circumstances force him to reconnect with his former friends, Brad begins to question whether he has really failed or if their lives are actually more flawed than they appear.",
      "poster_path": "/uXiNpvig7EMq18VyNBUTlWrmN0q.jpg"
    },
    {
      "known_for_department": "Directing",
      "id": 7087,
      "name": "Brad Bird",
      "known_for": [
        {
          "release_date": "2004-11-05",
          "id": 9806,
          "vote_count": 11126,
          "video": false,
          "media_type": "movie",
          "vote_average": 7.7,
          "title": "The Incredibles",
          "genre_ids": [
            28,
            12,
            16,
            10751
          ],
          "original_title": "The Incredibles",
          "original_language": "en",
          "adult": false,
          "backdrop_path": "/wiDGnsn9RtNglgKQy4J1jZQBG5v.jpg",
          "overview": "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
          "poster_path": "/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg"
        },
        {
          "release_date": "2007-06-22",
          "id": 2062,
          "vote_count": 9525,
          "video": false,
          "media_type": "movie",
          "vote_average": 7.7,
          "title": "Ratatouille",
          "genre_ids": [
            16,
            35,
            14,
            10751
          ],
          "original_title": "Ratatouille",
          "original_language": "en",
          "adult": false,
          "backdrop_path": "/sFpGI08aeHIRKlLi9SxLyYrRyZ8.jpg",
          "overview": "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
          "poster_path": "/xVxxSYHAfrEbllyWFQG5df5nwH4.jpg"
        },
        {
          "release_date": "2018-06-15",
          "id": 260513,
          "vote_count": 6949,
          "video": false,
          "media_type": "movie",
          "vote_average": 7.6,
          "title": "Incredibles 2",
          "genre_ids": [
            28,
            12,
            16,
            10751
          ],
          "original_title": "Incredibles 2",
          "original_language": "en",
          "adult": false,
          "backdrop_path": "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
          "overview": "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
          "poster_path": "/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg"
        }
      ],
      "popularity": 2.818,
      "profile_path": "/2XwJyYs6XNLaQuC1O2gbEHT3jxx.jpg",
      "gender": 2,
      "media_type": "person",
      "adult": false
    },
    {
      "vote_count": 10,
      "popularity": 0.708,
      "id": 84267,
      "video": false,
      "media_type": "movie",
      "vote_average": 7.4,
      "title": "Colin & Brad: Two Man Group",
      "release_date": "2011-03-08",
      "original_language": "en",
      "original_title": "Colin & Brad: Two Man Group",
      "genre_ids": [
        35
      ],
      "backdrop_path": "/pmfeLlXq1a6eUGAFWfpubL7mjIn.jpg",
      "adult": false,
      "overview": "Colin Mochrie and Brad Sherwood, stars of the Emmy®-winning Whose Line Is It Anyway?, have finally recorded their hilarious live stage show!! These masters of improv comedy have performed their outrageous, one-of-a-kind show to sold out audiences all over the country. Colin and Brad’s TWO MAN GROUP is a riotously funny, interactive, and completely improvised tour de force. Using nothing but their lightning fast wits and some audience volunteers, Colin and Brad create pandemonium on the spot in one of the funniest live shows you will ever see.",
      "poster_path": "/6riLil5qAkb45YZS6pVFTuIvYOx.jpg"
    },
    {
      "vote_count": 3,
      "popularity": 1.355,
      "id": 470906,
      "video": false,
      "media_type": "movie",
      "vote_average": 6.7,
      "title": "Brad Paisley's Comedy Rodeo",
      "release_date": "2017-08-15",
      "original_language": "en",
      "original_title": "Brad Paisley's Comedy Rodeo",
      "genre_ids": [
        35
      ],
      "backdrop_path": "/3B3E5lWz3tEpq8A5sEosqtSIew1.jpg",
      "adult": false,
      "overview": "Country music star Brad Paisley hosts a night of music and laughs with comics Nate Bargatze, John Heffron, Jon Reep, Sarah Tiana and Mike E. Winfield.",
      "poster_path": "/3FWHG4zuucAtvE10a25kfZk3SRP.jpg"
    },
    {
      "known_for_department": "Acting",
      "id": 1370,
      "name": "Brad Dourif",
      "known_for": [
        {
          "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
          "vote_count": 13815,
          "video": false,
          "media_type": "movie",
          "id": 122,
          "adult": false,
          "backdrop_path": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
          "original_language": "en",
          "original_title": "The Lord of the Rings: The Return of the King",
          "genre_ids": [
            28,
            12,
            14
          ],
          "title": "The Lord of the Rings: The Return of the King",
          "vote_average": 8.4,
          "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
          "release_date": "2003-12-01"
        },
        {
          "poster_path": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
          "vote_count": 13090,
          "video": false,
          "media_type": "movie",
          "id": 121,
          "adult": false,
          "backdrop_path": "/dG4BmM32XJmKiwopLDQmvXEhuHB.jpg",
          "original_language": "en",
          "original_title": "The Lord of the Rings: The Two Towers",
          "genre_ids": [
            28,
            12,
            14
          ],
          "title": "The Lord of the Rings: The Two Towers",
          "vote_average": 8.3,
          "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
          "release_date": "2002-12-18"
        },
        {
          "poster_path": "/2Sns5oMb356JNdBHgBETjIpRYy9.jpg",
          "vote_count": 5796,
          "video": false,
          "media_type": "movie",
          "id": 510,
          "adult": false,
          "backdrop_path": "/4E7YQcwui0PfNXguf4V2X8YocPC.jpg",
          "original_language": "en",
          "original_title": "One Flew Over the Cuckoo's Nest",
          "genre_ids": [
            18
          ],
          "title": "One Flew Over the Cuckoo's Nest",
          "vote_average": 8.4,
          "overview": "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
          "release_date": "1975-11-18"
        }
      ],
      "popularity": 5.089,
      "profile_path": "/ykd2SqIQSFLTjVjEhc8BKHjFcCM.jpg",
      "adult": false,
      "media_type": "person",
      "gender": 2
    },
    {
      "known_for_department": "Acting",
      "id": 18,
      "name": "Brad Garrett",
      "known_for": [
        {
          "poster_path": "/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg",
          "vote_count": 12213,
          "video": false,
          "media_type": "movie",
          "id": 12,
          "adult": false,
          "backdrop_path": "/2Vv4suw1ja7RpnR6FaXAOihI68g.jpg",
          "original_language": "en",
          "original_title": "Finding Nemo",
          "genre_ids": [
            16,
            10751
          ],
          "title": "Finding Nemo",
          "vote_average": 7.8,
          "overview": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
          "release_date": "2003-05-30"
        },
        {
          "poster_path": "/xVxxSYHAfrEbllyWFQG5df5nwH4.jpg",
          "vote_count": 9536,
          "video": false,
          "media_type": "movie",
          "id": 2062,
          "adult": false,
          "backdrop_path": "/sFpGI08aeHIRKlLi9SxLyYrRyZ8.jpg",
          "original_language": "en",
          "original_title": "Ratatouille",
          "genre_ids": [
            16,
            35,
            14,
            10751
          ],
          "title": "Ratatouille",
          "vote_average": 7.7,
          "overview": "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
          "release_date": "2007-06-22"
        },
        {
          "poster_path": "/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
          "vote_count": 8225,
          "video": false,
          "media_type": "movie",
          "id": 127380,
          "adult": false,
          "backdrop_path": "/3iSCdXjDmY3DuEOUYsElu35vQU6.jpg",
          "original_language": "en",
          "original_title": "Finding Dory",
          "genre_ids": [
            12,
            16,
            35,
            10751
          ],
          "title": "Finding Dory",
          "vote_average": 7,
          "overview": "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
          "release_date": "2016-06-16"
        }
      ],
      "popularity": 11.875,
      "profile_path": "/wXihtlnIvqP2oSNj33hiorDd3v9.jpg",
      "adult": false,
      "media_type": "person",
      "gender": 2
    },
    {
      "original_name": "Dating Brad Garrett",
      "id": 63250,
      "media_type": "tv",
      "name": "Dating Brad Garrett",
      "popularity": 0.6,
      "vote_count": 0,
      "vote_average": 0,
      "first_air_date": "2008-01-01",
      "poster_path": null,
      "genre_ids": [],
      "original_language": "en",
      "backdrop_path": null,
      "overview": "Comedian Brad Garrett goes on blind dates with women he finds using the Internet.",
      "origin_country": []
    },
    {
      "vote_count": 3,
      "popularity": 0.6,
      "id": 248615,
      "video": false,
      "media_type": "movie",
      "vote_average": 5,
      "title": "Lieber Brad",
      "release_date": "2001-11-29",
      "original_language": "de",
      "original_title": "Lieber Brad",
      "genre_ids": [
        35,
        10751
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "",
      "poster_path": "/hVPNpaiaeW4jmr5g4kvXh3EtIp4.jpg"
    },
    {
      "known_for_department": "Directing",
      "id": 132876,
      "name": "Brad Peyton",
      "known_for": [
        {
          "release_date": "2015-05-29",
          "id": 254128,
          "vote_count": 5326,
          "video": false,
          "media_type": "movie",
          "vote_average": 6.1,
          "title": "San Andreas",
          "genre_ids": [
            28,
            18,
            53
          ],
          "original_title": "San Andreas",
          "original_language": "en",
          "adult": false,
          "backdrop_path": "/6MBI4R5IDLZJcm17mOUfwOg8pLm.jpg",
          "overview": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
          "poster_path": "/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg"
        },
        {
          "poster_path": "/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg",
          "id": 427641,
          "vote_count": 3441,
          "video": false,
          "media_type": "movie",
          "adult": false,
          "backdrop_path": "/wrqUiMXttHE4UBFMhLHlN601MZh.jpg",
          "genre_ids": [
            28,
            12,
            878,
            14
          ],
          "original_title": "Rampage",
          "original_language": "en",
          "title": "Rampage",
          "vote_average": 6.2,
          "overview": "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
          "release_date": "2018-04-13"
        },
        {
          "release_date": "2012-02-10",
          "id": 72545,
          "vote_count": 2273,
          "video": false,
          "media_type": "movie",
          "vote_average": 5.9,
          "title": "Journey 2: The Mysterious Island",
          "genre_ids": [
            28,
            12,
            878
          ],
          "original_title": "Journey 2: The Mysterious Island",
          "original_language": "en",
          "adult": false,
          "backdrop_path": "/j9AGoD7PG2pvjxyMqKWSRlo7YS1.jpg",
          "overview": "Sean Anderson partners with his mom's boyfriend on a mission to find his grandfather, who is thought to be missing on a mythical island.",
          "poster_path": "/jMu45saMeqB2RGDqV3HoQ3XgZ2a.jpg"
        }
      ],
      "popularity": 4.711,
      "profile_path": "/7F7dM4A6QbA67xOxTJyv3aqinrA.jpg",
      "gender": 2,
      "media_type": "person",
      "adult": false
    },
    {
      "original_name": "It's a Brad, Brad World",
      "id": 42346,
      "media_type": "tv",
      "name": "It's a Brad, Brad World",
      "popularity": 0.6,
      "vote_count": 0,
      "vote_average": 0,
      "first_air_date": "2012-01-12",
      "poster_path": "/1BzN7ibYemJgMBoMiIEjZoPVSIZ.jpg",
      "genre_ids": [],
      "original_language": "en",
      "backdrop_path": "/smlfe10l9o3QTH5fUaQ4Aixt5PY.jpg",
      "overview": "It's a Brad, Brad World is an American reality documentary television series on Bravo. The series debuted on January 12, 2012. On August 29, 2012, Bravo announced that the series has been renewed for a second season which debuted on March 6, 2013.",
      "origin_country": [
        "US"
      ]
    },
    {
      "vote_count": 3,
      "popularity": 0.6,
      "id": 55353,
      "video": false,
      "media_type": "movie",
      "vote_average": 5.5,
      "title": "Brad Stine - Wussification",
      "release_date": "2007-09-30",
      "original_language": "en",
      "original_title": "Brad Stine - Wussification",
      "genre_ids": [
        35
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Wussification is a no-holds-barred laugh riot that attacks political correctness at every turn. From lambasting witches for being over-sensitive to Brad’s frustration with Christianity’s own form of political correctness, Stine once again infuses his one of a kind style of comedy with equal inspiration for his Christian tribe in a DVD that is guaranteed to become a classic. Comes with the CD as well!",
      "poster_path": "/ng2aa2VkIceAG7vgrvHcLYoA7kG.jpg"
    },
    {
      "known_for_department": "Acting",
      "id": 41945,
      "name": "Brad Bartram",
      "known_for": [
        {
          "poster_path": "/wOcnncwUUl1D0WZ8IiT8oRNIzBi.jpg",
          "id": 60818,
          "vote_count": 6,
          "video": false,
          "media_type": "movie",
          "adult": false,
          "backdrop_path": "/lLWUnqs2ZvIE7iTlGETxkPPBfHp.jpg",
          "genre_ids": [
            35
          ],
          "original_title": "Bikini Airways",
          "original_language": "en",
          "title": "Bikini Airways",
          "vote_average": 6,
          "overview": "The sexy funs flies fast and furious as Teri inherits a failing airline that's deep in debt. To turn things around, she and her girlfriends decide to charter the plane out for flying bachelor parties with great success!",
          "release_date": "2003-04-22"
        },
        {
          "poster_path": "/vzFizU0VenRBr0CeE5nkHxP0Lz5.jpg",
          "vote_count": 6,
          "video": false,
          "media_type": "movie",
          "id": 85203,
          "adult": false,
          "genre_ids": [
            27
          ],
          "original_title": "Twisted Nightmare",
          "original_language": "en",
          "title": "Twisted Nightmare",
          "vote_average": 3.7,
          "overview": "A group of teenagers win a trip to a summer camp they had attended as children. However, soon after they get there they begin to disappear one by one. The survivors suspect that the disappearances may be connected to the death of a handicapped child at the camp years before.",
          "release_date": "1987-01-01"
        },
        {
          "poster_path": "/bHdsckyQR1YeEB9lCJSiw5n0lqw.jpg",
          "vote_count": 3,
          "video": false,
          "media_type": "movie",
          "id": 61192,
          "adult": false,
          "genre_ids": [
            18,
            10749
          ],
          "original_title": "Personals: College Girl Seeking...",
          "original_language": "en",
          "title": "Personals: College Girl Seeking...",
          "vote_average": 6.3,
          "overview": "Juliette is studying at a big American university in pursuit of her Ph.D. Through grand design, she is assigned Sexual Psychology for the topic of her dissertation. Being very sexually inexperienced, Juliette places a personal ad to attract suitable \"research\" partners. College years are the time for new experiences and the awakening of dormant personality traits, and Juliette discovers that there is much more to her sexuality than she could ever possibly have imagined!",
          "release_date": "2001-04-17"
        }
      ],
      "popularity": 1.646,
      "profile_path": "/t89KOtiMoiqqK7PoYg9oPXYEGjf.jpg",
      "gender": 2,
      "media_type": "person",
      "adult": false
    },
    {
      "original_name": "Brad Meltzer's Decoded",
      "id": 34992,
      "media_type": "tv",
      "name": "Brad Meltzer's Decoded",
      "popularity": 0.6,
      "vote_count": 4,
      "vote_average": 5.5,
      "first_air_date": "2010-12-02",
      "poster_path": "/stz43Iq6UYpWhLBxeeDV9i3z5aq.jpg",
      "genre_ids": [
        9648,
        99
      ],
      "original_language": "en",
      "backdrop_path": "/j3kILhDAOK3JfVAdDAmElLQs58c.jpg",
      "overview": "Brad Meltzer's Decoded, is an American mystery and conspiracy theory investigation television series, produced by Go Go Luckey and Berman/Braun, that premiered December 2, 2010 on the History channel. The series is hosted by political thriller author and non-fiction writer Brad Meltzer and follows a team of investigators who try to determine the meanings behind various symbolism, alleged secret codes and conspiracies that surround us every day.",
      "origin_country": [
        "US"
      ]
    },
    {
      "known_for_department": "Acting",
      "id": 65475,
      "name": "Brad Rowe",
      "known_for": [
        {
          "poster_path": "/sHr05tz70r7y8A6XrdCBsHPK7tF.jpg",
          "vote_count": 3096,
          "video": false,
          "media_type": "movie",
          "id": 6637,
          "adult": false,
          "backdrop_path": "/ivrtuhSZnkEqzkdCyFXcH8UbPVp.jpg",
          "original_language": "en",
          "original_title": "National Treasure: Book of Secrets",
          "genre_ids": [
            28,
            12,
            9648,
            53
          ],
          "title": "National Treasure: Book of Secrets",
          "vote_average": 6.2,
          "overview": "Benjamin Franklin Gates and Dr. Abigail Chase re-team with Riley Poole and, now armed with a stack of long-lost pages from John Wilkes Booth’s diary, Ben must follow a clue left there to prove his ancestor’s innocence in the assassination of Abraham Lincoln.",
          "release_date": "2007-12-13"
        },
        {
          "original_name": "How I Met Your Mother",
          "genre_ids": [
            35
          ],
          "media_type": "tv",
          "name": "How I Met Your Mother",
          "origin_country": [
            "US"
          ],
          "vote_count": 1185,
          "first_air_date": "2005-09-19",
          "backdrop_path": "/jqLv26q1BcU6mIEWBl0z7nmUYr8.jpg",
          "original_language": "en",
          "id": 1100,
          "vote_average": 7.5,
          "overview": "How I Met Your Mother is an American sitcom that originally aired on CBS from September 19, 2005, to March 31, 2014. The series follows the main character, Ted Mosby, and his group of friends in Manhattan. As a framing device, Ted, in the year 2030, recounts to his son and daughter the events that led to his meeting their mother.",
          "poster_path": "/izncB6dCLV7LBQ5MsOPyMx9mUDa.jpg"
        },
        {
          "original_name": "Criminal Minds",
          "id": 4057,
          "media_type": "tv",
          "name": "Criminal Minds",
          "vote_count": 620,
          "vote_average": 7.1,
          "first_air_date": "2005-09-22",
          "poster_path": "/7TCwgX7oQKxcWYEhSPRmaHe6ULN.jpg",
          "genre_ids": [
            80,
            18,
            9648
          ],
          "original_language": "en",
          "backdrop_path": "/mzyLxbwy5jOveyfsbC1OWGp78NV.jpg",
          "overview": "An elite team of FBI profilers analyze the country's most twisted criminal minds, anticipating their next moves before they strike again. The Behavioral Analysis Unit's most experienced agent is David Rossi, a founding member of the BAU who returns to help the team solve new cases.",
          "origin_country": [
            "US"
          ]
        }
      ],
      "popularity": 6.098,
      "profile_path": "/htYBmmA2qtBNwt5zCG2WCH1TWWM.jpg",
      "adult": false,
      "media_type": "person",
      "gender": 2
    },
    {
      "poster_path": "/50SMaYtp4dNiUH1052liHYxD2w9.jpg",
      "popularity": 0.6,
      "vote_count": 0,
      "video": true,
      "media_type": "movie",
      "id": 628086,
      "adult": false,
      "backdrop_path": null,
      "original_language": "en",
      "original_title": "Brad Stine - God's Comic",
      "genre_ids": [],
      "title": "Brad Stine - God's Comic",
      "vote_average": 0,
      "overview": "What happens when you unleash an unabashed Christian comedian and political conservative? You get Hysterical Social Commentary. Brad Stine's comedy is sweeping the nation and his popularity is booming! This first-rate performer headlines at comedy clubs and colleges across the country, and has been seen on MTV's \"Half Hour Comedy Hour,\" Showtime's \"Comedy Club Network\" and A&E's \"Caroline's Comedy Hour,\" \"Evening at the Improv\" and \"Comedy on the Road.\" No one is safe from cutting edge side-splitting humor as Brad Stine takes us on a journey through our convictions and presumptions. Brad Stine is going where no other Christian conservative comic has gone before, breaking new ground with his inspiring in-your-face style that is seen full force in \"Brad Stine-Gods Comic\".",
      "release_date": "2012-08-01"
    },
    {
      "vote_count": 1,
      "popularity": 0.6,
      "id": 437500,
      "video": false,
      "media_type": "movie",
      "vote_average": 6,
      "title": "Brad Cuts Loose",
      "release_date": "2017-01-20",
      "original_language": "en",
      "original_title": "Brad Cuts Loose",
      "genre_ids": [
        35
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Brad, an uptight office drone, seemingly discovers the perfect vehicle for letting off steam when an advertisement for a business catering to his innermost desires pops up one morning on his computer. Brad's subsequent visit to the business and encounter with its receptionist Janine, however, don't quite go as planned.",
      "poster_path": null
    },
    {
      "known_for_department": "Acting",
      "id": 51214,
      "name": "Brad Renfro",
      "known_for": [
        {
          "vote_count": 1475,
          "id": 819,
          "video": false,
          "media_type": "movie",
          "vote_average": 7.5,
          "title": "Sleepers",
          "release_date": "1996-10-18",
          "original_language": "en",
          "original_title": "Sleepers",
          "genre_ids": [
            80,
            18,
            53
          ],
          "backdrop_path": "/vvdo7wDPJZHfstNMKprqRIM8l3B.jpg",
          "adult": false,
          "overview": "Two gangsters seek revenge on the state jail worker who during their stay at a youth prison sexually abused them. A sensational court hearing takes place to charge him for the crimes.",
          "poster_path": "/cDqEv4Fw4JZh2zCfecqw3z09L8z.jpg"
        },
        {
          "poster_path": "/ts5hSSpgHEcPFpdfk6gmLLgx5k4.jpg",
          "vote_count": 775,
          "video": false,
          "media_type": "movie",
          "id": 9667,
          "adult": false,
          "backdrop_path": "/4y4jpkHGh10QPNWy1iClCUgF8rX.jpg",
          "original_language": "en",
          "original_title": "The Jacket",
          "genre_ids": [
            18,
            9648,
            53
          ],
          "title": "The Jacket",
          "vote_average": 6.9,
          "overview": "A military veteran goes on a journey into the future, where he can foresee his death and is left with questions that could save his life and those he loves.",
          "release_date": "2005-03-04"
        },
        {
          "vote_count": 722,
          "id": 1548,
          "video": false,
          "media_type": "movie",
          "vote_average": 7.2,
          "title": "Ghost World",
          "release_date": "2001-07-20",
          "original_language": "en",
          "original_title": "Ghost World",
          "genre_ids": [
            35,
            18
          ],
          "backdrop_path": "/faB6wyGOaILrJ0FwV2t9XWbvg9E.jpg",
          "adult": false,
          "overview": "Two quirky, cynical teenaged girls try to figure out what to do with their lives after high school graduation. After they play a prank on an eccentric, middle aged record collector, one of them befriends him, which causes a rift in the girls' friendship.",
          "poster_path": "/2qdw5cGpXcG56j5pWU4e6UYKk0v.jpg"
        }
      ],
      "popularity": 2.376,
      "profile_path": "/sboIOdBAvNZj894aP5XCqxF9zHG.jpg",
      "adult": false,
      "media_type": "person",
      "gender": 2
    },
    {
      "known_for_department": "Writing",
      "id": 68574,
      "name": "Brad Copeland",
      "known_for": [
        {
          "vote_count": 1514,
          "id": 364689,
          "video": false,
          "media_type": "movie",
          "vote_average": 7.1,
          "title": "Ferdinand",
          "release_date": "2017-12-09",
          "original_language": "en",
          "original_title": "Ferdinand",
          "genre_ids": [
            16,
            10751,
            12,
            35
          ],
          "backdrop_path": "/sTOhZruocNubL0HxjvdouwCEL9I.jpg",
          "adult": false,
          "overview": "Ferdinand, a little bull, prefers sitting quietly under a cork tree just smelling the flowers versus jumping around, snorting, and butting heads with other bulls. As Ferdinand grows big and strong, his temperament remains mellow, but one day five men come to choose the \"biggest, fastest, roughest bull\" for the bullfights in Madrid and Ferdinand is mistakenly chosen.  Based on the classic 1936 children's book by Munro Leaf.",
          "poster_path": "/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg"
        },
        {
          "poster_path": "/7uxAapp2ZITmQmjdyodFgCAINAG.jpg",
          "vote_count": 1262,
          "video": false,
          "media_type": "movie",
          "id": 11199,
          "adult": false,
          "backdrop_path": "/9tayGegNltU7dIwa6ZGFuEFofbP.jpg",
          "original_language": "en",
          "original_title": "Wild Hogs",
          "genre_ids": [
            28,
            12,
            35
          ],
          "title": "Wild Hogs",
          "vote_average": 5.8,
          "overview": "Restless and ready for adventure, four suburban bikers leave the safety of their subdivision and head out on the open road. But complications ensue when they cross paths with an intimidating band of New Mexico bikers known as the Del Fuegos.",
          "release_date": "2007-03-02"
        },
        {
          "original_name": "Arrested Development",
          "id": 4589,
          "media_type": "tv",
          "name": "Arrested Development",
          "vote_count": 541,
          "vote_average": 8.1,
          "first_air_date": "2003-11-02",
          "poster_path": "/qMzwO952hMWQSCfHkp7IL20s4K7.jpg",
          "genre_ids": [
            35
          ],
          "original_language": "en",
          "backdrop_path": "/ArZwmJl1y6qlnLjuE9FXlEd8RU0.jpg",
          "overview": "The story of a wealthy family that lost everything, and the one son who had no choice but to keep them all together.",
          "origin_country": [
            "US"
          ]
        }
      ],
      "popularity": 3.353,
      "profile_path": null,
      "adult": false,
      "media_type": "person",
      "gender": 2
    },
    {
      "known_for_department": "Acting",
      "id": 92024,
      "name": "Brad Gorton",
      "known_for": [
        {
          "vote_count": 81,
          "id": 24584,
          "video": false,
          "media_type": "movie",
          "vote_average": 6.9,
          "title": "Get Real",
          "release_date": "1998-08-16",
          "original_language": "en",
          "original_title": "Get Real",
          "genre_ids": [
            18,
            10749
          ],
          "backdrop_path": "/vy9VXAiOw2Q9E4zyaQ0WxObnxT8.jpg",
          "adult": false,
          "overview": "Steven spends his school days longing for all-star athlete John. But John has a gorgeous girlfriend, and Steven is still in the closet about being gay. The only one who knows the teenager's secret is his friend Linda. After a curious run-in with John in a public restroom, Steven starts to wonder if the jock is straight after all. When they start a romance, it threatens to expose the truth about both of them.",
          "poster_path": "/k7KCBnt1VXFhPjoTSt4MePr1MpI.jpg"
        },
        {
          "original_name": "Doctors",
          "id": 5080,
          "media_type": "tv",
          "name": "Doctors",
          "vote_count": 21,
          "vote_average": 3.8,
          "first_air_date": "2000-03-27",
          "poster_path": "/A7BUTkZC52NLwLiZR37cHDSED7F.jpg",
          "genre_ids": [
            10766,
            18
          ],
          "original_language": "en",
          "backdrop_path": "/xUpX52p1ULnvC7LyMnEXHppb7nA.jpg",
          "overview": "Set in the fictional Midlands town of Letherbridge, defined as being close to the city of Birmingham, this soap opera follows the staff and families of a doctor's surgery.",
          "origin_country": [
            "GB"
          ]
        },
        {
          "original_name": "Footballers' Wives",
          "id": 772,
          "media_type": "tv",
          "name": "Footballers' Wives",
          "vote_count": 4,
          "vote_average": 7.4,
          "first_air_date": "2002-01-08",
          "poster_path": "/xhJdJX1057YxcNneZjr9Bo5y26m.jpg",
          "genre_ids": [
            18
          ],
          "original_language": "en",
          "backdrop_path": "/2nP8eVg67kjsEKhtoQHGRMBvsXi.jpg",
          "overview": "Footballers' Wives is a British television drama surrounding the fictional Premier League Association football club Earls Park F.C., its players, and their wives. It was broadcast on the ITV network from 8 January 2002 to 14 April 2006. The show began with a multi-lateral focus on a variety of different types of relationships explored; however, from the third series onward, the primary focus was on a complex love triangle between Tanya Turner, Amber Gates and Conrad Gates.",
          "origin_country": [
            "GB"
          ]
        }
      ],
      "popularity": 1.143,
      "profile_path": "/oV1Qe1MQdVfdnhbfHvTgnMEJyAd.jpg",
      "adult": false,
      "media_type": "person",
      "gender": 2
    }
  ]
})).results;


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

export default withNavigationFocus(SearchScreen);

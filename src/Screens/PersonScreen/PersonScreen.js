import React, { useState, useEffect } from "react";
import API_KEY from '../../../env';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import colors from '../../Constants/colors';
import Person from './Person/Person';

const PersonScreen = props => {

  const [person, setPerson] = useState(props.navigation.getParam('person', {}));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getPersonDetails = async () => {
      try {
        const personDetails = await axios.get(`https://api.themoviedb.org/3/person/${person.id}?api_key=${API_KEY}&append_to_response=movie_credits,tagged_images`, { cancelToken: source.token });
        setPerson(personDetails.data);
        setIsLoading(false);
      } 
      catch (error) {
        console.log(error);
      }
    }
    getPersonDetails();

    return () => source.cancel();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size='small' color={colors.text01} />
      </View> 
    );
  }

  return (
    <View style={styles.container}>
      <Person 
        person={person} 
        goBack={() => props.navigation.goBack()} 
        goRoot={() => props.navigation.popToTop()}
        openLightbox={(images, index) => props.navigation.push(
          'Lightbox', { images, index }
        )}
        openBiographyScreen={() => props.navigation.push(
          'BiographyScreen', { person: person }
        )}
        openMovieScreen={movie => {
          props.navigation.push(
            'MovieScreen', { movie, loadDetails: true }
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.base01
  }
});

const person_data = JSON.parse(JSON.stringify({
  "birthday": "1940-07-13",
  "known_for_department": "Acting",
  "deathday": null,
  "id": 2387,
  "movie_credits": {
  "cast": [
  {
  "poster_path": "/wjrXjlNpDq9U8vYmAwf420yDFtn.jpg",
  "adult": false,
  "backdrop_path": "/mmwQBfWmEqJBOwfsjIBJPchXlSP.jpg",
  "vote_count": 686,
  "video": false,
  "id": 193,
  "popularity": 7.801,
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "title": "Star Trek: Generations",
  "original_title": "Star Trek: Generations",
  "release_date": "1994-11-17",
  "character": "Captain Jean-Luc Picard",
  "vote_average": 6.5,
  "overview": "Captain Jean-Luc Picard and the crew of the Enterprise-D find themselves at odds with the renegade scientist Soran who is destroying entire star systems. Only one man can help Picard stop Soran's scheme...and he's been dead for seventy-eight years.",
  "credit_id": "52fe4225c3a36847f80076d9"
  },
  {
  "poster_path": "/qhVB8eUGwkdVvd8Fezk0AgcMPDH.jpg",
  "adult": false,
  "backdrop_path": "/welkOTUozJ968u1KLx33vPpo7aS.jpg",
  "vote_count": 971,
  "video": false,
  "id": 199,
  "popularity": 12.137,
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "title": "Star Trek: First Contact",
  "original_title": "Star Trek: First Contact",
  "release_date": "1996-11-21",
  "character": "Captain Jean-Luc Picard",
  "vote_average": 7.2,
  "overview": "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
  "credit_id": "52fe4226c3a36847f8007ba3"
  },
  {
  "poster_path": "/9pbc44kltJhArUNyrdQcantMEvH.jpg",
  "adult": false,
  "backdrop_path": "/yaattgmMQ9dLg6n8XPXAER8WI2C.jpg",
  "vote_count": 622,
  "video": false,
  "id": 200,
  "popularity": 13.203,
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "title": "Star Trek: Insurrection",
  "original_title": "Star Trek: Insurrection",
  "release_date": "1998-12-10",
  "character": "Captain Jean-Luc Picard",
  "vote_average": 6.4,
  "overview": "When an alien race and factions within Starfleet attempt to take over a planet that has \"regenerative\" properties, it falls upon Captain Picard and the crew of the Enterprise to defend the planet's people as well as the very ideals upon which the Federation itself was founded.",
  "credit_id": "52fe4226c3a36847f8007c27"
  },
  {
  "release_date": "2002-12-13",
  "adult": false,
  "vote_average": 6.2,
  "vote_count": 741,
  "video": false,
  "title": "Star Trek: Nemesis",
  "popularity": 12.558,
  "genre_ids": [
  878,
  28,
  12,
  53
  ],
  "original_language": "en",
  "character": "Captain Jean-Luc Picard",
  "original_title": "Star Trek: Nemesis",
  "poster_path": "/n4TpLWPi062AofIq4kwmaPNBSvA.jpg",
  "id": 201,
  "backdrop_path": "/1SLR0LqYPU3ahXyPK9RZISjI3B7.jpg",
  "overview": "En route to the honeymoon of William Riker to Deanna Troi on her home planet of Betazed, Captain Jean-Luc Picard and the crew of the U.S.S. Enterprise receives word from Starfleet that a coup has resulted in the installation of a new Romulan political leader, Shinzon, who claims to seek peace with the human-backed United Federation of Planets. Once in enemy territory, the captain and his crew make a startling discovery: Shinzon is human, a slave from the Romulan sister planet of Remus, and has a secret, shocking relationship to Picard himself.",
  "credit_id": "52fe4226c3a36847f8007cf1"
  },
  {
  "release_date": "1999-10-03",
  "adult": false,
  "vote_average": 5.8,
  "vote_count": 66,
  "video": false,
  "title": "Animal Farm",
  "popularity": 5.275,
  "genre_ids": [
  10751,
  18,
  35
  ],
  "original_language": "en",
  "character": "Napoleon (voice)",
  "original_title": "Animal Farm",
  "poster_path": "/4xWXTDfXXD12EVWryQ3MiGvZx6C.jpg",
  "id": 815,
  "backdrop_path": "/fjnR40mRVipKHUIDj75eOe2vihw.jpg",
  "overview": "An animated film from 1999 based on the famous novel by George Orwell. Animals on a farm lead a revolution against the farmers to put their destiny in their own hands. However this revolution eats their own children and they cannot avoid corruption.",
  "credit_id": "52fe427ac3a36847f8021e35"
  },
  {
  "poster_path": "/wuiUqivUWiUySwhEvtdOqrlrLPn.jpg",
  "adult": false,
  "backdrop_path": "/o5l7nvYLfisSndoOIbMxoUHfdNd.jpg",
  "vote_count": 1072,
  "video": false,
  "id": 841,
  "popularity": 11.837,
  "genre_ids": [
  28,
  12,
  878
  ],
  "original_language": "en",
  "title": "Dune",
  "original_title": "Dune",
  "release_date": "1984-12-14",
  "character": "Gurney Halleck",
  "vote_average": 6.4,
  "overview": "In the year 10,191, the world is at war for control of the desert planet Dune—the only place where the time-travel substance 'Spice' can be found. But when one leader gives up control, it's only so he can stage a coup with some unsavory characters.",
  "credit_id": "52fe427fc3a36847f8023681"
  },
  {
  "poster_path": "/4hGzZ2DAjdu6IjHT7dGfiVatHEu.jpg",
  "adult": false,
  "backdrop_path": "/cTjQ1Lqipf3wLnWUHogqHQFIdb9.jpg",
  "vote_count": 578,
  "video": false,
  "id": 1273,
  "popularity": 12.873,
  "genre_ids": [
  12,
  16,
  35,
  10751
  ],
  "original_language": "en",
  "title": "TMNT",
  "original_title": "TMNT",
  "release_date": "2007-03-23",
  "character": "Winters (voice)",
  "vote_average": 5.9,
  "overview": "After the defeat of their old arch nemesis, The Shredder, the Turtles have grown apart as a family. Struggling to keep them together, their rat sensei, Splinter, becomes worried when strange things begin to brew in New York City.",
  "credit_id": "52fe42ecc3a36847f802d411"
  },
  {
  "release_date": "1991-02-08",
  "adult": false,
  "vote_average": 6.5,
  "vote_count": 139,
  "video": false,
  "title": "L.A. Story",
  "popularity": 10.391,
  "genre_ids": [
  35,
  18,
  14,
  10749
  ],
  "original_language": "en",
  "character": "Mr. Perdue",
  "original_title": "L.A. Story",
  "poster_path": "/zYuSaKMM2Hls7erz0MNKh4cje25.jpg",
  "id": 2107,
  "backdrop_path": "/tICxGzjJit4yIRi0P8RvX8WPmVK.jpg",
  "overview": "With the help of a talking freeway billboard, a \"wacky weatherman\" tries to win the heart of an English newspaper reporter, who is struggling to make sense of the strange world of early-90s Los Angeles.",
  "credit_id": "52fe4336c3a36847f8042e07"
  },
  {
  "poster_path": "/4z1RrShv0f0bpA8jSZfFeMH0jdS.jpg",
  "adult": false,
  "backdrop_path": "/4ADZ2iiATjoKxZwjJRiEo1x6Fk0.jpg",
  "vote_count": 213,
  "video": false,
  "id": 10946,
  "popularity": 8.513,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "title": "Earth",
  "original_title": "Earth",
  "release_date": "2007-04-22",
  "character": "Narrator",
  "vote_average": 7.5,
  "overview": "From the acclaimed team that brought you BBC's visual feast \"Planet Earth,\" this feature length film incorporates some of the same footage from the series with all new scenes following three remarkable, yet sadly endangered, families of animal across the globe.",
  "credit_id": "52fe43d79251416c75020267"
  },
  {
  "release_date": "1993-04-14",
  "adult": false,
  "vote_average": 4.8,
  "vote_count": 26,
  "video": false,
  "title": "Death Train",
  "popularity": 2.561,
  "genre_ids": [
  10770,
  28,
  53
  ],
  "original_language": "en",
  "character": "Malcolm Philpott",
  "original_title": "Death Train",
  "poster_path": "/2DTlIoISLhgZvTPXvJtuZfdyTOu.jpg",
  "id": 20435,
  "backdrop_path": "/oNYtt0tV6WYDCJDqHeMgygYvh9.jpg",
  "overview": "When a renegade Russian general sends a nuclear bomb hurtling toward the Middle East aboard a hijacked train, special agents are dispatched to disarm the deadly device.  Ten tons of steel and one ounce of hot plutonium are now riding roughshod through Europe.  With time running out, the agents launch a desperate, bullet-packed assault on a deadly moving target piloted by a cold-blooded mercenary.",
  "credit_id": "52fe43e6c3a368484e004d1f"
  },
  {
  "release_date": "1993-01-01",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "The Secret of Life on Earth",
  "popularity": 1.126,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "The Secret of Life on Earth",
  "poster_path": "/z6VK5d1Ir2zVY0r5xGgBYsG8FZs.jpg",
  "id": 21746,
  "backdrop_path": null,
  "overview": "A breathtaking adventure across five continents and through time to reveal nature's most vital secret. Watch a flying fox gorge itself on a midnight snack of figs. Climb into the prickly jaws of insect-eating plants. Witness a mantis disguised as a flower petal lure its prey to doom.",
  "credit_id": "52fe4425c3a368484e01220f"
  },
  {
  "release_date": "1986-02-07",
  "adult": false,
  "vote_average": 7,
  "vote_count": 41,
  "video": false,
  "title": "Lady Jane",
  "popularity": 3.831,
  "genre_ids": [
  18,
  10749,
  36
  ],
  "original_language": "en",
  "character": "Henry Grey, Duke of Suffolk",
  "original_title": "Lady Jane",
  "poster_path": "/vfk2B6WJhgPIB9MriEzLg3N5uj3.jpg",
  "id": 21867,
  "backdrop_path": "/5KP4ONli1XfgmXHPm3Q2nQl3I1W.jpg",
  "overview": "The death of King Henry VIII throws his kingdom into chaos because of succession disputes. His weak son Edward, is on his deathbed. Anxious to keep England true to the Reformation, a scheming minister John Dudley marries off his son, Guildford to Lady Jane Grey, whom he places on the throne after Edward dies. At first hostile to each other, Guildford and Jane fall in love. But they cannot withstand the course of power which will lead to their ultimate downfall.",
  "credit_id": "52fe442bc3a368484e0137b1"
  },
  {
  "release_date": "1981-04-10",
  "adult": false,
  "vote_average": 7,
  "vote_count": 467,
  "video": false,
  "title": "Excalibur",
  "popularity": 10.529,
  "genre_ids": [
  12,
  14
  ],
  "original_language": "en",
  "character": "Leondegrance",
  "original_title": "Excalibur",
  "poster_path": "/j8UmbdA1TrIVY4FANymwBSmUuCH.jpg",
  "id": 11527,
  "backdrop_path": "/lgDDGQh4z1Hat5IRe9xxbjiDiVQ.jpg",
  "overview": "A surreal adaptation of Sir Thomas Malory's \"Le Morte d'Arthur\", chronicling Arthur Pendragon's conception, his rise to the throne, the search by his Knights of the Round Table for the Holy Grail, and ultimately his death.",
  "credit_id": "52fe44529251416c75030b0f"
  },
  {
  "release_date": "1994-02-04",
  "adult": false,
  "vote_average": 5.2,
  "vote_count": 30,
  "video": false,
  "title": "Gunmen",
  "popularity": 3.959,
  "genre_ids": [
  28,
  35,
  53,
  80
  ],
  "original_language": "en",
  "character": "Loomis",
  "original_title": "Gunmen",
  "poster_path": "/nM0g7H6jvNtzWdX9b9C7qJ8pHHS.jpg",
  "id": 24231,
  "backdrop_path": "/3YB1sylfN4t5OWjyDSdByrj16fq.jpg",
  "overview": "Drug baron Peter Loomis (Patrick Stewart) has his $400 million dollar drug fortune stolen in South America. Loomis sends Armor O'Malley (Denis Leary), a ruthless killer to find his money. Cole Parker (Mario Van Peebles), a DEA Agent is on a South American mission of justice and revenge. He is sent to find his father's killer. Cole busts an eccentric smuggler, Dani Servigo (Christopher Lambert) to help Cole to find the smuggler's brother's money that he has stolen from Loomis. But O'Malley wants to find the fortune for himself. In a Cat and Mouse game, Cole and Dani are forced to help each other to find the missing fortune while trying to avoid O'Malley and his men. Together, Servigo and Parker search for the boat.",
  "credit_id": "52fe448bc3a368484e028ddd"
  },
  {
  "poster_path": "/3pd3sdot0HfQTFzqgTUzaF4kcxP.jpg",
  "adult": false,
  "backdrop_path": "/u9qAKiXdBeK7oWzaG3XRK53Ozbt.jpg",
  "vote_count": 1067,
  "video": false,
  "id": 8005,
  "popularity": 9.924,
  "genre_ids": [
  35
  ],
  "original_language": "en",
  "title": "Robin Hood: Men in Tights",
  "original_title": "Robin Hood: Men in Tights",
  "release_date": "1993-07-28",
  "character": "King Richard",
  "vote_average": 6.6,
  "overview": "Robin Hood comes home after fighting in the Crusades to learn that the noble King Richard is in exile and that the despotic King John now rules England, with the help of the Sheriff of Rottingham. Robin Hood assembles a band of fellow patriots to do battle with King John and the Sheriff.",
  "credit_id": "52fe448cc3a36847f809c3d1"
  },
  {
  "release_date": "1985-06-21",
  "adult": false,
  "vote_average": 6.3,
  "vote_count": 234,
  "video": false,
  "title": "Lifeforce",
  "popularity": 12.023,
  "genre_ids": [
  14,
  27,
  878,
  53
  ],
  "original_language": "en",
  "character": "Dr. Armstrong",
  "original_title": "Lifeforce",
  "poster_path": "/vyNbHbsOLY3BXxn02I0ciwAntg7.jpg",
  "id": 11954,
  "backdrop_path": "/faDpeQUK2afV0qQ3TfT6fuIg2UK.jpg",
  "overview": "A space shuttle mission investigating Halley's Comet brings back a malevolent race of space vampires who transform most of London's population into zombies. The only survivor of the expedition and British authorities attempt to capture a mysterious but beautiful alien woman who appears responsible.",
  "credit_id": "52fe44a99251416c7503c8a7"
  },
  {
  "release_date": "1997-08-08",
  "adult": false,
  "vote_average": 6.5,
  "vote_count": 742,
  "video": false,
  "title": "Conspiracy Theory",
  "popularity": 10.207,
  "genre_ids": [
  28,
  18,
  9648,
  53
  ],
  "original_language": "en",
  "character": "Dr. Jonas",
  "original_title": "Conspiracy Theory",
  "poster_path": "/bwmJ5yBCNGVdEe7OAcLHDNmaANU.jpg",
  "id": 8834,
  "backdrop_path": "/zNiujebroDoOuywLdhzDDdFBEDl.jpg",
  "overview": "A man obsessed with conspiracy theories becomes a target after one of his theories turns out to be true. Unfortunately, in order to save himself, he has to figure out which theory it is.",
  "credit_id": "52fe44bbc3a36847f80a6f7d"
  },
  {
  "release_date": "1997-08-22",
  "adult": false,
  "vote_average": 4.7,
  "vote_count": 23,
  "video": false,
  "title": "Masterminds",
  "popularity": 2.36,
  "genre_ids": [
  35,
  28,
  53
  ],
  "original_language": "en",
  "character": "Rafe Bentley",
  "original_title": "Masterminds",
  "poster_path": "/pd1NVZsrFs7x5aZwGIYbQsIQ74U.jpg",
  "id": 25224,
  "backdrop_path": null,
  "overview": "Trapped in a Elite School which a gang of criminals has seized control, a young troublemaker fights a cat and mouse battle from inside.",
  "credit_id": "52fe44bec3a368484e034631"
  },
  {
  "release_date": "1993-12-31",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Patrick Stewart: Narrates the Planets Epoch 2000",
  "popularity": 0.6,
  "genre_ids": [],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Patrick Stewart: Narrates the Planets Epoch 2000",
  "poster_path": null,
  "id": 33335,
  "backdrop_path": null,
  "overview": "No overview found.",
  "credit_id": "52fe450d9251416c91025ed3"
  },
  {
  "release_date": "1997-01-01",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Whales: An Unforgettable Journey",
  "popularity": 1.091,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Whales: An Unforgettable Journey",
  "poster_path": "/wU0MzLVt6sUQJ9OegpiFgzr4MGV.jpg",
  "id": 26950,
  "backdrop_path": "/k7I6mwvtwsQ12fcCjYWhcGiFdw1.jpg",
  "overview": "Scientists visit the remote surface and undersea locations to study various species of whales in their natural habitat.",
  "credit_id": "52fe4523c3a368484e04a9a5"
  },
  {
  "release_date": "2009-04-12",
  "adult": false,
  "vote_average": 7.9,
  "vote_count": 8,
  "video": false,
  "title": "Star Trek: The Captains' Summit",
  "popularity": 1.746,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Star Trek: The Captains' Summit",
  "poster_path": "/5B6B0FOUsLq1RKrskbpxH6Yxfig.jpg",
  "id": 26965,
  "backdrop_path": "/bS8bYdm1nIFYaNlGQsGqs9tb5gD.jpg",
  "overview": "The Captains' Summit documents the first time in Star Trek history that four stars who at some point have played Captains in Star Trek (William Shatner, Patrick Stewart, Leonard Nimoy, Jonathan Frakes) have been brought together for a 70-minute rare and unprecedented round table event. Whoopi Goldberg, star of Star Trek: The Next Generation, hosts the event.",
  "credit_id": "52fe4525c3a368484e04b047"
  },
  {
  "release_date": "1998-12-15",
  "adult": false,
  "vote_average": 7.1,
  "vote_count": 2045,
  "video": false,
  "title": "The Prince of Egypt",
  "popularity": 11.579,
  "genre_ids": [
  12,
  16,
  18,
  10751,
  10402,
  35
  ],
  "original_language": "en",
  "character": "Pharaoh Seti I (voice)",
  "original_title": "The Prince of Egypt",
  "poster_path": "/wD34ls2faCrj8YvFViEaPfBtBEe.jpg",
  "id": 9837,
  "backdrop_path": "/1yB6o6L5DLteeraLhz5Q0buBm6i.jpg",
  "overview": "This is the extraordinary tale of two brothers named Moses and Ramses, one born of royal blood, and one an orphan with a secret past. Growing up the best of friends, they share a strong bond of free-spirited youth and good-natured rivalry. But the truth will ultimately set them at odds, as one becomes the ruler of the most powerful empire on earth, and the other the chosen leader of his people! Their final confrontation will forever change their lives and the world.",
  "credit_id": "52fe4537c3a36847f80c2abf"
  },
  {
  "release_date": "2006-02-07",
  "adult": false,
  "vote_average": 6.2,
  "vote_count": 467,
  "video": false,
  "title": "Bambi II",
  "popularity": 10.18,
  "genre_ids": [
  16,
  18,
  10751
  ],
  "original_language": "en",
  "character": "The Great Prince (voice)",
  "original_title": "Bambi II",
  "poster_path": "/vYqfG1SfpT4lJ5NXsNHY2otIfbt.jpg",
  "id": 13205,
  "backdrop_path": "/ebug4NE8EV0f345KwbNNS3T3dRh.jpg",
  "overview": "Return to the forest and join Bambi as he reunites with his father, The Great Prince, who must now raise the young fawn on his own. But in the adventure of a lifetime, the proud parent discovers there is much he can learn from his spirited young son.",
  "credit_id": "52fe454e9251416c75052103"
  },
  {
  "release_date": "1999-01-24",
  "adult": false,
  "vote_average": 6.3,
  "vote_count": 12,
  "video": false,
  "title": "Safe House",
  "popularity": 2.443,
  "genre_ids": [
  53
  ],
  "original_language": "en",
  "character": "Mace Sowell",
  "original_title": "Safe House",
  "poster_path": "/iFJ5kEbclDDfpfpRiNYky1dxsPy.jpg",
  "id": 28123,
  "backdrop_path": "/x6f4Axjvr5Ybi2mfdpVSWvASdxX.jpg",
  "overview": "A psychological thriller; Mace Sowell, an ex-intelligence operative and whose past government activities catches up with him, faces his own mortality, in the shape of the onset of Alzheimer's disease. Holding the electronic key to secret information which implicates a Presidential front-runner, Mace struggles for his life while battling the debilitating effects of the disease.",
  "credit_id": "52fe457ac3a368484e05dba5"
  },
  {
  "release_date": "2010-05-04",
  "adult": false,
  "vote_average": 7.7,
  "vote_count": 37,
  "video": false,
  "title": "RSC Live: Hamlet",
  "popularity": 3.335,
  "genre_ids": [
  18
  ],
  "original_language": "en",
  "character": "Claudius / Ghost",
  "original_title": "RSC Live: Hamlet",
  "poster_path": "/u5sBtExMmlxvWE3aE5oVpjttFrE.jpg",
  "id": 28238,
  "backdrop_path": "/jYXslx4cKK04kL6GTkTvXjdbm7j.jpg",
  "overview": "David Tennant stars in a film of the Royal Shakespeare Company's award-winning production of Shakespeare's great play. Director Gregory Doran's modern-dress production was hailed by the critics as thrilling, fast-moving and, in parts, very funny.",
  "credit_id": "52fe4584c3a368484e05fd59"
  },
  {
  "release_date": "1975-01-01",
  "adult": false,
  "vote_average": 8.2,
  "vote_count": 3,
  "video": false,
  "title": "Hedda",
  "popularity": 0.666,
  "genre_ids": [],
  "original_language": "en",
  "character": "Ejlert Løvborg",
  "original_title": "Hedda",
  "poster_path": "/oeI1rGudp0qzT4tqU6qSgM79jXz.jpg",
  "id": 42256,
  "backdrop_path": null,
  "overview": "Henrik Ibsen's enduring drama about a Nordic femme fatale - a neurotic, controlling, strong-willed woman who is nonetheless alluring to the males in her town. She is a solitary woman in a society held together by kinship and class. If she had had more brains she would have thought her way out of it; if she had had more courage she would have bolted long ago with Lovborg, the only true creative force in the vicinity whose manuscript she burns in the stove as if she were aborting their unconceived child.",
  "credit_id": "52fe45f7c3a36847f80e4dad"
  },
  {
  "poster_path": "/hJ09SIDACUvRg3RLQRT2jUfDy7W.jpg",
  "adult": false,
  "backdrop_path": "/xm75A18CE7Wc6J9k2ZidFyqJ6rX.jpg",
  "vote_count": 7175,
  "video": false,
  "id": 36657,
  "popularity": 1.596,
  "genre_ids": [
  28,
  12,
  878
  ],
  "original_language": "en",
  "title": "X-Men",
  "original_title": "X-Men",
  "release_date": "2000-07-14",
  "character": "Charles Xavier / Professor X",
  "vote_average": 6.9,
  "overview": "Two mutants, Rogue and Wolverine, come to a private academy for their kind whose resident superhero team, the X-Men, must oppose a terrorist organization with similar powers.",
  "credit_id": "52fe45fe9251416c910457b1"
  },
  {
  "poster_path": "/2ucMY4dPE4gGLPgDdYgyggYHBkF.jpg",
  "adult": false,
  "backdrop_path": "/u2FxA8fDt0uQAnHKTwWGgkPShoL.jpg",
  "vote_count": 6426,
  "video": false,
  "id": 36658,
  "popularity": 1.329,
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "title": "X2",
  "original_title": "X2",
  "release_date": "2003-04-27",
  "character": "Charles Xavier / Professor X",
  "vote_average": 7,
  "overview": "Professor Charles Xavier and his team of genetically gifted superheroes face a rising tide of anti-mutant sentiment led by Col. William Stryker. Storm, Wolverine and Jean Grey must join their usual nemeses—Magneto and Mystique—to unhinge Stryker's scheme to exterminate all mutants.",
  "credit_id": "52fe45fe9251416c91045865"
  },
  {
  "poster_path": "/9jsW4RurucTwCEtA5iWV2PmIv11.jpg",
  "adult": false,
  "backdrop_path": "/w3Yc8wi2jYLaOyCW6b6svf1B0MG.jpg",
  "vote_count": 6150,
  "video": false,
  "id": 36668,
  "popularity": 1.039,
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "title": "X-Men: The Last Stand",
  "original_title": "X-Men: The Last Stand",
  "release_date": "2006-05-26",
  "character": "Charles Xavier / Professor X",
  "vote_average": 6.4,
  "overview": "When a cure is found to treat mutations, lines are drawn amongst the X-Men—led by Professor Charles Xavier—and the Brotherhood, a band of powerful mutants organised under Xavier's former ally, Magneto.",
  "credit_id": "52fe45ff9251416c910459f7"
  },
  {
  "poster_path": "/ikfLM0qpyBtMJG0H9JwIxZC1egG.jpg",
  "adult": false,
  "backdrop_path": "/eCycNSli1RGn5YBCB6qTjP3eShp.jpg",
  "vote_count": 406,
  "video": false,
  "id": 15139,
  "popularity": 11.78,
  "genre_ids": [
  16,
  14,
  878,
  10751
  ],
  "original_language": "en",
  "title": "The Pagemaster",
  "original_title": "The Pagemaster",
  "release_date": "1994-11-23",
  "character": "Adventure (voice)",
  "vote_average": 6.4,
  "overview": "Tyler knows a lot about accidents. So much so, he is scared to do anything that might endanger him, like riding his bike, or climbing into his treehouse. While in an old library, he is mystically transported into the unknown world of books, and he has to try and get home again. Along the way he meets some interesting characters, like Fantasy, Adventure, and Horror... Written by Colin Tinto",
  "credit_id": "52fe463d9251416c75071d6b"
  },
  {
  "release_date": "2004-05-23",
  "adult": false,
  "vote_average": 6.8,
  "vote_count": 7,
  "video": false,
  "title": "The Lion in Winter",
  "popularity": 2.506,
  "genre_ids": [
  18,
  36
  ],
  "original_language": "en",
  "character": "King Henry II",
  "original_title": "The Lion in Winter",
  "poster_path": "/pfAqFEZVa1KmXX5M5PdcKGJTr0k.jpg",
  "id": 37945,
  "backdrop_path": "/hpq2kbqpQxUvvtA8iKPK3R5pYkG.jpg",
  "overview": "King Henry II (Patrick Stewart) keeps his wife, Eleanor (Glenn Close) locked away in the towers because of her frequent attempts to overthrow him. With Eleanor out of the way he can have his dalliances with his young mistress (Yuliya Vysotskaya). Needless to say the queen is not pleased, although she still has affection for the king. Working through her sons, she plots the king's demise and the rise of her second and preferred son, Richard (Andrew Howard), to the throne. The youngest son, John (Rafe Spall), an overweight buffoon and the only son holding his father's affection is the king's choice after the death of his first son, young Henry. But John is also overly eager for power and is willing to plot his father's demise with middle brother, Geoffrey (John Light) and the young king of France, Phillip (Jonathan Rhys Meyers). Geoffrey, of course sees his younger brother's weakness and sees that route as his path to power. Obviously political and court intrigue ensues",
  "credit_id": "52fe46819251416c91056a09"
  },
  {
  "release_date": "2011-02-11",
  "adult": false,
  "vote_average": 5.8,
  "vote_count": 1149,
  "video": false,
  "title": "Gnomeo & Juliet",
  "popularity": 26.375,
  "genre_ids": [
  16,
  10751
  ],
  "original_language": "en",
  "character": "William Shakespeare (voice)",
  "original_title": "Gnomeo & Juliet",
  "poster_path": "/atCBHTqq7khw5Z1KSVXDo6ncKWF.jpg",
  "id": 45772,
  "backdrop_path": "/5VDfdJBofpvXAMtaHTT8YFE0lru.jpg",
  "overview": "A version of Shakespeare's play, set in the world of warring indoor and outdoor gnomes. Garden gnomes Gnomeo and Juliet have as many obstacles to overcome as their quasi namesakes when they are caught up in a feud between neighbors. But with plastic pink flamingos and lawnmower races in the mix, can this young couple find lasting happiness?",
  "credit_id": "52fe46d2c3a36847f8114219"
  },
  {
  "poster_path": "/r8BDSSIaRVAk8Rkg9GutSoZrikT.jpg",
  "adult": false,
  "backdrop_path": "/lHx4YyJFUJtzkkjEthzjAr9TqE7.jpg",
  "vote_count": 81,
  "video": false,
  "id": 16716,
  "popularity": 7.918,
  "genre_ids": [
  18,
  14
  ],
  "original_language": "en",
  "title": "A Christmas Carol",
  "original_title": "A Christmas Carol",
  "release_date": "1999-12-05",
  "character": "Mr. Ebenezer Scrooge",
  "vote_average": 6.9,
  "overview": "Scrooge is a miserly old businessman in 1840s London. One Christmas Eve he is visited by the ghost of Marley, his dead business partner. Marley foretells that Scrooge will be visited by three spirits, each of whom will attempt to show Scrooge the error of his ways. Will Scrooge reform his ways in time to celebrate Christmas?",
  "credit_id": "52fe46e79251416c750876fd"
  },
  {
  "release_date": "1985-10-18",
  "adult": false,
  "vote_average": 4.4,
  "vote_count": 11,
  "video": false,
  "title": "Wild Geese II",
  "popularity": 2.067,
  "genre_ids": [
  28
  ],
  "original_language": "en",
  "character": "Russian General",
  "original_title": "Wild Geese II",
  "poster_path": "/cPWVnUhwTJzM5blBzQEqXaS09rB.jpg",
  "id": 46971,
  "backdrop_path": "/uOl704NzcLJKWf1TYiJru0w1OWm.jpg",
  "overview": "A group of mercenaries is hired to spring Rudolf Hess from Spandau Prison in Berlin.",
  "credit_id": "52fe4718c3a36847f8123363"
  },
  {
  "release_date": "1994-11-06",
  "adult": false,
  "vote_average": 7.3,
  "vote_count": 3,
  "video": false,
  "title": "In Search of Dr. Seuss",
  "popularity": 1.202,
  "genre_ids": [
  16,
  35,
  10751,
  10770
  ],
  "original_language": "en",
  "character": "Sergeant Mulvaney",
  "original_title": "In Search of Dr. Seuss",
  "poster_path": "/hE2O0n4zfK2Htz7xKAJG0g9QZ34.jpg",
  "id": 47176,
  "backdrop_path": null,
  "overview": "A nosy reporter wants to find out all she can about Dr. Seuss, aka Ted Geisel, and gets told the real facts by several of his characters, with large snippets of his stories and songs interspersed.",
  "credit_id": "52fe4723c3a36847f8125521"
  },
  {
  "release_date": "1995-08-18",
  "adult": false,
  "vote_average": 6.8,
  "vote_count": 27,
  "video": false,
  "title": "Jeffrey",
  "popularity": 3.324,
  "genre_ids": [
  35,
  18,
  10749
  ],
  "original_language": "en",
  "character": "Sterling",
  "original_title": "Jeffrey",
  "poster_path": "/imrDwqsDpufHtoewyCgJUvAD4L0.jpg",
  "id": 17447,
  "backdrop_path": "/r2bFvokTTe2TcVs1AGgtg99ukqt.jpg",
  "overview": "Jeffery, a young gay man in New York, decides that sex is too much and decided to become celibate. He immediately meets the man of his dreams and must decide whether or not love is worth the danger of a boyfriend dying.",
  "credit_id": "52fe47269251416c7508f5fd"
  },
  {
  "poster_path": "/lRkm0ERINKdEzGldxlINRo7ehGF.jpg",
  "adult": false,
  "backdrop_path": "/tQJcK7JGUwJV5V4LzkYbbylBG4B.jpg",
  "vote_count": 4,
  "video": false,
  "id": 47913,
  "popularity": 3.124,
  "genre_ids": [
  18,
  37
  ],
  "original_language": "en",
  "title": "King of Texas",
  "original_title": "King of Texas",
  "release_date": "2002-06-02",
  "character": "John Lear",
  "vote_average": 5.1,
  "overview": "In this re-imagining of Shakespear's King Lear, Patrick Stewart stars as John Lear, a Texas cattle baron, who, after dividing his wealth among his three daughters, is rejected by them.",
  "credit_id": "52fe474dc3a36847f812e289"
  },
  {
  "release_date": "1996-01-27",
  "adult": false,
  "vote_average": 6.2,
  "vote_count": 20,
  "video": false,
  "title": "The Canterville Ghost",
  "popularity": 3.755,
  "genre_ids": [
  10770,
  14,
  18,
  10751
  ],
  "original_language": "en",
  "character": "Sir Simon de Canterville",
  "original_title": "The Canterville Ghost",
  "poster_path": "/daQl68yTtTnFIwKJoI3rrYsyvTO.jpg",
  "id": 48358,
  "backdrop_path": "/1P8jAgJkQjIYPHsN46FRAm85S94.jpg",
  "overview": "When a teenaged girl moves to England, with her brothers and parents into the ancient Canterville Hall, she's not at all happy. Especially as there's a ghost and a mysterious re-appearing bloodstain on the hearth. She campaigns to go back home, and her dad, believing the ghost's pranks are Ginny's, is ready to send her back. But then Ginny actually meets the elusive 17th-century Sir Simon de Canterville (not to mention the cute teenaged duke next door), and she sets her hand to the task of freeing Sir Simon from his curse.",
  "credit_id": "52fe4761c3a36847f813291d"
  },
  {
  "release_date": "1985-10-04",
  "adult": false,
  "vote_average": 6,
  "vote_count": 15,
  "video": false,
  "title": "The Doctor and the Devils",
  "popularity": 3.31,
  "genre_ids": [
  27
  ],
  "original_language": "en",
  "character": "Prof. Macklin",
  "original_title": "The Doctor and the Devils",
  "poster_path": "/zT084DIfwCs2IpCRHZSo3qX6rxa.jpg",
  "id": 80368,
  "backdrop_path": "/bwpDjq5KMmCGzA6KElkeCPqNxrH.jpg",
  "overview": "Grave robbers supply a doctor with bodies to test on.",
  "credit_id": "52fe47bb9251416c91073f71"
  },
  {
  "release_date": "2011-07-22",
  "adult": false,
  "vote_average": 6.3,
  "vote_count": 59,
  "video": false,
  "title": "The Captains",
  "popularity": 4.081,
  "genre_ids": [
  99,
  878
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "The Captains",
  "poster_path": "/hr97MCUycHxSRKTmpoqO8RoTQPz.jpg",
  "id": 70703,
  "backdrop_path": "/bQstyNTuWlEOG8gMGf7QvNnfLCA.jpg",
  "overview": "The Captains is a feature length documentary film written and directed by William Shatner. The film follows Shatner as he interviews the other actors whom have portrayed Starship captains within the illustrious science-fiction franchise.",
  "credit_id": "52fe480cc3a368484e0e6cf5"
  },
  {
  "release_date": "2012-06-29",
  "adult": false,
  "vote_average": 6.3,
  "vote_count": 8025,
  "video": false,
  "title": "Ted",
  "popularity": 18.883,
  "genre_ids": [
  35,
  14
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Ted",
  "poster_path": "/5ExgYTRafm4kFRwHp2jH6C23Yl4.jpg",
  "id": 72105,
  "backdrop_path": "/sPiFgbWMSQxVMO6TuRFrkeWwarI.jpg",
  "overview": "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear or his girlfriend, Lori.",
  "credit_id": "52fe4858c3a368484e0f44a7"
  },
  {
  "release_date": "2014-02-07",
  "adult": false,
  "vote_average": 4.7,
  "vote_count": 13,
  "video": false,
  "title": "Sinbad: The Fifth Voyage",
  "popularity": 3.179,
  "genre_ids": [
  14,
  10751,
  12
  ],
  "original_language": "en",
  "character": "Narrator (Voice)",
  "original_title": "Sinbad: The Fifth Voyage",
  "poster_path": "/hU93Z2UadMGJjBZ9bnobeUyIUT9.jpg",
  "id": 54415,
  "backdrop_path": "/7KQ9f0n8UTFS2nVsEJKTn9ITkWx.jpg",
  "overview": "When the Sultan's first born is taken by an evil sorcerer, Sinbad is tasked with traveling to a desert of magic and creatures to save her.",
  "credit_id": "52fe489ac3a36847f8170437"
  },
  {
  "release_date": "1975-12-31",
  "adult": false,
  "vote_average": 4,
  "vote_count": 5,
  "video": false,
  "title": "Hennessy",
  "popularity": 2.459,
  "genre_ids": [
  53,
  18,
  28
  ],
  "original_language": "en",
  "character": "Tilney",
  "original_title": "Hennessy",
  "poster_path": "/c9F22GaCrnrBVVTf8cSiha9aZTY.jpg",
  "id": 54417,
  "backdrop_path": "/nd4ZzXqd6ewGW0RZq9FGnRW41ZK.jpg",
  "overview": "Set in the Seventies, Hennessy is a Irishman who believes in peace, but who has had connections to the IRA. Hennessy's family is killed, and he plots revenge, setting out to assassinate Queen Elizabeth of England.",
  "credit_id": "52fe489ac3a36847f8170487"
  },
  {
  "release_date": "2006-03-22",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "William Shatner in Concert",
  "popularity": 0.613,
  "genre_ids": [
  10770,
  10402,
  99
  ],
  "original_language": "en",
  "character": "",
  "original_title": "William Shatner in Concert",
  "poster_path": "/21arpJjklnrQvR2oAOSbZY4gZrt.jpg",
  "id": 411199,
  "backdrop_path": null,
  "overview": "William Shatner performs a concert of biographical songs that take the audience into the reality of his life and career: from STAR TREK to BOSTON LEGAL. Shatner sings in front of a live audience with Ben Folds, Brad Paisley and Joe Jackson. Leonard Nimoy, Patrick Stewart, Kate Mulgrew and Candice Bergen make cameos.",
  "credit_id": "57af1a11c3a36878b40051cb"
  },
  {
  "release_date": "1985-09-07",
  "adult": false,
  "vote_average": 6.3,
  "vote_count": 6,
  "video": false,
  "title": "Code Name: Emerald",
  "popularity": 2.132,
  "genre_ids": [
  28,
  18,
  10752
  ],
  "original_language": "en",
  "character": "Colonel Peters",
  "original_title": "Code Name: Emerald",
  "poster_path": "/hJzZBuwHn0VBK3jnxlVdgTjhjdF.jpg",
  "id": 74974,
  "backdrop_path": "/9NxAYKOO9l9zxAxAA5WclZngMlj.jpg",
  "overview": "In preparation for Operation Overlord, the Allied invasion of Nazi occupied territory, the 'overlords' were the few Allied agents who knew the details of the operation. When one them is captured by the Germans, a double agent must infiltrate occupied Paris, with the help of a high level German officer and the French resistance.",
  "credit_id": "52fe48e8c3a368484e1113df"
  },
  {
  "release_date": "1998-06-05",
  "adult": false,
  "vote_average": 6.5,
  "vote_count": 7,
  "video": false,
  "title": "Dad Savage",
  "popularity": 0.937,
  "genre_ids": [
  80,
  53
  ],
  "original_language": "en",
  "character": "Dad",
  "original_title": "Dad Savage",
  "poster_path": "/p565tXO9MO1Scfa1QiFBQNopHTZ.jpg",
  "id": 75579,
  "backdrop_path": "/iwSE3m1fctvY8fSFV8jaAGnrYh8.jpg",
  "overview": "A wealthy, successful, East-Anglian tulip grower, Dad Savage is also something of a godfather in the local criminal fraternity but doesn't trust banks to take care of his money. On recommendation from his son, Sav, Dad hires two of Sav's unemployed school friends, Bob and Vic, to help with the business and the crime. After some careless talk from Harold, just known as 'H', about Dad's pension fund, Vic and Bob decide to steal the money from Dad if they can find it. The plans to liberate the money go awry and Sav is killed requiring Bob to call upon his sister Chris to rescue them. Dad intercepts their escape and forces a showdown to try to determine exactly the events of the night in order to identify his son's killer.",
  "credit_id": "52fe4906c3a368484e116eeb"
  },
  {
  "release_date": "2010-07-24",
  "adult": false,
  "vote_average": 6.4,
  "vote_count": 14,
  "video": false,
  "title": "With Great Power: The Stan Lee Story",
  "popularity": 2.351,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "With Great Power: The Stan Lee Story",
  "poster_path": "/paSNMYfpSrf3sOWbH4C3bHSSapB.jpg",
  "id": 86843,
  "backdrop_path": "/vYwR5GuuqFAq0kdthZutVYer5gr.jpg",
  "overview": "At 89 years old, Stan Lee's name appears on more than one BILLION comics in 75 countries in 25 languages. Arguably the most recognized name in comics, Stan Lee has co-created over 500 legendary pop culture characters including Spider-Man, Fantastic Four, X-Men, Iron Man, Thor and The Hulk. Stan continues to create new material and entertain fans of all ages with fantastic stories and characters in all areas of entertainment.  With Great Power: the Stan Lee Story, explores the vivid life and imagination of Stan Lee, from the early days of his Depression-era upbringing through the Marvel Age of Comics and beyond! The film uncovers original transcripts, illustrations, photographs and stories of Lee's fascinating journey from his early years at Timely Comics and World War Two, the comic book industry's censorship battle of the 1950's led by Dr. Fredric Wertham, the dawn of Marvel Comics and the legendary characters Stan co-created, to his current company POW! Entertainment.",
  "credit_id": "52fe49a59251416c910b3f39"
  },
  {
  "release_date": "2014-05-09",
  "adult": false,
  "vote_average": 5.8,
  "vote_count": 69,
  "video": false,
  "title": "Legends of Oz: Dorothy's Return",
  "popularity": 5.263,
  "genre_ids": [
  16,
  10402,
  10751
  ],
  "original_language": "en",
  "character": "Tugg (voice)",
  "original_title": "Legends of Oz: Dorothy's Return",
  "poster_path": "/hkYhAxbDmGctgaqo6EHKQMb79PM.jpg",
  "id": 59981,
  "backdrop_path": "/8p6rewgpJsB13JfvBeFo4Nj0B0e.jpg",
  "overview": "Dorothy wakes up in post-tornado Kansas, only to be whisked back to Oz to try to save her old friends the Scarecrow, the Lion, the Tin Man and Glinda from a devious new villain, the Jester. Wiser the owl, Marshal Mallow, China Princess and Tugg the tugboat join Dorothy on her latest magical journey through the colorful landscape of Oz to restore order and happiness to Emerald City.",
  "credit_id": "52fe49a6c3a36847f81a5577"
  },
  {
  "release_date": "1987-05-17",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "The Devil's Disciple",
  "popularity": 0.6,
  "genre_ids": [
  18,
  10770
  ],
  "original_language": "en",
  "character": "Anthony Anderson",
  "original_title": "The Devil's Disciple",
  "poster_path": null,
  "id": 120358,
  "backdrop_path": null,
  "overview": "Shaw turned to the classic Victorian melodrama to focus on the insincerity of much that his audience held dear, especially family and marriage. In 1777 as the American War of Independence rages, Dick Dudgeon returns to the family he revolted against years ago. But his life is about to take another twist as the british arrive and seem set on an execution...",
  "credit_id": "52fe4a46c3a368484e14a0bf"
  },
  {
  "release_date": "1999-01-01",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "If We Had No Moon",
  "popularity": 0.707,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator (voice)",
  "original_title": "If We Had No Moon",
  "poster_path": "/1NENxSY5QDztJbJwMbotPWeEJSx.jpg",
  "id": 126018,
  "backdrop_path": "/lkmH00yn9sWy3ungrDrxPjvzH7u.jpg",
  "overview": "Without the moon, humans wouldn't exist. Life, if it had started at all, would be in its earliest stages of evolution. Days would last four hours, winds would blow at hurricane force and there would be a dense and toxic atmosphere resembling that of Venus.  Around 50 million years after the formation of the solar system, a Mars-sized planet called Theia hit the newly formed Proto-Earth. The blast sent planetary material from the pair into orbit around earth which eventually formed the Moon.  In this one-hour special, viewers learn what Earth was like before the moon creating impact, and what Earth would have been like if the moon had never existed.",
  "credit_id": "52fe4ad5c3a368484e16971f"
  },
  {
  "poster_path": "/pb1IURTkK5rImP9ZV83lxJO2us7.jpg",
  "adult": false,
  "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
  "vote_count": 10482,
  "video": false,
  "id": 127585,
  "popularity": 29.582,
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "title": "X-Men: Days of Future Past",
  "original_title": "X-Men: Days of Future Past",
  "release_date": "2014-05-23",
  "character": "Charles Xavier / Professor X (Old)",
  "vote_average": 7.5,
  "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
  "credit_id": "52fe4affc3a368484e171ffb"
  },
  {
  "release_date": "2010-10-06",
  "adult": false,
  "vote_average": 6.6,
  "vote_count": 17,
  "video": false,
  "title": "Macbeth",
  "popularity": 2.281,
  "genre_ids": [
  18
  ],
  "original_language": "en",
  "character": "Macbeth",
  "original_title": "Macbeth",
  "poster_path": "/8nFuFOHZTYVldpFFHNNMnM9234X.jpg",
  "id": 133448,
  "backdrop_path": "/x6V5Awj1grYJjc8R1z4cZNotKKc.jpg",
  "overview": "Part of the PBS Great Performance Series. Renowned Shakespearean actor Patrick Stewart features as the eponymous anti-hero in this Soviet-era adaptation of one of Shakespeare's darkest and most powerful tragedies.",
  "credit_id": "52fe4bb1c3a368484e19534f"
  },
  {
  "release_date": "2013-07-03",
  "adult": false,
  "vote_average": 6.5,
  "vote_count": 13,
  "video": false,
  "title": "Hunting Elephants",
  "popularity": 2.059,
  "genre_ids": [
  35,
  80
  ],
  "original_language": "he",
  "character": "Michael",
  "original_title": "Hunting Elephants",
  "poster_path": "/eVHbojY4UuUglJFNqPNvHaio1YN.jpg",
  "id": 204810,
  "backdrop_path": "/wbShYjD63LBbFTcZFATU5AolaXF.jpg",
  "overview": "In this hilarious crime comedy, a gifted 12-year-old boy and three elderly men plan a bank robbery in order to seek revenge on the institution for cheating the youngster after the death of his father.",
  "credit_id": "52fe4cfbc3a368484e1d0a95"
  },
  {
  "release_date": "1994-01-01",
  "adult": false,
  "vote_average": 8,
  "vote_count": 1,
  "video": false,
  "title": "Liberation",
  "popularity": 1.451,
  "genre_ids": [
  99,
  10752,
  36
  ],
  "original_language": "pt",
  "character": "Narrator",
  "original_title": "Liberation",
  "poster_path": "/lNLxGS02NfQnS9NiRnOPEzlX3ZH.jpg",
  "id": 179948,
  "backdrop_path": "/q86MLCU00ZOsVvwn5j7uG9XL7zf.jpg",
  "overview": "Liberation tells the dramatic story of the battle waged on two fronts during World War II - the Allied campaign to liberate Europe and Hitler's genocidal campaign against the Jews. The World War II documentary uses film footage, radio broadcasts, and period music gathered from archives around the world. Interwoven throughout the film are the compelling stories of the Jews of Europe - unforgettable stories of tragedy, courage, resistance, and survival. Liberation begins in 1942, when Adolf Hitler was still at the height of his power and the Allies began envisioning a cross-channel invasion of Europe.",
  "credit_id": "52fe4daec3a36847f826e651"
  },
  {
  "release_date": "2012-11-13",
  "adult": false,
  "vote_average": 5,
  "vote_count": 3,
  "video": false,
  "title": "Icebound",
  "popularity": 0.686,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Icebound",
  "poster_path": "/vLcgRdE0I5hiS2oBjR81CjACHBJ.jpg",
  "id": 250740,
  "backdrop_path": "/xI0fRudjnwbXtnCKaHKO1RRldlP.jpg",
  "overview": "The gripping true-life story of the legendary 1925 \"Serum Run,\" in which 34 men and more than 150 dogs, rushed life-saving anti-toxin across the frozen arctic to save the children of Nome, AK from a deadly outbreak of diphtheria.",
  "credit_id": "52fe4dfc9251416c91122b8b"
  },
  {
  "release_date": "2012-04-19",
  "adult": false,
  "vote_average": 0.5,
  "vote_count": 1,
  "video": false,
  "title": "Epithet",
  "popularity": 1.375,
  "genre_ids": [],
  "original_language": "en",
  "character": "John",
  "original_title": "Epithet",
  "poster_path": null,
  "id": 259226,
  "backdrop_path": null,
  "overview": "Epithet: a short film starring Patrick Stewart. Inspired by the Young Vic theatre's recent production of Edward Bond's play Bingo.",
  "credit_id": "532377129251411f850050f1"
  },
  {
  "release_date": "2014-04-18",
  "adult": false,
  "vote_average": 6.1,
  "vote_count": 22,
  "video": false,
  "title": "Match",
  "popularity": 2.802,
  "genre_ids": [
  10751,
  35,
  18
  ],
  "original_language": "en",
  "character": "Tobi",
  "original_title": "Match",
  "poster_path": "/jTVUrZkF8G8hwlUufK8K4N9CRun.jpg",
  "id": 261036,
  "backdrop_path": "/gQ7ejOw1E4bmUNagfjEYwpHpAiy.jpg",
  "overview": "A Seattle couple travel to New York to interview colorful former dancer Tobi for research on a dissertation about dance. But soon, common niceties and social graces erode when the questions turn personal and the true nature of the interview is called into question.",
  "credit_id": "53306388c3a3685fe2006dec"
  },
  {
  "release_date": "1975-01-04",
  "adult": false,
  "vote_average": 7,
  "vote_count": 1,
  "video": false,
  "title": "Antony and Cleopatra",
  "popularity": 0.6,
  "genre_ids": [
  18,
  36
  ],
  "original_language": "en",
  "character": "Enobarbus",
  "original_title": "Antony and Cleopatra",
  "poster_path": "/aNaF1hhK3R8IVlmcFmEfQ5vQbTw.jpg",
  "id": 233748,
  "backdrop_path": "/h0i40FW3YNPQTPXeVAYaQuyL25R.jpg",
  "overview": "Adaptation of Shakespeare's play.",
  "credit_id": "53339b98c3a3682a8700082a"
  },
  {
  "release_date": "1990-01-07",
  "adult": false,
  "vote_average": 5.9,
  "vote_count": 4,
  "video": false,
  "title": "Discovering Hamlet",
  "popularity": 1.393,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Discovering Hamlet",
  "poster_path": "/ywQ21ttDTJGmrLdENkM5foayF3G.jpg",
  "id": 263513,
  "backdrop_path": null,
  "overview": "IN 1988, rising star Kenneth Branagh tackled the role of Shakespeare’s prince of Denmark for the first time in his professional career under the guidance of celebrated actor Derek Jacobi. Narrated by Patrick Stewart, this hour-long film documents how Kenneth Branagh and Derek Jacobi, two intelligent and passionate men, found new depths in Shakespeare’s classic drama, Hamlet. Filmmakers Mark Olshaker and Larry Klein follow the company through four weeks of rehearsals, from the first read-throughs to opening night.",
  "credit_id": "5342f2b6c3a36814ff003c8e"
  },
  {
  "poster_path": "/iLMALbInUmbNn1tHmxJEWm5MyjP.jpg",
  "adult": false,
  "backdrop_path": "/vpoXlSpWRLgnPKmTw8GDOPlT8eu.jpg",
  "vote_count": 2144,
  "video": false,
  "id": 9982,
  "popularity": 15.826,
  "genre_ids": [
  16,
  35,
  10751
  ],
  "original_language": "en",
  "title": "Chicken Little",
  "original_title": "Chicken Little",
  "release_date": "2005-11-04",
  "character": "Mr. Woolensworth (voice)",
  "vote_average": 5.8,
  "overview": "When the sky really is falling and sanity has flown the coop, who will rise to save the day? Together with his hysterical band of misfit friends, Chicken Little must hatch a plan to save the planet from alien invasion and prove that the world's biggest hero is a little chicken.",
  "credit_id": "52fe4556c3a36847f80c8a83"
  },
  {
  "release_date": "2014-10-23",
  "adult": false,
  "vote_average": 5.7,
  "vote_count": 11,
  "video": false,
  "title": "Journey to Le Mans",
  "popularity": 2.294,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Journey to Le Mans",
  "poster_path": "/39lEuVmUf1LKTO0RCnzxBSFx8Iq.jpg",
  "id": 303665,
  "backdrop_path": "/ouwnS5Gk47AmGHPXndogYikmhmq.jpg",
  "overview": "Le Mans the biggest motorsport event in the world, is truly a spectacle like no other. The twenty-four hour race is considered the most physically and mentally demanding race on earth. Man and machine push themselves to the limits of endurance, many never make it past the finish line, and some never make it home.",
  "credit_id": "5468a97122136e68c7000adb"
  },
  {
  "release_date": "2015-02-13",
  "adult": false,
  "vote_average": 6.5,
  "vote_count": 12,
  "video": false,
  "title": "Journey to Space",
  "popularity": 2.568,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator (voice)",
  "original_title": "Journey to Space",
  "poster_path": "/mW6v3MYsbjQkbjUWl5pYeoStKJq.jpg",
  "id": 325263,
  "backdrop_path": "/zVpffH961JjQDW1TMSgNfhcacgt.jpg",
  "overview": "A sweeping overview of humanity’s accomplishments in space, as well as our ongoing activities and future plans.",
  "credit_id": "54df277e925141469f0010c2"
  },
  {
  "release_date": "2015-12-04",
  "adult": false,
  "vote_average": 5.7,
  "vote_count": 39,
  "video": false,
  "title": "Christmas Eve",
  "popularity": 3.928,
  "genre_ids": [
  35,
  10751,
  10749
  ],
  "original_language": "en",
  "character": "Harris",
  "original_title": "Christmas Eve",
  "poster_path": "/cjclP7PpxTS1RCO1P6sETPxf820.jpg",
  "id": 340816,
  "backdrop_path": "/8laFqSOECZJqGgwKdnOQVUzLbtZ.jpg",
  "overview": "Hilarity, romance, and transcendence prevail after a power outage traps six different groups of New Yorkers inside elevators on Christmas Eve.",
  "credit_id": "555a872f9251411fef00028b"
  },
  {
  "poster_path": "/A7HtCxFe7Ms8H7e7o2zawppbuDT.jpg",
  "adult": false,
  "backdrop_path": "/ek4gXeAi96YitDE2wiZaVLwd0fC.jpg",
  "vote_count": 4415,
  "video": false,
  "id": 214756,
  "popularity": 23.949,
  "genre_ids": [
  35
  ],
  "original_language": "en",
  "title": "Ted 2",
  "original_title": "Ted 2",
  "release_date": "2015-06-26",
  "character": "Narrator (voice)",
  "vote_average": 6.1,
  "overview": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  "credit_id": "558991b8c3a36809b1000f88"
  },
  {
  "release_date": "2015-08-25",
  "adult": false,
  "vote_average": 7.1,
  "vote_count": 25,
  "video": false,
  "title": "Chaos on the Bridge",
  "popularity": 2.853,
  "genre_ids": [
  10770,
  99,
  878
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Chaos on the Bridge",
  "poster_path": "/dNelBKSXgnp0frpF27EfZnoFOml.jpg",
  "id": 347497,
  "backdrop_path": "/sb1NZHaeSInHrAUZGeIHxsasYHl.jpg",
  "overview": "Canadian acting legend William Shatner takes viewers inside the creation of Star Trek: The Next Generation, the bold attempt in 1986 to recreate the success of the original television series, in which Shatner played Captain James T. Kirk.",
  "credit_id": "55982c0192514109db00019f"
  },
  {
  "release_date": "2016-04-15",
  "adult": false,
  "vote_average": 6.8,
  "vote_count": 1403,
  "video": false,
  "title": "Green Room",
  "popularity": 13.143,
  "genre_ids": [
  27,
  80,
  53
  ],
  "original_language": "en",
  "character": "Darcy",
  "original_title": "Green Room",
  "poster_path": "/sTlPvjdQrrv5cLH410aMlSxqi0x.jpg",
  "id": 313922,
  "backdrop_path": "/w5TW2cLJknpWRYjmyuwfsQ1jFDA.jpg",
  "overview": "A punk rock band becomes trapped in a secluded venue after finding a scene of violence. For what they saw, the band themselves become targets of violence from a gang of white power skinheads, who want to eliminate all evidence of the crime.",
  "credit_id": "54ac32c29251415646004482"
  },
  {
  "release_date": "2017-04-14",
  "adult": false,
  "vote_average": 4.3,
  "vote_count": 30,
  "video": false,
  "title": "Spark: A Space Tail",
  "popularity": 7.063,
  "genre_ids": [
  12,
  16,
  35,
  10751,
  878
  ],
  "original_language": "en",
  "character": "The Captain (voice)",
  "original_title": "Spark: A Space Tail",
  "poster_path": "/4zj2KfykL4qvYCrbMv46Yd5vnYM.jpg",
  "id": 322487,
  "backdrop_path": "/3LxSXQDhjdOrYmHDq9e1FQFENDr.jpg",
  "overview": "Spark, a teenage monkey and his friends, Chunk and Vix, are on a mission to regain Planet Bana - a kingdom overtaken by the evil overlord Zhong.",
  "credit_id": "5639af7ac3a3681b4d024165"
  },
  {
  "release_date": "1980-11-25",
  "adult": false,
  "vote_average": 7.4,
  "vote_count": 127,
  "video": false,
  "title": "Little Lord Fauntleroy",
  "popularity": 6.169,
  "genre_ids": [
  10770,
  10751,
  18
  ],
  "original_language": "en",
  "character": "Wilkins - Stallmeister",
  "original_title": "Little Lord Fauntleroy",
  "poster_path": "/xclr7DdFhp6tN6wvb5jt5iVmDS3.jpg",
  "id": 38602,
  "backdrop_path": "/8T59a0IHQBLXZ5s18tycclL5vT.jpg",
  "overview": "Young Cedric (Ceddie) Errol and his widowed mother (known only as \"Dearest\") live in genteel poverty in 1880s Brooklyn after the death of his father. Cedric's grandfather, the Earl of Dorincourt, has long ago disowned his son for marrying an American. But after the death of the Earl's remaining son, he decides to accept the little Cedric as Lord Fauntleroy, his heir.",
  "credit_id": "52fe46c89251416c9105f9e9"
  },
  {
  "release_date": "2012-08-21",
  "adult": false,
  "vote_average": 7.5,
  "vote_count": 2,
  "video": false,
  "title": "The Olympic Ticket Scalper",
  "popularity": 1.545,
  "genre_ids": [],
  "original_language": "en",
  "character": "Ticket-Tooth Philip",
  "original_title": "The Olympic Ticket Scalper",
  "poster_path": "/dA6whetglbtLw1om4IylOsGWXh3.jpg",
  "id": 376984,
  "backdrop_path": null,
  "overview": "Sir Patrick Stewart stars as the Godfather of scalping tickets for the grandest event of them all....The 2012 London Olympics.",
  "credit_id": "5692f0a692514115c2002f17"
  },
  {
  "release_date": "1973-09-16",
  "adult": false,
  "vote_average": 5,
  "vote_count": 1,
  "video": false,
  "title": "The Love-Girl and the Innocent",
  "popularity": 0.99,
  "genre_ids": [
  18,
  10770
  ],
  "original_language": "en",
  "character": "Gurvich",
  "original_title": "The Love-Girl and the Innocent",
  "poster_path": "/S2r09xUOJEPZWaEa7ixOqTOO9B.jpg",
  "id": 381567,
  "backdrop_path": null,
  "overview": "A BBC television adaptation of Aleksandr Solzhenitsyn's novel. The prisoner Nemov is an honest man serving a term of 10 years for violations of Article 58. Nemov falls in love with Lyuba, who is having sex with the camp doctor Mereshchun, in exchange for better food and living conditions.",
  "credit_id": "56b6b69bc3a36806f100a6b8"
  },
  {
  "release_date": "1996-10-06",
  "adult": false,
  "vote_average": 6,
  "vote_count": 1,
  "video": false,
  "title": "Star Trek: 30 Years and Beyond",
  "popularity": 0.6,
  "genre_ids": [
  10402,
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Star Trek: 30 Years and Beyond",
  "poster_path": "/ax1MP42MTnJnEPlI3qSP3a0zY9W.jpg",
  "id": 53313,
  "backdrop_path": "/pDEOC6NVES4KNKIYbVlW57E3uHq.jpg",
  "overview": "A star-studded tribute to Star Trek on its 30th anniversary, hosted by many of the stars and guest stars from all of the Trek series and movies. Also features a huge number of clips from all of the series and movies. At the end, real-life astronauts Aldrin and Jemison present NASA award plaques to the cast members.",
  "credit_id": "56c972a7925141172f00649d"
  },
  {
  "poster_path": "/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
  "adult": false,
  "backdrop_path": "/yEv8c6i79vk06sZDC3Z9D8HQLVV.jpg",
  "vote_count": 12834,
  "video": false,
  "id": 263115,
  "popularity": 35.308,
  "genre_ids": [
  28,
  18,
  878
  ],
  "original_language": "en",
  "title": "Logan",
  "original_title": "Logan",
  "release_date": "2017-03-03",
  "character": "Charles Xavier / Professor X",
  "vote_average": 7.8,
  "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
  "credit_id": "54db4049c3a368122a0017f4"
  },
  {
  "release_date": "1995-11-17",
  "adult": false,
  "vote_average": 5,
  "vote_count": 5,
  "video": false,
  "title": "Let It Be Me",
  "popularity": 1.541,
  "genre_ids": [
  18,
  10749
  ],
  "original_language": "en",
  "character": "John",
  "original_title": "Let It Be Me",
  "poster_path": "/1qtbNeTKp97YqZpoiaAQm3BOcLI.jpg",
  "id": 335145,
  "backdrop_path": null,
  "overview": "Right after getting engaged, a man starts taking dance lessons.",
  "credit_id": "57438527c3a3685c450001c8"
  },
  {
  "release_date": "2001-12-21",
  "adult": false,
  "vote_average": 5.7,
  "vote_count": 459,
  "video": false,
  "title": "Jimmy Neutron: Boy Genius",
  "popularity": 14.108,
  "genre_ids": [
  28,
  12,
  16,
  35,
  10751,
  14,
  878
  ],
  "original_language": "en",
  "character": "King Goobot V (voice)",
  "original_title": "Jimmy Neutron: Boy Genius",
  "poster_path": "/l8p1fcUaqGJJMvPFtnXC2Uz079f.jpg",
  "id": 12589,
  "backdrop_path": "/5vceQBZ6EVsZXlbm94KX4OCGthG.jpg",
  "overview": "Jimmy Neutron is a boy genius and way ahead of his friends, but when it comes to being cool, he's a little behind. All until one day when his parents, and parents all over Earth are kidnapped by aliens, it's up to him to lead all the children of the world to rescue their parents.",
  "credit_id": "579e5a12c3a3683cfd002c46"
  },
  {
  "release_date": "2016-12-15",
  "adult": false,
  "vote_average": 8,
  "vote_count": 4,
  "video": true,
  "title": "National Theatre Live: No Man's Land",
  "popularity": 0.6,
  "genre_ids": [],
  "original_language": "en",
  "character": "Hirst",
  "original_title": "National Theatre Live: No Man's Land",
  "poster_path": "/bZr3p4Ynp877XXYPoz1rqFum6Hs.jpg",
  "id": 430292,
  "backdrop_path": null,
  "overview": "One summer's evening, two ageing writers, Hirst and Spooner, meet in a Hampstead pub and continue their drinking into the night at Hirst's stately house nearby.  As the pair become increasingly inebriated, and their stories increasingly unbelievable, the lively conversation soon turns into a revealing power game, further complicated by the return home of two sinister younger men.",
  "credit_id": "58529d3b9251416fa10230af"
  },
  {
  "release_date": "2005-09-20",
  "adult": false,
  "vote_average": 5.2,
  "vote_count": 48,
  "video": false,
  "title": "Back to Gaya",
  "popularity": 3.779,
  "genre_ids": [
  16,
  14
  ],
  "original_language": "en",
  "character": "Albert Drollinger (voice)",
  "original_title": "Back to Gaya",
  "poster_path": "/t1gyuiIz9CsDhqktI71Pf865Vdl.jpg",
  "id": 10927,
  "backdrop_path": "/gwJPuLs3M9d7yufije30EGSBicR.jpg",
  "overview": "The beautiful world of Gaya is home to a community of creatures, known as the Snurks, who are much smaller than humans, but who have an uncanny resemblance to them. But the Snurks are facing imminent danger. Someone has stolen the magic stone called Dalamite without which this world is doomed. Two Snurks named Boo and Zino embark on a dangerous mission to track down and recover the stone. As they attempt to find the stone, their journey takes them into another world that is both strange and frightening!",
  "credit_id": "588c8e4392514136d4007917"
  },
  {
  "release_date": "1985-05-16",
  "adult": false,
  "vote_average": 8,
  "vote_count": 2,
  "video": false,
  "title": "Pope John Paul II",
  "popularity": 0.6,
  "genre_ids": [
  36
  ],
  "original_language": "en",
  "character": "Parteisekretär Władysław Gomułka",
  "original_title": "Pope John Paul II",
  "poster_path": "/iyEIu9HUqyx66DycdwlsnwILypk.jpg",
  "id": 421749,
  "backdrop_path": null,
  "overview": "Bio-drama tracing the life and career of Polish cardinal Karol Wojtyla from his days as a young activist in Poland to his rise and installation in 1978 as Pope of the Catholic world.",
  "credit_id": "580543e0c3a3681dac002776"
  },
  {
  "poster_path": "/iTST6DcLhfufWYUKCOskkusaYUq.jpg",
  "adult": false,
  "backdrop_path": "/oFyaTmJ5ZPPl16uB4Ry9pWKvtDc.jpg",
  "vote_count": 6389,
  "video": false,
  "id": 76170,
  "popularity": 4.403,
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "title": "The Wolverine",
  "original_title": "The Wolverine",
  "release_date": "2013-07-25",
  "character": "Charles Xavier / Professor X (uncredited)",
  "vote_average": 6.3,
  "overview": "Wolverine faces his ultimate nemesis - and tests of his physical, emotional, and mortal limits - in a life-changing voyage to modern-day Japan.",
  "credit_id": "548eb982c3a3684ea100604e"
  },
  {
  "release_date": "2016-10-31",
  "adult": false,
  "vote_average": 10,
  "vote_count": 2,
  "video": false,
  "title": "The Connected Universe",
  "popularity": 1.096,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "The Connected Universe",
  "poster_path": "/z4ygf3evK8ZcyakU4x4hypbaPx3.jpg",
  "id": 423966,
  "backdrop_path": "/cMME71ghrfFxCLS947kSSSGAm9t.jpg",
  "overview": "This fascinating journey of exploration of the connection of all things in the Universe is narrated by the legendary Sir Patrick Stewart. The film explores the mechanism of connection of all things in the Universe.",
  "credit_id": "58194383925141339c00286c"
  },
  {
  "release_date": "2009-04-30",
  "adult": false,
  "vote_average": 6.2,
  "vote_count": 6770,
  "video": false,
  "title": "X-Men Origins: Wolverine",
  "popularity": 1.68,
  "genre_ids": [
  12,
  28,
  53,
  878
  ],
  "original_language": "en",
  "character": "Charles Xavier / Professor X",
  "original_title": "X-Men Origins: Wolverine",
  "poster_path": "/kqO36IYvWbRKMPiUeiVZUFH06Rc.jpg",
  "id": 2080,
  "backdrop_path": "/mEuDxpLNBCarVgXRqDznHT7bdS8.jpg",
  "overview": "After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine.",
  "credit_id": "57f5a890c3a36816040019b0"
  },
  {
  "release_date": "2016-11-16",
  "adult": false,
  "vote_average": 6.3,
  "vote_count": 23,
  "video": false,
  "title": "David Blaine: Beyond Magic",
  "popularity": 3.713,
  "genre_ids": [
  99,
  10770
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "David Blaine: Beyond Magic",
  "poster_path": "/AfHFmAVZSTQyoPgo4YhxMLRQcTx.jpg",
  "id": 426222,
  "backdrop_path": "/aKv8wR9hvTdDKFBVcwsKCocmQhn.jpg",
  "overview": "In his most revealing performance yet, the one-hour special features an exploration into Blaine’s trademark style of street magic as he once again stuns his audience.",
  "credit_id": "582bddb492514111b700318a"
  },
  {
  "poster_path": "/AwwcN50ioCT5Ry7bQEg0bSCtgjZ.jpg",
  "adult": false,
  "backdrop_path": null,
  "vote_count": 0,
  "video": false,
  "id": 426432,
  "popularity": 0.852,
  "genre_ids": [
  35
  ],
  "original_language": "en",
  "title": "Sir Patrick Stewart: A Knight of Comedy",
  "original_title": "Sir Patrick Stewart: A Knight of Comedy",
  "release_date": "2016-01-10",
  "character": "Himself",
  "vote_average": 0,
  "overview": "Sir Patrick Stewart is a gentleman, a knight, and pretty damn funny guy! He hosts this Just for Laughs gala featuring Kyle Kinane, Jim Breuer, Russell Howard, Sebastian Maniscalco, Gina Yashere, Pete Zedlacher, and David Acer.",
  "credit_id": "582dd9ce925141094800a00b"
  },
  {
  "poster_path": "/f5pF4OYzh4wb1dYL2ARQNdqUsEZ.jpg",
  "adult": false,
  "backdrop_path": "/kTrgxhRSj2sun89bDbnGCPBiey6.jpg",
  "vote_count": 1565,
  "video": false,
  "id": 378236,
  "popularity": 10.681,
  "genre_ids": [
  16,
  35,
  10751
  ],
  "original_language": "en",
  "title": "The Emoji Movie",
  "original_title": "The Emoji Movie",
  "release_date": "2017-07-23",
  "character": "Poop (voice)",
  "vote_average": 5.4,
  "overview": "Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.",
  "credit_id": "588118f7c3a368147000149d"
  },
  {
  "release_date": "2000-11-02",
  "adult": false,
  "vote_average": 6.8,
  "vote_count": 16,
  "video": false,
  "title": "X-Men: Production Scrapbook",
  "popularity": 1.795,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: Production Scrapbook",
  "poster_path": "/iN9DjcdY90ytdn63MHawSRv1fTl.jpg",
  "id": 81946,
  "backdrop_path": "/bk3mL984lTBwsjS5FJ1pkRPMW0w.jpg",
  "overview": "",
  "credit_id": "58c95ab7925141111300a823"
  },
  {
  "release_date": "2003-02-11",
  "adult": false,
  "vote_average": 5.6,
  "vote_count": 14,
  "video": true,
  "title": "X-Men: The Uncanny Suspects",
  "popularity": 2.454,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: The Uncanny Suspects",
  "poster_path": "/iRMG0GdJYUNBV2JBU2218Pf0Ujt.jpg",
  "id": 447102,
  "backdrop_path": null,
  "overview": "The short documentary about X-Men movie is featured on the X-Men 1.5 DVD.",
  "credit_id": "58c95d3bc3a36875e800ab30"
  },
  {
  "release_date": "2003-02-11",
  "adult": false,
  "vote_average": 3,
  "vote_count": 2,
  "video": true,
  "title": "X-Men: Premieres Around the World",
  "popularity": 0.992,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: Premieres Around the World",
  "poster_path": "/ydsWjdWvLhqbHsHQgN78lL3SyTX.jpg",
  "id": 447117,
  "backdrop_path": null,
  "overview": "We find notes from Singer, Stan Lee, Stewart, McKellen, Berry, Mane, Davison, Romijn-Stamos, Paquin, Jackman, Janssen, and Marsden.",
  "credit_id": "58c96a1392514110f800b4e3"
  },
  {
  "release_date": "2003-11-25",
  "adult": false,
  "vote_average": 6,
  "vote_count": 4,
  "video": true,
  "title": "The Second Uncanny Issue of X-Men: Making X2",
  "popularity": 1.4,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "The Second Uncanny Issue of X-Men: Making X2",
  "poster_path": null,
  "id": 447120,
  "backdrop_path": null,
  "overview": "This is feature-length documentary on the 2-Disc of X2.",
  "credit_id": "58c96dfdc3a36875a600a4fc"
  },
  {
  "release_date": "2003-11-25",
  "adult": false,
  "vote_average": 6,
  "vote_count": 2,
  "video": true,
  "title": "Requiem for Mutants: The Score of X2",
  "popularity": 0.652,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Requiem for Mutants: The Score of X2",
  "poster_path": "/ueLSiJ0ZMYUzj7saSBqhVOOdMcq.jpg",
  "id": 447124,
  "backdrop_path": null,
  "overview": "This short film is a behind-the-scenes look at the scoring of the movie \"X2\". Included in this mini-documentary is an interview with the composer John Ottman about the score, as well as clips from the film and of the actual scoring sessions at the 20th Century Fox Newman scoring stage.",
  "credit_id": "58c9705b92514110ed00b8c1"
  },
  {
  "release_date": "2006-10-02",
  "adult": false,
  "vote_average": 6.6,
  "vote_count": 7,
  "video": true,
  "title": "X-Men: Evolution of a Trilogy",
  "popularity": 1.422,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: Evolution of a Trilogy",
  "poster_path": null,
  "id": 447141,
  "backdrop_path": null,
  "overview": "A behind the scenes look at the making of the X-Men trilogy made up out of interviews shot during the production of all three films.",
  "credit_id": "58c977d092514110ed00bd60"
  },
  {
  "release_date": "2006-10-02",
  "adult": false,
  "vote_average": 6.7,
  "vote_count": 13,
  "video": true,
  "title": "X-Men: The Excitement Continues",
  "popularity": 2.746,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: The Excitement Continues",
  "poster_path": "/nu0Ib5hL02JTE2vNXudPNFa5Wlm.jpg",
  "id": 447143,
  "backdrop_path": "/ge7jLdgf4c6lqBCw7kyYijKMdYo.jpg",
  "overview": "A behind the scenes look at the making of X-men: The Last Stand.",
  "credit_id": "58c979cc925141110300bade"
  },
  {
  "release_date": "2015-07-14",
  "adult": false,
  "vote_average": 6,
  "vote_count": 1,
  "video": false,
  "title": "Mutant vs. Machine",
  "popularity": 1.875,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Mutant vs. Machine",
  "poster_path": null,
  "id": 447160,
  "backdrop_path": null,
  "overview": "A nine-part making-of documentary that has cast and crew look at story/character areas and the original comics, what Singer brings to the film, cast and performances, costumes, sets and production design, photography and shooting 3D, music, editing, and sound design, various effects, aspects of the \"Rogue Cut\", the film's reception and what to expect from the next movie.",
  "credit_id": "58c98ea1c3a368235800119f"
  },
  {
  "release_date": "2014-11-14",
  "adult": false,
  "vote_average": 7,
  "vote_count": 57,
  "video": true,
  "title": "X-Men: Reunited",
  "popularity": 4.291,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: Reunited",
  "poster_path": null,
  "id": 447161,
  "backdrop_path": null,
  "overview": "This making-of piece looks at the genesis of this project and how Singer wanted to reunite the original cast again.",
  "credit_id": "58c98fbc9251415e3300165f"
  },
  {
  "release_date": "2015-07-14",
  "adult": false,
  "vote_average": 6.8,
  "vote_count": 11,
  "video": true,
  "title": "X-Men: Unguarded",
  "popularity": 2.675,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: Unguarded",
  "poster_path": null,
  "id": 447162,
  "backdrop_path": null,
  "overview": "The film's all-star ensemble cast joins director Bryan Singer and screenwriter Simon Kinberg to share their favorite stories from the set.",
  "credit_id": "58c990dcc3a36823500016b1"
  },
  {
  "release_date": "1991-09-28",
  "adult": false,
  "vote_average": 5.5,
  "vote_count": 2,
  "video": false,
  "title": "Star Trek 25th Anniversary Special",
  "popularity": 0.955,
  "genre_ids": [
  10770,
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Star Trek 25th Anniversary Special",
  "poster_path": "/y2KndLnSedZbv1NrZyd3rwngieA.jpg",
  "id": 269768,
  "backdrop_path": null,
  "overview": "This documentary is hosted by William Shatner and Leonard Nimoy and they take us through the history of Trek. We also get to see bloopers from the original series and the current space program and how progression has been in reality, hosted by LeVar Burton.",
  "credit_id": "58c9b79e9251413c07000155"
  },
  {
  "release_date": "2000-07-02",
  "adult": false,
  "vote_average": 6.4,
  "vote_count": 58,
  "video": true,
  "title": "X-Men: The Mutant Watch",
  "popularity": 5.912,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "X-Men: The Mutant Watch",
  "poster_path": "/2BSZiURkEKgpNLIPjIRUEw3pASh.jpg",
  "id": 447399,
  "backdrop_path": "/jDWJoj7YjZPjaRcq676OIJ7hdwC.jpg",
  "overview": "While Senator Kelly addresses a senate committee about the supposed mutant menace, we learn about the making of the movie, X-Men.",
  "credit_id": "58cba7d0c3a368288900dbc7"
  },
  {
  "release_date": "1988-10-03",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "The Star Trek Saga: From One Generation To The Next",
  "popularity": 0.96,
  "genre_ids": [
  99,
  878
  ],
  "original_language": "en",
  "character": "Host",
  "original_title": "The Star Trek Saga: From One Generation To The Next",
  "poster_path": "/jbUyjMwaFhOqTlHkOmODNQV9GYj.jpg",
  "id": 448932,
  "backdrop_path": null,
  "overview": "This special is hosted by Patrick Stewart and traced the history of Star Trek from its inception with \"The Cage\" through to Star Trek IV: The Voyage Home and the first season of Star Trek: The Next Generation. It also showed brief previews of Star Trek V: The Final Frontier and TNG's second season. Also it was principally a container for the premiere of a full color print of \"The Cage\" which had, according to the special, recently been recovered from Paramount's studio archives.",
  "credit_id": "58d69c2c9251411f89042b40"
  },
  {
  "poster_path": "/u30xsZd3mijrdBKA6CeDsozx48g.jpg",
  "adult": false,
  "backdrop_path": "/tZGKKeWGejt63jiSdi7MTAjCFE9.jpg",
  "vote_count": 4792,
  "video": false,
  "id": 57800,
  "popularity": 17.488,
  "genre_ids": [
  12,
  16,
  35,
  10751
  ],
  "original_language": "en",
  "title": "Ice Age: Continental Drift",
  "original_title": "Ice Age: Continental Drift",
  "release_date": "2012-07-13",
  "character": "Ariscratle (voice)",
  "vote_average": 6.3,
  "overview": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
  "credit_id": "58dae4eec3a3686caa000492"
  },
  {
  "release_date": "1993-01-01",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Your Guide to Star Trek Generations",
  "popularity": 0.631,
  "genre_ids": [],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Your Guide to Star Trek Generations",
  "poster_path": "/uTYQAfcndlGjxquzUO39BN3ioH0.jpg",
  "id": 448638,
  "backdrop_path": null,
  "overview": "The making of Star Trek Generations which was given away free with The Sun newspaper in 1993.",
  "credit_id": "58df29f59251415e48003d82"
  },
  {
  "release_date": "2017-06-13",
  "adult": false,
  "vote_average": 5.9,
  "vote_count": 99,
  "video": false,
  "title": "Dragonheart: Battle for the Heartfire",
  "popularity": 11.698,
  "genre_ids": [
  12
  ],
  "original_language": "en",
  "character": "Drago (voice)",
  "original_title": "Dragonheart: Battle for the Heartfire",
  "poster_path": "/fDaOX4BCGwc1im7XYjrzyEbUfX2.jpg",
  "id": 451644,
  "backdrop_path": "/83QeqJ5QPljmAxPdgLv6BMzgo3u.jpg",
  "overview": "When the King Gareth dies, his potential heirs, twin grandchildren who possess the dragon’s unique strengths, use their inherited powers against each other to vie for the throne. When Drago’s source of power – known as the Heartfire – is stolen, more than the throne is at stake; the siblings must end their rivalry with swords and sorcery or the kingdom may fall.",
  "credit_id": "59340e959251417ddc020532"
  },
  {
  "release_date": "2017-09-15",
  "adult": false,
  "vote_average": 5.7,
  "vote_count": 33,
  "video": false,
  "title": "The Wilde Wedding",
  "popularity": 4.554,
  "genre_ids": [
  35,
  10749
  ],
  "original_language": "en",
  "character": "Harold",
  "original_title": "The Wilde Wedding",
  "poster_path": "/wE9tcRTZ3OCTz2LjGaNxFHZnDLJ.jpg",
  "id": 470472,
  "backdrop_path": "/5sSiYLTxW7P53tCd6GZK2S4OEDN.jpg",
  "overview": "After a whirlwind courtship, retired movie star Eve Wilde prepares to marry her fourth husband, the renowned English writer Harold Alcott. Sparks soon begin to fly when Eve's first ex and other guests arrive at her estate for a weekend get-together.",
  "credit_id": "598df49892514178fc0174c8"
  },
  {
  "release_date": "1983-12-17",
  "adult": false,
  "vote_average": 7.8,
  "vote_count": 66,
  "video": false,
  "title": "The Plague Dogs",
  "popularity": 5.225,
  "genre_ids": [
  12,
  16,
  18
  ],
  "original_language": "en",
  "character": "Major (voice)",
  "original_title": "The Plague Dogs",
  "poster_path": "/nNy9xOOjDPSgdCOFo2yPjppkPJz.jpg",
  "id": 30060,
  "backdrop_path": "/77LWEPzki8wKiHPofCXn7OGGPmx.jpg",
  "overview": "The Plague Dogs is a 1982 animated film based on the 1977 novel of the same name by Richard Adams. The story is centred on two dogs named Rowf and Snitter, who escape from a research laboratory in Great Britain. In the process of telling the story, the film highlights the cruelty of performing vivisection and animal research for its own sake.",
  "credit_id": "5994d166c3a3685679002c94"
  },
  {
  "poster_path": "/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
  "adult": false,
  "backdrop_path": "/jmbgxBd86MshzQQvv5laKvOKoMm.jpg",
  "vote_count": 298,
  "video": false,
  "id": 454294,
  "popularity": 16.392,
  "genre_ids": [
  28,
  12,
  14,
  10751
  ],
  "original_language": "en",
  "title": "The Kid Who Would Be King",
  "original_title": "The Kid Who Would Be King",
  "release_date": "2019-01-25",
  "character": "Old Merlin",
  "vote_average": 6.1,
  "overview": "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.",
  "credit_id": "59e5ddec925141024e00897f"
  },
  {
  "release_date": "2011-05-22",
  "adult": false,
  "vote_average": 6.8,
  "vote_count": 236,
  "video": false,
  "title": "Family Guy Presents: It's a Trap!",
  "popularity": 9.273,
  "genre_ids": [
  16,
  14,
  35,
  878
  ],
  "original_language": "en",
  "character": "Captain Jean-Luc Picard (voice)",
  "original_title": "Family Guy Presents: It's a Trap!",
  "poster_path": "/hi1V4pE2H6AqlFNmSOxqORsAPgU.jpg",
  "id": 278427,
  "backdrop_path": "/mNla2FQU3n8uLIX7PPfD3r2geCZ.jpg",
  "overview": "With the Griffins stuck again at home during a blackout, Peter tells the story of “Star Wars Episode VI: Return of the Jedi.”",
  "credit_id": "59f1c9d4c3a3680ef100b6b7"
  },
  {
  "release_date": "2017-12-12",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Dear Satan",
  "popularity": 0.6,
  "genre_ids": [
  35,
  16
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Dear Satan",
  "poster_path": "/rG33vTm1CW3P4owdLG3l5hPnV8B.jpg",
  "id": 495879,
  "backdrop_path": null,
  "overview": "A typo in a letter causes Satan to have a change of heart.",
  "credit_id": "5a4ba6b90e0a262dbb02a685"
  },
  {
  "release_date": "1994-05-21",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Journey's End: The Saga of Star Trek - The Next Generation",
  "popularity": 1.09,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "",
  "original_title": "Journey's End: The Saga of Star Trek - The Next Generation",
  "poster_path": "/FPVvKAalCGXJAEg4qplmwWh8HD.jpg",
  "id": 483598,
  "backdrop_path": null,
  "overview": "Your destination: the 24th century. Your mission: to voyage where few have gone before--behind the scenes of Star Trek: The Next Generation! Join Jonathan Frakes, Next Generation's Commander William Riker, for this fascinating chronicle of Gene Roddenberry's beloved, Emmy Award-winning series.",
  "credit_id": "5a5f9e099251415a2e006a03"
  },
  {
  "release_date": "2018-07-06",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Postcards from the 48%",
  "popularity": 0.88,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "",
  "original_title": "Postcards from the 48%",
  "poster_path": "/bqdW9B7MAQPJzGy2UoreeFesSYI.jpg",
  "id": 511457,
  "backdrop_path": null,
  "overview": "This is a film made by the some of the 48% who voted Remain. The film is of the 48% and for the 48%. It is their story, feelings and reasons for remain, made totally from their perspective.",
  "credit_id": "5aa808709251415e4501f7db"
  },
  {
  "release_date": "2005-04-22",
  "adult": false,
  "vote_average": 5.9,
  "vote_count": 25,
  "video": false,
  "title": "The Game of Their Lives",
  "popularity": 3.67,
  "genre_ids": [
  18
  ],
  "original_language": "en",
  "character": "Older Dent McSkimming",
  "original_title": "The Game of Their Lives",
  "poster_path": "/yBhH7PxoH0uCs01sZnwCnVIIeVw.jpg",
  "id": 29078,
  "backdrop_path": "/fQq3OoZZFqVdHrJIRGXONffslzH.jpg",
  "overview": "Based on a true story, this film tells the tale of the 1950 US soccer team who, against all odds, beat England 1 - 0 in the city of Belo Horizonte, Brazil. Although no US team has yet won a World Cup title, this story is about the family traditions and passions which shaped the lives of the players who made up this team of underdogs.",
  "credit_id": "5adb6ef89251410ad800dbdf"
  },
  {
  "release_date": "",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Dragon Rider",
  "popularity": 1.126,
  "genre_ids": [
  16
  ],
  "original_language": "en",
  "character": "(voice)",
  "original_title": "Dragon Rider",
  "poster_path": "/7HFnV5JFTcOBr38zmxQjQQ8RATa.jpg",
  "id": 523366,
  "backdrop_path": "/4bu5OLGfBhXphfR67yLlZChMz48.jpg",
  "overview": "An unlikely trio of heroes – a dragon, a boy and a forest brownie – embark on an epic adventure to find the “Rim of Heaven” - the mythological safe haven for all dragons.",
  "credit_id": "5af34df10e0a26397100150d"
  },
  {
  "release_date": "1998-12-13",
  "adult": false,
  "vote_average": 7,
  "vote_count": 1,
  "video": false,
  "title": "Amazing Earth",
  "popularity": 1.13,
  "genre_ids": [],
  "original_language": "en",
  "character": "",
  "original_title": "Amazing Earth",
  "poster_path": "/qmtWCIcnYIzG1XFPpPk8Wh1b2t0.jpg",
  "id": 308509,
  "backdrop_path": null,
  "overview": "Join narrator Patrick Stewart on a sweeping journey through Earth's fascinating history -- from the formation of ancient, geological artifacts to the modern exploration of the moon. The film is a storehouse of facts you probably didn't know. For instance, more than 18,000 meteorites strike Earth each year; it's 3,000 degrees four miles below Earth's surface; and Mount Everest's peak was once part of the ocean floor.",
  "credit_id": "5b0e1ca8c3a3687159000cc1"
  },
  {
  "release_date": "2019-12-31",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "Coda",
  "popularity": 0.84,
  "genre_ids": [
  18
  ],
  "original_language": "en",
  "character": "Henry Cole",
  "original_title": "Coda",
  "poster_path": null,
  "id": 528761,
  "backdrop_path": null,
  "overview": "A famous pianist at the twilight of his career meets a free-spirited music critic who soon becomes his rock as his mental state deteriorates.",
  "credit_id": "5b18e5b4c3a36848ff005c05"
  },
  {
  "release_date": "1974-02-02",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "An Artist's Story",
  "popularity": 0.951,
  "genre_ids": [],
  "original_language": "en",
  "character": "Anton",
  "original_title": "An Artist's Story",
  "poster_path": "/d4LBGUsgt9oiNlo21xm4diTMm5W.jpg",
  "id": 120190,
  "backdrop_path": null,
  "overview": "An Artist's Story concerns the confrontation of ideas between Anton, a young landscape painter, and Lydia, a young aristocratic girl who devotes her life to good works.",
  "credit_id": "5b2d96cb92514102d7001ec9"
  },
  {
  "poster_path": "/36YiDLw3IWkQyhfJnCjG2GCNgg9.jpg",
  "adult": false,
  "backdrop_path": "/kITQJHo88wMaXS2QjcMHh55ulti.jpg",
  "vote_count": 0,
  "video": false,
  "id": 458897,
  "popularity": 8.82,
  "genre_ids": [
  28,
  12,
  35
  ],
  "original_language": "en",
  "title": "Charlie's Angels",
  "original_title": "Charlie's Angels",
  "release_date": "2019-11-15",
  "character": "Bosley",
  "vote_average": 0,
  "overview": "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
  "credit_id": "5b9ff318c3a368044600412e"
  },
  {
  "release_date": "1980-05-25",
  "adult": false,
  "vote_average": 4,
  "vote_count": 3,
  "video": false,
  "title": "Hamlet",
  "popularity": 0.711,
  "genre_ids": [
  18,
  10770
  ],
  "original_language": "en",
  "character": "Claudius",
  "original_title": "Hamlet",
  "poster_path": "/tIxpyOHUMP9aHX0MI4dVcrp4wLB.jpg",
  "id": 106848,
  "backdrop_path": null,
  "overview": "Hamlet comes home from university to find his uncle married to his mother, and his father's ghost haunting the battlements and scaring the watch. Then his father's ghost directs him to seek revenge.",
  "credit_id": "5bba1d7e9251410a2102a297"
  },
  {
  "release_date": "2001-12-23",
  "adult": false,
  "vote_average": 5.3,
  "vote_count": 8,
  "video": false,
  "title": "Once Upon a Time: The Super Heroes",
  "popularity": 4.383,
  "genre_ids": [
  99,
  10770
  ],
  "original_language": "fr",
  "character": "Professor X (archive footage)",
  "original_title": "De Superman à Spider-Man: L'aventure des super-héros",
  "poster_path": "/b6760qS8pEb3elWp4e7KPQsGliC.jpg",
  "id": 228088,
  "backdrop_path": "/cRsi4NPp2ASGbTpDNVGFQZ7Vgkc.jpg",
  "overview": "The historical saga of American superheroes. Born in the period between the Great Depression and the World War II to combat the hobgoblins of the modern world, these mutant human beings with superhuman powers colonized the funny papers, radio dramas, television and films, to become a truly national industry in the United States: they gave expression to the fears and obsessions of the twentieth century and bolstered American ideals.",
  "credit_id": "5c41b8ce0e0a2643d393d9b8"
  },
  {
  "release_date": "2005-02-16",
  "adult": false,
  "vote_average": 4.2,
  "vote_count": 3,
  "video": false,
  "title": "Mysterious Island",
  "popularity": 0.611,
  "genre_ids": [],
  "original_language": "en",
  "character": "Captain Nemo",
  "original_title": "Mysterious Island",
  "poster_path": "/9LdBpOmog5dGBv0U6B7u2vL0jW.jpg",
  "id": 524655,
  "backdrop_path": "/qlXsBixYjwH9cZIMTt6ZxEN572c.jpg",
  "overview": "To escape evils of the Civil War, Cyrus removes his small family and random war prisoners by way of hot air balloon. Once landing on an island, the group finds they are surrounded by danger from giant insects and gold-craving pirates. Turned away by the only safe haven on the island, owned by Captain Nemo, played by Patrick Stuart, the group is forced to find shelter and survive.",
  "credit_id": "5c508f49c3a36874b98364d9"
  },
  {
  "release_date": "2007-02-19",
  "adult": false,
  "vote_average": 6.5,
  "vote_count": 2,
  "video": false,
  "title": "Star Trek: Beyond the Final Frontier",
  "popularity": 0.668,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Himself",
  "original_title": "Star Trek: Beyond the Final Frontier",
  "poster_path": "/qsIjDRPUY2d5AfZX7c9kNJJS6OM.jpg",
  "id": 416184,
  "backdrop_path": null,
  "overview": "From the conventions in Europe and Las Vegas to the billionaire collector who scours the world for memorabilia, we look at the impact that Star Trek has had on fans around the world and try to find out just what it is about this supposedly \"silly\" series that has meant so much to so many.",
  "credit_id": "5c60373f0e0a264d6f6b77d5"
  },
  {
  "release_date": "1992-01-01",
  "adult": false,
  "vote_average": 5,
  "vote_count": 1,
  "video": false,
  "title": "Changing Our Minds: The Story of Dr. Evelyn Hooker",
  "popularity": 0.6,
  "genre_ids": [
  99
  ],
  "original_language": "en",
  "character": "Narrator",
  "original_title": "Changing Our Minds: The Story of Dr. Evelyn Hooker",
  "poster_path": "/ssYsndebeSWevgCiuQ9HnJhx9oD.jpg",
  "id": 149404,
  "backdrop_path": null,
  "overview": "The life and work of the woman described as \"The Rosa Parks of Gay Rights\". During the repressive 1950's, Dr. Evelyn Hooker undertook ground breaking research that led to a radical discovery: homosexuals were not, by definition, \"sick.\" Dr. Hooker's finding sent shock waves through the psychiatric community and culminated in a major victory for gay rights - in 1974 the weight of her studies, along with gay activism, forced the American Psychiatric Association to remove homosexuality from its official manual of mental disorders. Startling archival footage of the medical procedure used to \"cure\" homosexuality, images from the underground gay world of the McCarthy era and home movies of literary icon Christopher Isherwood bring to life history which we must never forget. Narrated by Patrick Stewart.",
  "credit_id": "5c6191fc0e0a267de69633a3"
  },
  {
  "poster_path": "/6stivDTaynQL739vtJ6zPBggzg4.jpg",
  "adult": false,
  "backdrop_path": null,
  "vote_count": 0,
  "video": false,
  "id": 617917,
  "popularity": 2.495,
  "genre_ids": [],
  "original_language": "en",
  "title": "#NoJoke",
  "original_title": "#NoJoke",
  "release_date": "2019-09-09",
  "character": "Himself",
  "vote_average": 0,
  "overview": "A musician's journey to create a song with some of the biggest stars in the industry. Along the way, he faces up to his painful past, while giving viewers a deep personal insight into the issue of bullying.",
  "credit_id": "5d38084260c51d1f48830956"
  },
  {
  "release_date": "1983-12-16",
  "adult": false,
  "vote_average": 0,
  "vote_count": 0,
  "video": false,
  "title": "The Plaque Dogs",
  "popularity": 0.6,
  "genre_ids": [
  16,
  18
  ],
  "original_language": "en",
  "character": "Major (voice)",
  "original_title": "The Plaque Dogs",
  "poster_path": "/ZrGh7eMTyULUVmDOGQpe4aMKtd.jpg",
  "id": 629681,
  "backdrop_path": null,
  "overview": "The 1982 British-American adult animated adventure film about friendship is based on the 1977 novel of the same name by Richard Adams.  The Plaque Dogs was written, directed and produced by the American-born British filmmaker and theater producer Martin Rosen who also produced \"Watership Down\", a film adaptation also based on Richard Adams novel published in 1972.  The film was rated PG-13 by MPAA for heavy animal cruelty themes, emotionally distressing scenes, and violent imagery. The Movie was produced by Embassy Pictures and by United Artists.  The Plaque Dogs is the first non-family oriented MGM animated film. The Plot is about two dogs escape from a laboratory and are hunted as possible carriers of the bubonic plague.",
  "credit_id": "5d7536482ea6b90010bff0f5"
  }
  ],
  "crew": [
  {
  "id": 200,
  "department": "Production",
  "original_language": "en",
  "original_title": "Star Trek: Insurrection",
  "job": "Producer",
  "overview": "When an alien race and factions within Starfleet attempt to take over a planet that has \"regenerative\" properties, it falls upon Captain Picard and the crew of the Enterprise to defend the planet's people as well as the very ideals upon which the Federation itself was founded.",
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "video": false,
  "credit_id": "52fe4226c3a36847f8007c1d",
  "poster_path": "/9pbc44kltJhArUNyrdQcantMEvH.jpg",
  "popularity": 13.203,
  "backdrop_path": "/yaattgmMQ9dLg6n8XPXAER8WI2C.jpg",
  "vote_count": 622,
  "title": "Star Trek: Insurrection",
  "adult": false,
  "vote_average": 6.4,
  "release_date": "1998-12-10"
  },
  {
  "id": 48358,
  "department": "Production",
  "original_language": "en",
  "original_title": "The Canterville Ghost",
  "job": "Co-Producer",
  "overview": "When a teenaged girl moves to England, with her brothers and parents into the ancient Canterville Hall, she's not at all happy. Especially as there's a ghost and a mysterious re-appearing bloodstain on the hearth. She campaigns to go back home, and her dad, believing the ghost's pranks are Ginny's, is ready to send her back. But then Ginny actually meets the elusive 17th-century Sir Simon de Canterville (not to mention the cute teenaged duke next door), and she sets her hand to the task of freeing Sir Simon from his curse.",
  "genre_ids": [
  10770,
  14,
  18,
  10751
  ],
  "video": false,
  "credit_id": "5962f6d292514122510c57a0",
  "release_date": "1996-01-27",
  "popularity": 3.755,
  "vote_average": 6.2,
  "vote_count": 20,
  "title": "The Canterville Ghost",
  "adult": false,
  "backdrop_path": "/1P8jAgJkQjIYPHsN46FRAm85S94.jpg",
  "poster_path": "/daQl68yTtTnFIwKJoI3rrYsyvTO.jpg"
  },
  {
  "id": 47913,
  "department": "Production",
  "original_language": "en",
  "original_title": "King of Texas",
  "job": "Executive Producer",
  "overview": "In this re-imagining of Shakespear's King Lear, Patrick Stewart stars as John Lear, a Texas cattle baron, who, after dividing his wealth among his three daughters, is rejected by them.",
  "genre_ids": [
  18,
  37
  ],
  "video": false,
  "credit_id": "59807f88925141491d0113a0",
  "poster_path": "/lRkm0ERINKdEzGldxlINRo7ehGF.jpg",
  "popularity": 3.124,
  "backdrop_path": "/tQJcK7JGUwJV5V4LzkYbbylBG4B.jpg",
  "vote_count": 4,
  "title": "King of Texas",
  "adult": false,
  "vote_average": 5.1,
  "release_date": "2002-06-02"
  }
  ]
  },
  "name": "Patrick Stewart",
  "tagged_images": {
  "results": [
  {
  "iso_639_1": null,
  "vote_count": 8,
  "media_type": "movie",
  "file_path": "/j5ugnHfAi4VdLsRmQFzSqnv8HEK.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "1994-11-17",
  "vote_count": 686,
  "video": false,
  "adult": false,
  "vote_average": 6.5,
  "title": "Star Trek: Generations",
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "original_title": "Star Trek: Generations",
  "popularity": 7.801,
  "id": 193,
  "backdrop_path": "/mmwQBfWmEqJBOwfsjIBJPchXlSP.jpg",
  "overview": "Captain Jean-Luc Picard and the crew of the Enterprise-D find themselves at odds with the renegade scientist Soran who is destroying entire star systems. Only one man can help Picard stop Soran's scheme...and he's been dead for seventy-eight years.",
  "poster_path": "/wjrXjlNpDq9U8vYmAwf420yDFtn.jpg"
  },
  "height": 1080,
  "vote_average": 5.372,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 1,
  "media_type": "movie",
  "file_path": "/otc2AUrBOgK1S6V4YUV3FVziJdU.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "poster_path": "/bwmJ5yBCNGVdEe7OAcLHDNmaANU.jpg",
  "id": 8834,
  "video": false,
  "vote_count": 742,
  "adult": false,
  "backdrop_path": "/zNiujebroDoOuywLdhzDDdFBEDl.jpg",
  "genre_ids": [
  28,
  18,
  9648,
  53
  ],
  "original_language": "en",
  "original_title": "Conspiracy Theory",
  "popularity": 10.207,
  "title": "Conspiracy Theory",
  "vote_average": 6.5,
  "overview": "A man obsessed with conspiracy theories becomes a target after one of his theories turns out to be true. Unfortunately, in order to save himself, he has to figure out which theory it is.",
  "release_date": "1997-08-08"
  },
  "height": 1080,
  "vote_average": 5.3125,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 1,
  "media_type": "tv",
  "file_path": "/3xCqjlyHQriOODdxKECURsY2fy8.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "original_name": "Blunt Talk",
  "genre_ids": [
  35
  ],
  "name": "Blunt Talk",
  "poster_path": "/cqSgyXdypdCn2K11mA3pSRrHAsd.jpg",
  "vote_count": 34,
  "vote_average": 6.6,
  "popularity": 4.338,
  "id": 62238,
  "original_language": "en",
  "first_air_date": "2015-08-22",
  "backdrop_path": "/3xCqjlyHQriOODdxKECURsY2fy8.jpg",
  "overview": "A British newscaster moves to Los Angeles with his alcoholic manservant and the baggage of several failed marriages to host a sanctimonious talk show.",
  "origin_country": [
  "US"
  ]
  },
  "height": 1440,
  "vote_average": 5.3125,
  "width": 2560
  },
  {
  "iso_639_1": null,
  "vote_count": 2,
  "media_type": "tv",
  "file_path": "/iuYeAsJUfHm66t0VfeypBPuHCiT.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "original_name": "Blunt Talk",
  "genre_ids": [
  35
  ],
  "name": "Blunt Talk",
  "poster_path": "/cqSgyXdypdCn2K11mA3pSRrHAsd.jpg",
  "vote_count": 34,
  "vote_average": 6.6,
  "popularity": 4.338,
  "id": 62238,
  "original_language": "en",
  "first_air_date": "2015-08-22",
  "backdrop_path": "/3xCqjlyHQriOODdxKECURsY2fy8.jpg",
  "overview": "A British newscaster moves to Los Angeles with his alcoholic manservant and the baggage of several failed marriages to host a sanctimonious talk show.",
  "origin_country": [
  "US"
  ]
  },
  "height": 1080,
  "vote_average": 5.3040293040293,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 13,
  "media_type": "movie",
  "file_path": "/5LBcSLHAtEIIgvNkA2dPmYH5wR7.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2014-05-23",
  "vote_count": 10482,
  "video": false,
  "adult": false,
  "vote_average": 7.5,
  "title": "X-Men: Days of Future Past",
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men: Days of Future Past",
  "popularity": 29.582,
  "id": 127585,
  "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
  "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
  "poster_path": "/pb1IURTkK5rImP9ZV83lxJO2us7.jpg"
  },
  "height": 1080,
  "vote_average": 5.288,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 11,
  "media_type": "movie",
  "file_path": "/aBkkrhQS4rO3u1OTahywtSXu3It.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2014-05-23",
  "vote_count": 10482,
  "video": false,
  "adult": false,
  "vote_average": 7.5,
  "title": "X-Men: Days of Future Past",
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men: Days of Future Past",
  "popularity": 29.582,
  "id": 127585,
  "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
  "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
  "poster_path": "/pb1IURTkK5rImP9ZV83lxJO2us7.jpg"
  },
  "height": 1080,
  "vote_average": 5.276,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 2,
  "media_type": "movie",
  "file_path": "/efQ6bV4KMGYo1AOWiPIKjQDdsBB.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2014-05-23",
  "vote_count": 10482,
  "video": false,
  "adult": false,
  "vote_average": 7.5,
  "title": "X-Men: Days of Future Past",
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men: Days of Future Past",
  "popularity": 29.582,
  "id": 127585,
  "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
  "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
  "poster_path": "/pb1IURTkK5rImP9ZV83lxJO2us7.jpg"
  },
  "height": 1080,
  "vote_average": 5.2454212454212,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 2,
  "media_type": "tv",
  "file_path": "/l6tXiDARablPk4VttdeFH1O6aF6.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "original_name": "Blunt Talk",
  "genre_ids": [
  35
  ],
  "name": "Blunt Talk",
  "poster_path": "/cqSgyXdypdCn2K11mA3pSRrHAsd.jpg",
  "vote_count": 34,
  "vote_average": 6.6,
  "popularity": 4.338,
  "id": 62238,
  "original_language": "en",
  "first_air_date": "2015-08-22",
  "backdrop_path": "/3xCqjlyHQriOODdxKECURsY2fy8.jpg",
  "overview": "A British newscaster moves to Los Angeles with his alcoholic manservant and the baggage of several failed marriages to host a sanctimonious talk show.",
  "origin_country": [
  "US"
  ]
  },
  "height": 1080,
  "vote_average": 5.2454212454212,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 3,
  "media_type": "movie",
  "file_path": "/cuEu6JC2qYJ5EJzmTDJNJBdNnSr.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "poster_path": "/hr97MCUycHxSRKTmpoqO8RoTQPz.jpg",
  "id": 70703,
  "video": false,
  "vote_count": 59,
  "adult": false,
  "backdrop_path": "/bQstyNTuWlEOG8gMGf7QvNnfLCA.jpg",
  "genre_ids": [
  99,
  878
  ],
  "original_language": "en",
  "original_title": "The Captains",
  "popularity": 4.081,
  "title": "The Captains",
  "vote_average": 6.3,
  "overview": "The Captains is a feature length documentary film written and directed by William Shatner. The film follows Shatner as he interviews the other actors whom have portrayed Starship captains within the illustrious science-fiction franchise.",
  "release_date": "2011-07-22"
  },
  "height": 720,
  "vote_average": 5.2164502164502,
  "width": 1280
  },
  {
  "iso_639_1": null,
  "vote_count": 3,
  "media_type": "movie",
  "file_path": "/pVD3GBltjVRPyhkpPxtJ7OQeiVR.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2014-05-23",
  "vote_count": 10482,
  "video": false,
  "adult": false,
  "vote_average": 7.5,
  "title": "X-Men: Days of Future Past",
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men: Days of Future Past",
  "popularity": 29.582,
  "id": 127585,
  "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
  "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
  "poster_path": "/pb1IURTkK5rImP9ZV83lxJO2us7.jpg"
  },
  "height": 1080,
  "vote_average": 5.2092352092352,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 3,
  "media_type": "movie",
  "file_path": "/vBbVKd0fJNFcLQtatPLq8zV82YJ.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2014-05-23",
  "vote_count": 10482,
  "video": false,
  "adult": false,
  "vote_average": 7.5,
  "title": "X-Men: Days of Future Past",
  "genre_ids": [
  28,
  12,
  14,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men: Days of Future Past",
  "popularity": 29.582,
  "id": 127585,
  "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
  "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
  "poster_path": "/pb1IURTkK5rImP9ZV83lxJO2us7.jpg"
  },
  "height": 1080,
  "vote_average": 5.1803751803752,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 14,
  "media_type": "movie",
  "file_path": "/7g06gQ7Zf6b2gKbtg3kgHOizQey.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2000-07-14",
  "vote_count": 7175,
  "video": false,
  "adult": false,
  "vote_average": 6.9,
  "title": "X-Men",
  "genre_ids": [
  28,
  12,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men",
  "popularity": 1.596,
  "id": 36657,
  "backdrop_path": "/xm75A18CE7Wc6J9k2ZidFyqJ6rX.jpg",
  "overview": "Two mutants, Rogue and Wolverine, come to a private academy for their kind whose resident superhero team, the X-Men, must oppose a terrorist organization with similar powers.",
  "poster_path": "/hJ09SIDACUvRg3RLQRT2jUfDy7W.jpg"
  },
  "height": 1080,
  "vote_average": 5.176,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 1,
  "media_type": "movie",
  "file_path": "/p3j5ut7Pv2EndcUmHbNsfYkVWHV.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "poster_path": "/2DTlIoISLhgZvTPXvJtuZfdyTOu.jpg",
  "id": 20435,
  "video": false,
  "vote_count": 26,
  "adult": false,
  "backdrop_path": "/oNYtt0tV6WYDCJDqHeMgygYvh9.jpg",
  "genre_ids": [
  10770,
  28,
  53
  ],
  "original_language": "en",
  "original_title": "Death Train",
  "popularity": 2.561,
  "title": "Death Train",
  "vote_average": 4.8,
  "overview": "When a renegade Russian general sends a nuclear bomb hurtling toward the Middle East aboard a hijacked train, special agents are dispatched to disarm the deadly device.  Ten tons of steel and one ounce of hot plutonium are now riding roughshod through Europe.  With time running out, the agents launch a desperate, bullet-packed assault on a deadly moving target piloted by a cold-blooded mercenary.",
  "release_date": "1993-04-14"
  },
  "height": 720,
  "vote_average": 5.172,
  "width": 1280
  },
  {
  "iso_639_1": null,
  "vote_count": 2,
  "media_type": "movie",
  "file_path": "/n8LaOHdAuHRLKU8bPZ3ngjfGhM5.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "1996-11-21",
  "vote_count": 971,
  "video": false,
  "adult": false,
  "vote_average": 7.2,
  "title": "Star Trek: First Contact",
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "original_title": "Star Trek: First Contact",
  "popularity": 12.137,
  "id": 199,
  "backdrop_path": "/welkOTUozJ968u1KLx33vPpo7aS.jpg",
  "overview": "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
  "poster_path": "/qhVB8eUGwkdVvd8Fezk0AgcMPDH.jpg"
  },
  "height": 720,
  "vote_average": 5.1208791208791,
  "width": 1280
  },
  {
  "iso_639_1": null,
  "vote_count": 2,
  "media_type": "movie",
  "file_path": "/l1MUtAf29YZXiZFdrwbxksXKsFr.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "1996-11-21",
  "vote_count": 971,
  "video": false,
  "adult": false,
  "vote_average": 7.2,
  "title": "Star Trek: First Contact",
  "genre_ids": [
  28,
  12,
  878,
  53
  ],
  "original_language": "en",
  "original_title": "Star Trek: First Contact",
  "popularity": 12.137,
  "id": 199,
  "backdrop_path": "/welkOTUozJ968u1KLx33vPpo7aS.jpg",
  "overview": "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
  "poster_path": "/qhVB8eUGwkdVvd8Fezk0AgcMPDH.jpg"
  },
  "height": 720,
  "vote_average": 5.1135531135531,
  "width": 1280
  },
  {
  "iso_639_1": null,
  "vote_count": 7,
  "media_type": "movie",
  "file_path": "/br2UUHERikqjJERBugY4j6T8uQf.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "release_date": "2000-07-14",
  "vote_count": 7175,
  "video": false,
  "adult": false,
  "vote_average": 6.9,
  "title": "X-Men",
  "genre_ids": [
  28,
  12,
  878
  ],
  "original_language": "en",
  "original_title": "X-Men",
  "popularity": 1.596,
  "id": 36657,
  "backdrop_path": "/xm75A18CE7Wc6J9k2ZidFyqJ6rX.jpg",
  "overview": "Two mutants, Rogue and Wolverine, come to a private academy for their kind whose resident superhero team, the X-Men, must oppose a terrorist organization with similar powers.",
  "poster_path": "/hJ09SIDACUvRg3RLQRT2jUfDy7W.jpg"
  },
  "height": 1080,
  "vote_average": 5.068,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 0,
  "media_type": "tv",
  "file_path": "/dRLeK3gr8ugkqmElaTsidb3nlEB.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "original_name": "I, Claudius",
  "genre_ids": [
  18,
  10768
  ],
  "name": "I, Claudius",
  "poster_path": "/lNjD0VKaPHCjgFdgmFFceB71iY9.jpg",
  "vote_count": 45,
  "vote_average": 8.4,
  "popularity": 7.129,
  "id": 5487,
  "original_language": "en",
  "first_air_date": "1976-09-20",
  "backdrop_path": "/ydYnGjDO8qzr8JggNhHXvfcOKk5.jpg",
  "overview": "Acclaimed blackly comic historical drama series. Set amidst a web of power, corruption and lies, it chronicles the reigns of the Roman emperors - Augustus, Tiberius, Caligula and finally Claudius.",
  "origin_country": [
  "GB"
  ]
  },
  "height": 1080,
  "vote_average": 0,
  "width": 1920
  },
  {
  "iso_639_1": null,
  "vote_count": 0,
  "media_type": "tv",
  "file_path": "/yp2UZJnlbaNH1YAfnHYfmSfF4ub.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "original_name": "Blunt Talk",
  "genre_ids": [
  35
  ],
  "name": "Blunt Talk",
  "poster_path": "/cqSgyXdypdCn2K11mA3pSRrHAsd.jpg",
  "vote_count": 34,
  "vote_average": 6.6,
  "popularity": 4.338,
  "id": 62238,
  "original_language": "en",
  "first_air_date": "2015-08-22",
  "backdrop_path": "/3xCqjlyHQriOODdxKECURsY2fy8.jpg",
  "overview": "A British newscaster moves to Los Angeles with his alcoholic manservant and the baggage of several failed marriages to host a sanctimonious talk show.",
  "origin_country": [
  "US"
  ]
  },
  "height": 1440,
  "vote_average": 0,
  "width": 2560
  },
  {
  "iso_639_1": null,
  "vote_count": 0,
  "media_type": "tv",
  "file_path": "/i0mnQpwwPGBXhKUr7gwExsW7Onl.jpg",
  "aspect_ratio": 1.7777777777778,
  "media": {
  "original_name": "Blunt Talk",
  "genre_ids": [
  35
  ],
  "name": "Blunt Talk",
  "poster_path": "/cqSgyXdypdCn2K11mA3pSRrHAsd.jpg",
  "vote_count": 34,
  "vote_average": 6.6,
  "popularity": 4.338,
  "id": 62238,
  "original_language": "en",
  "first_air_date": "2015-08-22",
  "backdrop_path": "/3xCqjlyHQriOODdxKECURsY2fy8.jpg",
  "overview": "A British newscaster moves to Los Angeles with his alcoholic manservant and the baggage of several failed marriages to host a sanctimonious talk show.",
  "origin_country": [
  "US"
  ]
  },
  "height": 1440,
  "vote_average": 0,
  "width": 2560
  }
  ],
  "page": 1,
  "total_results": 19,
  "id": 2387,
  "total_pages": 1
  },
  "also_known_as": [
  "Sir Patrick Hewes Stewart",
  "Σερ Πάτρικ Στιούαρτ",
  "Πάτρικ Στιούαρτ",
  "패트릭 스튜어트"
  ],
  "gender": 2,
  "biography": "An English film, television and stage actor. He has had a distinguished career in theatre and television for around half a century. He is most widely known for his television and film roles, as Captain Jean-Luc Picard in Star Trek: The Next Generation and as Professor Charles Xavier in the X-Men films. Stewart was born in Mirfield near Dewsbury in the West Riding of Yorkshire, England, the son of Gladys, a weaver and textile worker, and Alfred Stewart, a Regimental Sergeant Major in the British Army who served with the King's Own Yorkshire Light Infantry and previously worked as a general labourer and as a postman. Stewart and his first wife, Sheila Falconer, have two children: Daniel Freedom and Sophie Alexandra. Stewart and Falconer divorced in 1990. In 1997, he became engaged to Wendy Neuss, one of the producers of Star Trek: The Next Generation, and they married on 25 August 2000, divorcing three years later. Four months prior to his divorce from Neuss, Stewart played opposite actress Lisa Dillon in a production of The Master Builder. The two dated for four years, but are no longer together. He is now seeing Sunny Ozell; at 31, she is younger than his daughter. \"I just don't meet women of my age,\" he explains. Stewart has been a prolific actor in performances by the Royal Shakespeare Company, appearing in over 60 productions.",
  "popularity": 10.406,
  "place_of_birth": "Mirfield, West Yorkshire, England, UK",
  "profile_path": "/wEy5qSDT5jT3ZASc2hbwi59voPL.jpg",
  "adult": false,
  "imdb_id": "nm0001772",
  "homepage": null
}));

export default PersonScreen;
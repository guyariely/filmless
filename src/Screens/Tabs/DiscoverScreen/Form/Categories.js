import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemesContext } from "../../../../Context/ThemesContext";
import { DiscoverContext } from "../../../../Context/DiscoverContext";
import SelectInput from "react-native-sectioned-multi-select";
import fonts from "../../../../Constants/fonts";

const parseIDsToString = (IDs, categories) => {
  return IDs.map(
    ID => categories[0].children.find(categorie => categorie.id == ID).name
  ).join(", ");
};

const Categories = props => {
  const { genres, setGenres, languages, setLanguages } =
    useContext(DiscoverContext);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).label}>GENRES</Text>
        <SelectInput
          items={genresList}
          uniqueKey="id"
          subKey="children"
          selectText={
            genres.length == 0
              ? "ALL GENRES"
              : parseIDsToString(genres, genresList)
          }
          alwaysShowSelectText={true}
          showDropDowns={false}
          readOnlyHeadings={true}
          hideSearch={true}
          showChips={false}
          modalWithSafeAreaView={true}
          onSelectedItemsChange={genres => setGenres(genres)}
          selectedItems={genres}
          colors={selectInputColors(theme)}
          styles={
            genres.length == 0
              ? selectInputStyles(theme)
              : [selectInputStyles(theme), SelectInputStyles__active(theme)]
          }
        />
      </View>
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).label}>LANGUAGES</Text>
        <SelectInput
          items={languagesList}
          uniqueKey="id"
          subKey="children"
          selectText={
            languages.length == 0
              ? "ALL LANGUAGES"
              : parseIDsToString(languages, languagesList)
          }
          searchPlaceholderText="Search languages..."
          alwaysShowSelectText={true}
          showDropDowns={false}
          readOnlyHeadings={true}
          showChips={false}
          modalWithSafeAreaView={true}
          onSelectedItemsChange={languages => setLanguages(languages)}
          selectedItems={languages}
          colors={selectInputColors(theme)}
          styles={
            languages.length == 0
              ? selectInputStyles(theme)
              : [selectInputStyles(theme), SelectInputStyles__active(theme)]
          }
        />
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingHorizontal: 26,
      paddingTop: 20,
      paddingBottom: 10,
    },
    inputContainer: {
      paddingBottom: 20,
    },
    label: {
      color: theme.text03,
      fontSize: 18,
      marginBottom: 10,
    },
  };
};

const selectInputColors = theme => {
  return {
    base01: theme.text01,
    subItemBackground: theme.base01,
    searchSelectionColor: theme.text01,
  };
};

const selectInputStyles = theme => {
  return {
    container: {
      backgroundColor: theme.base01,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: theme.primary,
    },
    searchBar: {
      backgroundColor: theme.base02,
      paddingVertical: 10,
    },
    searchTextInput: {
      color: theme.text01,
    },
    scrollView: {
      padding: 15,
    },
    item: {
      backgroundColor: theme.base01,
      paddingHorizontal: 15,
      paddingBottom: 15,
    },
    itemText: {
      color: theme.text01,
      fontWeight: "600",
      fontFamily: fonts.base01,
      fontSize: 34,
    },
    subItem: {
      backgroundColor: theme.base01,
      paddingHorizontal: 15,
      paddingBottom: 25,
      paddingTop: 0,
    },
    subItemText: {
      color: theme.text01,
      fontSize: 20,
    },
    activeOpacity: {
      backgroundColor: theme.base01,
    },
    button: {
      backgroundColor: theme.primary,
      paddingVertical: 15,
    },
    confirmText: {
      fontFamily: "Helvetica Neue",
    },
    selectToggle: {
      borderColor: theme.base01,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 16,
    },
    selectToggleText: {
      color: theme.text04,
    },
  };
};

const SelectInputStyles__active = theme => {
  return {
    selectToggle: {
      backgroundColor: theme.base01,
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 16,
    },
    selectToggleText: {
      color: theme.text01,
    },
  };
};

const genresList = [
  {
    name: "Genres",
    id: 0,
    children: [
      { name: "Action", id: 28 },
      { name: "Adventure", id: 12 },
      { name: "Animation", id: 16 },
      { name: "Comedy", id: 35 },
      { name: "Crime", id: 80 },
      { name: "Documentary", id: 99 },
      { name: "Drama", id: 18 },
      { name: "Family", id: 10751 },
      { name: "Fantasy", id: 14 },
      { name: "History", id: 36 },
      { name: "Horror", id: 27 },
      { name: "Music", id: 10402 },
      { name: "Mystery", id: 9648 },
      { name: "Romance", id: 10749 },
      { name: "Science Fiction", id: 878 },
      { name: "TV Movie", id: 10770 },
      { name: "Thriller", id: 53 },
      { name: "War", id: 10752 },
      { name: "Western", id: 37 },
    ],
  },
];

const languagesList = [
  {
    name: "Languages",
    id: 0,
    children: [
      { id: "aa", name: "Afar" },
      { id: "af", name: "Afrikaans" },
      { id: "ak", name: "Akan" },
      { id: "an", name: "Aragonese" },
      { id: "as", name: "Assamese" },
      { id: "av", name: "Avaric" },
      { id: "ae", name: "Avestan" },
      { id: "ay", name: "Aymara" },
      { id: "az", name: "Azerbaijani" },
      { id: "ba", name: "Bashkir" },
      { id: "bm", name: "Bambara" },
      { id: "bi", name: "Bislama" },
      { id: "bo", name: "Tibetan" },
      { id: "br", name: "Breton" },
      { id: "ca", name: "Catalan" },
      { id: "cs", name: "Czech" },
      { id: "ce", name: "Chechen" },
      { id: "cu", name: "Slavic" },
      { id: "cv", name: "Chuvash" },
      { id: "kw", name: "Cornish" },
      { id: "co", name: "Corsican" },
      { id: "cr", name: "Cree" },
      { id: "cy", name: "Welsh" },
      { id: "da", name: "Danish" },
      { id: "de", name: "German" },
      { id: "dv", name: "Divehi" },
      { id: "dz", name: "Dzongkha" },
      { id: "eo", name: "Esperanto" },
      { id: "et", name: "Estonian" },
      { id: "eu", name: "Basque" },
      { id: "fo", name: "Faroese" },
      { id: "fj", name: "Fijian" },
      { id: "fi", name: "Finnish" },
      { id: "fr", name: "French" },
      { id: "fy", name: "Frisian" },
      { id: "ff", name: "Fulah" },
      { id: "gd", name: "Gaelic" },
      { id: "ga", name: "Irish" },
      { id: "gl", name: "Galician" },
      { id: "gv", name: "Manx" },
      { id: "gn", name: "Guarani" },
      { id: "gu", name: "Gujarati" },
      { id: "ht", name: "Haitian; Haitian Creole" },
      { id: "ha", name: "Hausa" },
      { id: "sh", name: "Serbo-Croatian" },
      { id: "hz", name: "Herero" },
      { id: "ho", name: "Hiri Motu" },
      { id: "hr", name: "Croatian" },
      { id: "hu", name: "Hungarian" },
      { id: "ig", name: "Igbo" },
      { id: "io", name: "Ido" },
      { id: "ii", name: "Yi" },
      { id: "iu", name: "Inuktitut" },
      { id: "ie", name: "Interlingue" },
      { id: "ia", name: "Interlingua" },
      { id: "id", name: "Indonesian" },
      { id: "ik", name: "Inupiaq" },
      { id: "is", name: "Icelandic" },
      { id: "it", name: "Italian" },
      { id: "jv", name: "Javanese" },
      { id: "ja", name: "Japanese" },
      { id: "kl", name: "Kalaallisut" },
      { id: "kn", name: "Kannada" },
      { id: "ks", name: "Kashmiri" },
      { id: "kr", name: "Kanuri" },
      { id: "kk", name: "Kazakh" },
      { id: "km", name: "Khmer" },
      { id: "ki", name: "Kikuyu" },
      { id: "rw", name: "Kinyarwanda" },
      { id: "ky", name: "Kirghiz" },
      { id: "kv", name: "Komi" },
      { id: "kg", name: "Kongo" },
      { id: "ko", name: "Korean" },
      { id: "kj", name: "Kuanyama" },
      { id: "ku", name: "Kurdish" },
      { id: "lo", name: "Lao" },
      { id: "la", name: "Latin" },
      { id: "lv", name: "Latvian" },
      { id: "li", name: "Limburgish" },
      { id: "ln", name: "Lingala" },
      { id: "lt", name: "Lithuanian" },
      { id: "lb", name: "Letzeburgesch" },
      { id: "lu", name: "Luba-Katanga" },
      { id: "lg", name: "Ganda" },
      { id: "mh", name: "Marshall" },
      { id: "ml", name: "Malayalam" },
      { id: "mr", name: "Marathi" },
      { id: "mg", name: "Malagasy" },
      { id: "mt", name: "Maltese" },
      { id: "mo", name: "Moldavian" },
      { id: "mn", name: "Mongolian" },
      { id: "mi", name: "Maori" },
      { id: "ms", name: "Malay" },
      { id: "my", name: "Burmese" },
      { id: "na", name: "Nauru" },
      { id: "nv", name: "Navajo" },
      { id: "nr", name: "Ndebele" },
      { id: "nd", name: "Ndebele" },
      { id: "ng", name: "Ndonga" },
      { id: "ne", name: "Nepali" },
      { id: "nl", name: "Dutch" },
      { id: "nn", name: "Norwegian Nynorsk" },
      { id: "nb", name: "Norwegian Bokmål" },
      { id: "no", name: "Norwegian" },
      { id: "ny", name: "Chichewa; Nyanja" },
      { id: "oc", name: "Occitan" },
      { id: "oj", name: "Ojibwa" },
      { id: "or", name: "Oriya" },
      { id: "om", name: "Oromo" },
      { id: "os", name: "Ossetian; Ossetic" },
      { id: "pi", name: "Pali" },
      { id: "pl", name: "Polish" },
      { id: "pt", name: "Portuguese" },
      { id: "qu", name: "Quechua" },
      { id: "rm", name: "Raeto-Romance" },
      { id: "ro", name: "Romanian" },
      { id: "rn", name: "Rundi" },
      { id: "ru", name: "Russian" },
      { id: "sg", name: "Sango" },
      { id: "sa", name: "Sanskrit" },
      { id: "si", name: "Sinhalese" },
      { id: "sk", name: "Slovak" },
      { id: "sl", name: "Slovenian" },
      { id: "se", name: "Northern Sami" },
      { id: "sm", name: "Samoan" },
      { id: "sn", name: "Shona" },
      { id: "sd", name: "Sindhi" },
      { id: "so", name: "Somali" },
      { id: "st", name: "Sotho" },
      { id: "es", name: "Spanish" },
      { id: "sq", name: "Albanian" },
      { id: "sc", name: "Sardinian" },
      { id: "sr", name: "Serbian" },
      { id: "ss", name: "Swati" },
      { id: "su", name: "Sundanese" },
      { id: "sw", name: "Swahili" },
      { id: "sv", name: "Swedish" },
      { id: "ty", name: "Tahitian" },
      { id: "ta", name: "Tamil" },
      { id: "tt", name: "Tatar" },
      { id: "te", name: "Telugu" },
      { id: "tg", name: "Tajik" },
      { id: "tl", name: "Tagalog" },
      { id: "th", name: "Thai" },
      { id: "ti", name: "Tigrinya" },
      { id: "to", name: "Tonga" },
      { id: "tn", name: "Tswana" },
      { id: "ts", name: "Tsonga" },
      { id: "tk", name: "Turkmen" },
      { id: "tr", name: "Turkish" },
      { id: "tw", name: "Twi" },
      { id: "ug", name: "Uighur" },
      { id: "uk", name: "Ukrainian" },
      { id: "ur", name: "Urdu" },
      { id: "uz", name: "Uzbek" },
      { id: "ve", name: "Venda" },
      { id: "vi", name: "Vietnamese" },
      { id: "vo", name: "Volapük" },
      { id: "wa", name: "Walloon" },
      { id: "wo", name: "Wolof" },
      { id: "xh", name: "Xhosa" },
      { id: "yi", name: "Yiddish" },
      { id: "za", name: "Zhuang" },
      { id: "zu", name: "Zulu" },
      { id: "ab", name: "Abkhazian" },
      { id: "zh", name: "Mandarin" },
      { id: "ps", name: "Pushto" },
      { id: "am", name: "Amharic" },
      { id: "ar", name: "Arabic" },
      { id: "bg", name: "Bulgarian" },
      { id: "cn", name: "Cantonese" },
      { id: "mk", name: "Macedonian" },
      { id: "el", name: "Greek" },
      { id: "fa", name: "Persian" },
      { id: "he", name: "Hebrew" },
      { id: "hi", name: "Hindi" },
      { id: "hy", name: "Armenian" },
      { id: "en", name: "English" },
      { id: "ee", name: "Ewe" },
      { id: "ka", name: "Georgian" },
      { id: "pa", name: "Punjabi" },
      { id: "bn", name: "Bengali" },
      { id: "bs", name: "Bosnian" },
      { id: "ch", name: "Chamorro" },
      { id: "be", name: "Belarusian" },
      { id: "yo", name: "Yoruba" },
    ],
  },
];

export default Categories;

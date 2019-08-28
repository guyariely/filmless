import {Dimensions} from 'react-native';
const { height } = Dimensions.get('window');

const isSmallScreen = () => height <= 800;

export default isSmallScreen;

import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  seperator: {
    width: 20,
  },
  itemList: {
    width: screenWidth,
    height: screenHeight,
    padding: 5,
  },
});

export default styles;

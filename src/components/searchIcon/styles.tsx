import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  searchIcon: {
    marginEnd: 20,
    alignSelf: 'stretch',
  },
  searchBox: {
    height: 40,
    width: screenWidth - 50,
    marginEnd: 25,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
});

export default styles;

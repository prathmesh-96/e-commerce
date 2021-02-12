import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  dotContainer: {
    borderWidth: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  paggingStyle: {
    bottom: '-5%', //  bottom: '-8%',
    // backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  activeDotContainer: {
    backgroundColor: '#000',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  image: {
    width,
    flex: 1,
  },
});

export default styles;

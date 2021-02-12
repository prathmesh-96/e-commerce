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
    marginBottom: -20,
    borderColor: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  activeDotContainer: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -20,
  },
  image: {
    width,
    flex: 1,
  },
});

export default styles;

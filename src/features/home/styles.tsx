import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 5,
  },
  imageContainer: {
    flex: 4,
    marginBottom: '2%',
  },
  productsHeading: {
    paddingLeft: 10,
    height: 30,
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
  },
  cardHeight: {
    height: 180,
  },
  categoryCardHeight: {
    height: 100,
  },
});

export default styles;

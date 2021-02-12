import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productReviewContainer: {
    flex: 1,
    padding: 5,
  },
  reviewAndRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  reviewTextContainer: {
    flex: 1,
  },
  totalRatingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  totalRatingText: {
    textAlign: 'center',
  },
  titleText: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    justifyContent: 'space-around',
  },
  totalReviewCountContainer: {
    flex: 2,
    marginBottom: '3%',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#F1F1F1',
  },
  totalReviewCount: {
    fontSize: 11,
    color: '#d6d2c7',
  },
  userReviewContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  userReviewTextContainer: {
    flex: 1,
  },
  userNameAndRatingContainer: {
    flexDirection: 'row',
  },
  userName: {
    flex: 2,
    fontSize: 15,
  },
  userRatingContainer: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  userRatingText: {
    textAlign: 'center',
  },
  reviewsText: {
    fontSize: 14,
    color: '#959595',
    textAlign: 'justify',
  },

  listContainer: {
    marginStart: '2%',
  },
  seperator: {
    borderBottomColor: '#d6d2c7',
    borderBottomWidth: 1,
  },
  container: {
    alignSelf: 'stretch',
  },
  listContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  writeReviewText: {
    color: 'blue',
    flex: 1,
    alignSelf: 'flex-end',
    fontSize: 16,
    padding: '1%',
    margin: '1%',
  },

  mainContainer: {
    flexDirection: 'column',
    height: '100%',
  },

  snackbarContainer: {
    flex: 1,
    bottom: 0,
  },

  snackbarText: {
    fontSize: 20,
  },
});

export default styles;

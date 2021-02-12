import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productReviewContainer: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: '3%',
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
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.03,
    fontWeight: 'normal',
  },
  titleText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 19,
    justifyContent: 'space-around',
  },
  totalReviewCountContainer: {
    flex: 2,
    marginBottom: '3%',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#EEEEEE',
    paddingBottom: '1%',
  },
  totalReviewCount: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
    color: '#959595',
    letterSpacing: 0.03,
  },
  userReviewContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  userReviewTextContainer: {
    flex: 4,
  },
  userNameAndRatingContainer: {
    flexDirection: 'row',
    // alignContent:'space-between'
  },
  userRatingContainer: {
    flex: 3,
    // justifyContent:'center',
    // alignContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',
  },
  userRatingText: {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.03,
    fontWeight: 'normal',
  },
  reviewsText: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.03,
    color: '#959595',
    paddingLeft: '2%',
  },
  seeMoreButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
  },
  seeMoreText: {
    textAlign: 'center',
    color: '#959595',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
  },

  writeReviewContainer: {
    flexDirection: 'column',
  },

  writeReviewText: {
    color: 'blue',
    flex: 1,
    alignSelf: 'flex-end',
    fontSize: 14,
    paddingRight: '2%',
  },
  userName: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.03,
    alignSelf: 'flex-start',
    paddingLeft: '2%',
  },
});

export default styles;

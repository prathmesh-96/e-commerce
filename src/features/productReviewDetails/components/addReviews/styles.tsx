import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  mainContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    margin: '2%',
    backgroundColor: '#ffffff',
    padding: '2%',
  },

  ratingContainer: {
    flexDirection: 'row',
  },

  totalRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: '1%',
    padding: '2%',
  },
  totalRatingText: {
    textAlign: 'center',
  },

  addReviewText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 19,
    letterSpacing: 0.03,
    color: '#874F4F',
  },

  addressInputStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    height: 100,
    borderRadius: 5,
    margin: '1%',
    padding: '2%',
  },

  textStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.03,
    color: '#8F8F8F',
    textTransform: 'capitalize',
    textAlignVertical: 'top',
  },
  nextButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    height: 45,
    borderColor: '#000',
    margin: '3%',
    borderWidth: 1,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#DFDFDF',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25,
    textTransform: 'capitalize',
  },

  errorStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 15,
    color: 'red',
    paddingLeft: 10,
    paddingTop: 2,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },

  emptyContainer: {
    width: '96%',
    padding: '4%',
    backgroundColor: '#ffffff',
    shadowColor: '#959595',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  nextButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: '2%',
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#DFDFDF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 18,
  },

  textStyle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 15,
    color: '#874F4F',
    padding: '2%',
    alignSelf: 'center',
    marginTop: '1%',
    textTransform: 'capitalize',
  },
  bottomTextStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 15,
    color: '#959595',
    padding: '2%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  snackbarContainer: {
    justifyContent: 'space-between',
    bottom: '1%',
    width: '100%',
  },

  snackbarText: {
    fontSize: 20,
  },
});

export default styles;

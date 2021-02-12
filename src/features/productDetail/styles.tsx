import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f5f4',
  },
  imageContainer: {
    flex: 4,
    marginBottom: '2%',
  },
  productInfoContainer: {
    flex: 4,
    marginVertical: '3%',
  },
  similarOptionheading: {
    paddingLeft: 10,
    height: 30,
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
  },
  descriptionContainer: {
    flex: 4,
    borderBottomWidth: 1,
    marginHorizontal: '3%',
    paddingBottom: '6%',
  },
  infoText: {
    fontSize: 13,
  },
  addButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#d6d2c7',
    marginVertical: '3%',
    borderRadius: 5,
    height: 50,
  },
  addButtonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    fontStyle: 'normal',
    letterSpacing: 0.02,
  },
  buyButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    marginVertical: '2%',
    borderRadius: 5,
    height: 50,
  },
  buyButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    fontStyle: 'normal',
    letterSpacing: 0.02,
  },
  readViewContainer: {
    flex: 5,
    marginHorizontal: '3%',
  },
  buttonContainer: {
    flex: 4,
    marginHorizontal: '5%',
  },
  similarOptioncontainer: {
    flex: 3,
    marginHorizontal: '3%',
  },

  snackbarContainer: {
    flex: 1,
    justifyContent: 'space-between',
    bottom: '1%',
  },

  snackbarText: {
    fontSize: 20,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    padding: '2%',
    flexDirection: 'column',
    flexGrow: 1,
  },

  textInputStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    height: 50,
    padding: 10,
    borderRadius: 5,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '2%',
  },

  addressInputStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    height: 60,
    padding: 10,
    borderRadius: 5,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '2%',
  },

  textStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.03,
    color: '#8F8F8F',
    textTransform: 'capitalize',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '2%',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  textViewStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 15,
    color: '#8F8F8F',
    paddingLeft: 20,
  },
  nextButtonContainer: {
    width: 276,
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
    fontSize: 18,
    color: '#DFDFDF',
    fontStyle: 'normal',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    lineHeight: 25,
  },
  dropdownContainerStyle: {
    flex: 1,
    margin: '1%',
  },

  pickerContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: '2%',
  },

  pickerStyle: {
    color: '#8F8F8F',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  errorStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: 'red',
    paddingLeft: 10,
    paddingTop: 2,
  },
});

export default styles;

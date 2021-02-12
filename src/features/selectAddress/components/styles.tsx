import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layoutContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingBottom: 10,
  },

  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  checkBoxcontainer: {
    paddingTop: '2.5%',
  },
  mainContainer: {
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: '2%',
  },

  textDefault: {
    color: '#C7C7C7',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Open Sans',
    fontSize: 12,
    lineHeight: 16,
    alignSelf: 'flex-start',
  },
  textName: {
    color: '#874F4F',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
  },
  textAddress: {
    color: '#C7C7C7',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Open Sans',
    fontSize: 14,
    lineHeight: 19,
    marginTop: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  textButton: {
    color: '#874F4F',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
  },
  buttonBorder: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#874F4F',
    borderRadius: 5,
    alignContent: 'center',
  },

  checkbox: {
    alignSelf: 'center',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainconatiner: {
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  textconatiner: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: '#E5E5E5',
    padding: 10,
  },

  textKeyStyle: {
    fontWeight: '300',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0.03,
    color: '#261815',
    paddingLeft: 5,
  },
  textValueStyle: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0.03,
    color: '#874F4F',
    textTransform: 'capitalize',
  },

  orderconatiner: {
    marginTop: '0.5%',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  informationconatiner: {
    marginTop: '1%',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#E5E5E5',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { FontSizes } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: 'black',
    padding: 20,
  },
  helloText: {
    color: 'white',
    fontSize: FontSizes.LARGE,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginText: {
    color: 'white',
    fontSize: FontSizes.SMALL,
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  drawerSection: {
    padding: 20,
  },

  labelNameStyle: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0.04,
  },
});

export default styles;

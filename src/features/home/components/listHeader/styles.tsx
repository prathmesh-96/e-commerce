import { StyleSheet } from 'react-native';
import { FontSizes } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    height: 30,
    paddingHorizontal: '2%',
    marginVertical: '2%',
  },
  headerText: {
    fontWeight: '700',
    fontSize: FontSizes.LARGE,
    letterSpacing: 1,
  },
});

export default styles;

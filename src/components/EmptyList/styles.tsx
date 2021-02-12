import { StyleSheet } from 'react-native';
import { Colors, FontSizes } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  noData: {
    color: Colors.GREY_NO_CONTENT_COLOR,
    textAlign: 'center',
    fontSize: FontSizes.LARGE,
  },
});

export default styles;

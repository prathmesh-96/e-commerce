import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  quantityText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    letterSpacing: 0.03,
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  plusButtonContainer: {
    flex: 4,
  },
  quantityCountText: {
    flex: 0.5,
    fontSize: 17,
  },
  minusButtonContainer: {
    flex: 0.7,
  },
});

export default styles;

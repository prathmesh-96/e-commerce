import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productDescriptionContainer: {
    flex: 1,
    borderBottomColor: 'black',
  },
  descriptionContainer: {
    flex: 1,
    marginBottom: '3%',
  },
  materialContainer: {
    flex: 1,
  },
  colorContainer: {
    flex: 1,
  },
  dimensionContainer: {
    flex: 1,
  },
  packageContainer: {
    flex: 1,
  },
  descriptionTitleText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    lineHeight: 19,
  },
  titleText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    justifyContent: 'space-around',
  },
  infoText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
});

export default styles;

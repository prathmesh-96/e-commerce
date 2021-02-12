import { StyleSheet, Dimensions } from 'react-native';
const imageWidth = Math.round(Dimensions.get('window').width) / 3;
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 250,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    width: (screenWidth - 25) / 2,
    margin: 4,
  },
  productImage: {
    height: 120,
    width: imageWidth,
    marginLeft: 10,
  },
  title: {
    color: '#418B8B',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.03,
    alignSelf: 'stretch',
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingLeft: '5%',
  },
  lineBreak: {
    fontSize: 4,
  },
  lineBreak1: {
    fontSize: 8,
  },
  price: {
    flexDirection: 'row',
  },
  savings: {
    flexDirection: 'row',
    paddingLeft: '5%',
  },
  discountPrice: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.03,
    fontWeight: '600',
    fontStyle: 'normal',
    paddingLeft: '5%',
  },
  originalPrice: {
    color: '#BDBAB9',
    fontSize: 14,
    textDecorationLine: 'line-through',
    textAlignVertical: 'center',
    lineHeight: 15,
    letterSpacing: 0.03,
  },
  save: {
    color: '#BDBAB9',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  discount: {
    color: 'indianred',
    fontSize: 12,
  },
  discountBraces: {
    fontSize: 12,
  },
});

export default styles;

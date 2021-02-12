import { StyleSheet, Dimensions } from 'react-native';
const imageWidth = Math.round(Dimensions.get('window').width) / 3;

const styles = StyleSheet.create({
  productSearchCardcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '3%',
    marginVertical: '1%',
    paddingVertical: '1%',
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: imageWidth,
    height: 135,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: '3%',
  },
  productInfoMainContainer: {
    flex: 1,
  },
  ratingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 1.5,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.03,
    color: '#418B8B',
    textTransform: 'uppercase',
  },
  productDetailContainer: {
    flex: 0.5,
  },
  productDetailText: {
    fontSize: 14,
    color: '#418B8B',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
  },
  productInfoContainer: {
    flex: 0.5,
  },
  productInfoText: {
    fontSize: 14,
    color: '#418B8B',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
  },
  productPriceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    fontStyle: 'normal',
    letterSpacing: 0.03,
  },
  totalPriceText: {
    fontSize: 11,
    letterSpacing: 0.03,
    lineHeight: 15,
    color: '#BDBAB9',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  productDiscountContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  discountText: {
    flex: 1,
    color: '#C80000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 15,
    letterSpacing: 0.03,
  },
  totalDiscountText: {
    flex: 2.5,
    fontSize: 12,
    color: '#BDBAB9',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 15,
    letterSpacing: 0.03,
  },
  discountBraces: {
    fontSize: 12,
  },
});

export default styles;

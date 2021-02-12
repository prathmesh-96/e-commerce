import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productInfoMainContainer: {
    flex: 1,
  },
  productNameContainer: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  productCompanyNameAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%',
  },
  companyNameContainer: {
    flex: 2,
  },
  companyNameText: {
    fontSize: 15,
  },
  ratingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  productNameChildContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  productDetailContainer: {
    flex: 1,
  },
  productDetailText: {
    fontSize: 16,
    color: 'black',
    marginTop: '3%',
    fontWeight: 'bold',
    justifyContent: 'space-around',
    lineHeight: 19,
  },
  productContianer: {
    marginHorizontal: '3%',
    borderBottomWidth: 1,
    paddingBottom: '3%',
  },
  productInfoContainer: {
    flex: 1,
  },
  productInfoText: {
    fontSize: 12,
    color: 'black',
    marginTop: '1%',
  },
  productPriceContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  productDiscountPriceText: {
    flex: 2,
    fontSize: 20,
    lineHeight: 35,
    letterSpacing: 0.03,
  },
  productOriginalPriceText: {
    flex: 2,
    fontSize: 16,
    color: '#BDBAB9',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    lineHeight: 20,
    letterSpacing: 0.03,
  },
  offerText: {
    flex: 7,
    flexDirection: 'row',
  },
  discountText: {
    flex: 1,
    color: '#C80000',
    fontSize: 12,
    letterSpacing: 0.03,
  },
  totalDiscountText: {
    flex: 6,
    fontSize: 12,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '1%',
  },
  quantityText: {
    flex: 1,
    fontSize: 17,
  },
  buttonContainer: {
    flex: 3,
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

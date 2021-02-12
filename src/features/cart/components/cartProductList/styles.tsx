import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  scrollViewcontainer: {
    alignSelf: 'stretch',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: '#e5e5e5',
  },
  itemList: {
    width: screenWidth,
  },
  input: {
    margin: 15,
    height: 45,
    width: 200,
    fontSize: 16,
    textAlign: 'center',
    borderColor: '#c4c4c4',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
  },
  bottomText: {
    flex: 3,
    color: '#959595',
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 18,
  },
  bottomFlex: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-around',
  },
  bottomAmount: {
    color: '#929292',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.03,
  },
  bottomDiscountAmt: {
    color: '#959595',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 18,
  },
  coupon: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  iconStyle: {
    flex: 0.2,
  },
  applyCoupon: {
    flex: 1,
    color: '#874F4F',
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  textInputStyle: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    height: 35,
    width: 165,
    borderRadius: 5,
  },
  couponText: {
    fontSize: 12,
    borderColor: '#8F8F8F',
    lineHeight: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  total: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
  },
  totalText: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 20,
    padding: '2%',
    lineHeight: 30,
    fontStyle: 'normal',
    color: '#261815',
  },
  totalAmt: {
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'right',
    padding: 10,
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.03,
    color: '#0F9D58',
    fontStyle: 'normal',
  },

  nextButtonContainer: {
    width: 276,
    alignSelf: 'center',
    backgroundColor: '#261815',
    borderRadius: 10,
    height: 45,
    borderColor: '#000',
    margin: '3%',
    borderWidth: 1,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    lineHeight: 25,
  },
});

export default styles;

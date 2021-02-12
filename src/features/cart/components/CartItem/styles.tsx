import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    backgroundColor: 'white',
    width: screenWidth,
    marginTop: '2%',
  },
  productCard: {
    flexDirection: 'row',
  },
  imageFlex: {
    flex: 1,
  },
  image: {
    marginTop: '20%',
    marginLeft: '10%',
    width: 80,
    height: 90,
  },
  blankSpace: {
    fontSize: 3,
  },
  amount: {
    flex: 0.8,
  },
  productDetails: {
    flex: 2.2,
    marginLeft: '2%',
    marginTop: '5%',
  },
  // company: {
  //   fontSize: 10,
  //   fontWeight: '500',
  //   lineHeight: 15,
  //   color: '#261815',
  //   fontStyle: 'normal',
  // },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 19,
    color: '#261815',
  },
  // productInfo: {
  //   fontSize: 10,
  //   fontWeight: 'normal',
  //   lineHeight: 15,
  //   color: '#959595',
  //   fontStyle: 'normal',
  // },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 0,
    height: 30,
  },
  quantity: {
    color: '#959595',
    fontSize: 15,
    marginBottom: 20,
  },
  buttonIncDec: {
    marginLeft: '5%',
    alignSelf: 'stretch',
  },
  count: {
    fontSize: 18,
    marginLeft: 10,
  },
  price: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 15,
    marginTop: 20,
    color: '#929292',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0.03,
  },
  discount: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 15,
    color: '#E90707',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0.03,
  },
  line: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 15,
    color: '#959595',
    fontSize: 5,
  },
  salePrice: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 15,
    color: '#0F9D58',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25,
    letterSpacing: 0.03,
  },
  delete: {
    textDecorationLine: 'underline',
    color: '#959595',
    fontSize: 12,
  },
});

export default styles;

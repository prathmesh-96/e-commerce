import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    height: 100,
    shadowColor: '#E5E5E5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    margin: 2,
    paddingLeft: '3%',
    paddingRight: '3%',
  },

  imageStyle: {
    width: 55,
    height: 70,
    alignSelf: 'center',
  },

  productNameStyle: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#261815',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  productPriceStyle: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#261815',
    textAlign: 'right',
    letterSpacing: 0.03,
    alignSelf: 'center',
  },
  productQuantityStyle: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '600',
    color: '#261815',
    textAlign: 'right',
    letterSpacing: 0.03,
  },
  quantityContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewStyle: {
    flexGrow: 1,
  },
  maincontainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    padding: '2%',
  },
  container: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  orderhistory: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flex: 6,
  },

  heading: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 27,
    color: '#874F4F',
    fontWeight: 'bold',
    padding: '2%',
    flex: 1,
    alignSelf: 'center',
  },
  textNameStyle: {
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#767676',
    fontWeight: 'normal',
    padding: '2%',
    flex: 1,
  },
  addressStyle: {
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#767676',
    fontWeight: 'normal',
    padding: '2%',
    flex: 1,
  },

  shopMoreView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    bottom: 10,
    flex: 1,
  },

  shopMoreContainer: {
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
    height: 45,
    borderColor: '#000',
    margin: '3%',
    borderWidth: 1,
  },
  shopMoreText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#DFDFDF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 25,
    textTransform: 'capitalize',
  },

  orderdetailContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;

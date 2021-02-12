import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
  },
  addNewAddressconatiner: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    top: 10,
    flex: 1,
  },
  paymentcontainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    bottom: 10,
    flex: 1,
  },
  addresscontainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flex: 6,
    marginTop: '2%',
  },
  addButtonContainer: {
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
  },
  addButtonText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#DFDFDF',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
  },
  paymentButtonContainer: {
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
  },
  paymentButtonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#DFDFDF',
    fontStyle: 'normal',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    lineHeight: 25,
  },
  addressConatiner: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'absolute',
    padding: 10,
  },
});

export default styles;

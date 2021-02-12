import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 27,
    color: '#874F4F',
    fontWeight: 'bold',
    padding: '2%',
  },
  shipping: {
    backgroundColor: 'white',
    padding: 20,
  },
  shippingFirstLine: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  shippingTo: {
    color: '#874F4F',
    fontSize: 16,
    paddingLeft: 8,
  },
  name: {
    color: '#874F4F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  shippingAddress: {
    fontSize: 16,
    paddingLeft: 40,
  },
  delivery: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 55,
    marginTop: 10,
    padding: 10,
  },
  deliveryBy: {
    fontSize: 20,
    color: '#874F4F',
  },
  deliveryDate: {
    fontSize: 20,
    color: '#188436',
  },
  order: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  amountText: {
    color: '#874F4F',
    fontSize: 16,
    flex: 3,
    textAlign: 'left',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  amountValue: {
    color: '#929292',
    fontSize: 16,
  },
  amount: {
    flexDirection: 'row',
    padding: 2,
    paddingLeft: 40,
  },
  amountFirstLine: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  totalAmount: {
    fontSize: 16,
    color: '#31AA52',
  },
  paymentMethod: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  method: {
    color: '#874F4F',
    fontSize: 16,
    paddingLeft: 8,
  },
  debitCard: {
    color: '#874F4F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    color: '#874F4F',
    fontSize: 16,
    paddingLeft: 45,
  },
  expiry: {
    color: '#929292',
    fontSize: 16,
    paddingLeft: 45,
  },
  confirmOrder: {
    textAlign: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    margin: 30,
    color: 'white',
  },
  confirmOrderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default styles;

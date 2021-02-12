import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { ScreenNames } from '../../constants';
import AddressListCard from './components/AddressListCard';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { AppState } from '../../redux/reducer';
import { connect, ConnectedProps } from 'react-redux';
import { getCustmerInformation } from '../selectAddress/redux/actionCreators/selectAddresses';
import Loader from '../../components/loader';
import PlaceOrder from '../../types/PlaceOrder';
import { getCustomer } from '../../utils';
import CustomerInfo from '../../types/CustomerInfo';
// import { postOrder } from '../selectAddress/redux/actionCreators/payment'

const mapState = (state: AppState) => ({
  customerInfoDetails: state.selectAddress.selectAddressReducer.customerDetails,
  isLoading: state.selectAddress.selectAddressReducer.isLoading,
  orderDetails: state.selectAddress.paymentReducer.placeorder,
});

const mapDispatch = {
  getCustmerInformation: (customerId) => getCustmerInformation(customerId),
  // postOrder: placeOrderDetails => postOrder(placeOrderDetails),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
const SelectAddress: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { customerInfoDetails, isLoading } = props;
  const navigation = useNavigation();
  const route = useRoute();
  const { order, cartTotalAmt, shippingTotal, taxTotal, screenName } = route.params;

  const getSavedCustomer = async () => {
    const savedCustomer: CustomerInfo = await getCustomer();
    console.log('user id ==', savedCustomer.id);
    props.getCustmerInformation(savedCustomer.id);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSavedCustomer();
    });
    return unsubscribe;
  }, []);

  const addAddress = () => navigation.navigate(ScreenNames.AddNewAddress);

  const proceedToPayment = () => {
    let placeorder: PlaceOrder = {
      payment_method: 'bacs',
      payment_method_title: 'Direct Bank Transfer',
      set_paid: true,
      line_items: order.line_items,
      customer_id: customerInfoDetails.id,
      billing: customerInfoDetails.billing,
      shipping: customerInfoDetails.shipping,
    };
    console.log(placeorder);
    navigation.navigate(ScreenNames.SummaryScreen, {
      finalOrder: placeorder,
      cartTotalAmt: cartTotalAmt,
      shippingTotal: shippingTotal,
      taxTotal: taxTotal,
      screenName: screenName,
    });
    // props.postOrder(placeorder)
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <View style={styles.addresscontainer}>
            {customerInfoDetails ? (
              <AddressListCard customerInfoDetails={customerInfoDetails} />
            ) : (
              <View style={styles.addNewAddressconatiner}>
                <Button
                  color="#fff"
                  onPress={() => addAddress()}
                  mode="contained"
                  labelStyle={styles.addButtonText}
                  style={styles.addButtonContainer}
                >
                  Add New Address
                </Button>
              </View>
            )}
          </View>
        )}
        <View style={styles.paymentcontainer}>
          <Button
            color="#fff"
            onPress={() => proceedToPayment()}
            mode="contained"
            labelStyle={styles.paymentButtonText}
            style={styles.paymentButtonContainer}
          >
            Proceed to Payment
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connector(SelectAddress);

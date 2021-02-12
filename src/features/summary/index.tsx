import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppState } from '../../redux/reducer';
import { connect, ConnectedProps } from 'react-redux';
import { postOrder } from '../selectAddress/redux/actionCreators/payment';

const mapState = (state: AppState) => ({
  orderDetails: state.selectAddress.paymentReducer.placeorder,
});

const mapDispatch = {
  postOrder: (placeOrderDetails, screenName) => postOrder(placeOrderDetails, screenName),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Summary: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const route = useRoute();
  const { finalOrder, cartTotalAmt, shippingTotal, taxTotal, screenName } = route.params;
  let items_total = cartTotalAmt;
  if (screenName === 'BuyNow') {
    items_total = cartTotalAmt * finalOrder.line_items[0].quantity;
  }
  const { shipping } = finalOrder;
  const { first_name, last_name, address_1, city, state, postcode } = shipping;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>ORDER DETAILS</Text>
        </View>
        <View style={styles.shipping}>
          <View style={styles.shippingFirstLine}>
            <FontAwesome5 name="shipping-fast" color="#874F4F" size={20} />
            <Text style={styles.shippingTo}> Shipping to:</Text>
            <Text style={styles.name}>
              {first_name} {last_name}
            </Text>
          </View>

          <Text style={styles.shippingAddress}>
            {address_1}, {city},{state}, {postcode}
          </Text>
        </View>
        {/* <View style={styles.delivery}>
          <Text style={styles.deliveryBy}>Delivery by:</Text>
          <Text style={styles.deliveryDate}> 31 July 2020</Text>
        </View> */}

        <View style={styles.order}>
          <View style={styles.amountFirstLine}>
            <MaterialCommunityIcons name="cash-multiple" color="#874F4F" size={25} />
            <Text style={styles.amountText}> Items total: </Text>
            <Text style={styles.amountValue}>
              {' '}
              {'\u20B9'}
              {items_total}
            </Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountText}>Tax: </Text>
            <Text style={styles.amountValue}>
              {' '}
              {'\u20B9'}
              {taxTotal}
            </Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountText}>Delivery charges: </Text>
            <Text style={styles.amountValue}>
              {' '}
              {'\u20B9'}
              {shippingTotal}
            </Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountText}>Order Total: </Text>
            <Text style={styles.totalAmount}>
              {' '}
              {'\u20B9'}
              {items_total}
            </Text>
          </View>
        </View>

        <View style={styles.paymentMethod}>
          <View style={styles.amountFirstLine}>
            <MaterialIcons name="payment" color="#874F4F" size={25} />
            <Text style={styles.method}>Payment method:</Text>
            <Text style={styles.debitCard}> Debit Card</Text>
          </View>
          <Text style={styles.card}>Card ****8940</Text>
          <Text style={styles.expiry}>Expires 04/2025</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.confirmOrder}
            onPress={() => props.postOrder(finalOrder, screenName)}
          >
            <Text style={styles.confirmOrderText}>CONFIRM ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default connector(Summary);

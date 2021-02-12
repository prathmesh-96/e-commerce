import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from './styles';
import OrderHistory from '../../../../types/OrderHistory';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants';

export interface orderItem {
  orderHistoryitem: OrderHistory;
}

const OrderItem: React.FC<orderItem> = (orderHistory1: orderItem) => {
  const { orderHistoryitem } = orderHistory1;
  const { status, number, total, line_items, date_created } = orderHistoryitem;
  const navigation = useNavigation();
  const orderDetails = () =>
    navigation.navigate(ScreenNames.OrderDetails, { item: orderHistoryitem });
  const moment = require('moment');
  let orderDate = moment(date_created);

  const statusFunction = () => {
    switch (status) {
      case 'processing':
      case 'pending':
      case 'payment pending':
      case 'shipped':
        return {
          color: '#ffbf00',
        };
      case 'completed':
      case 'refunded':
      case 'delivered':
        return {
          color: '#31AA52',
        };
      case 'cancelled':
      case 'failed':
      case 'trashed':
        return {
          color: '#DF3A2F',
        };
      case 'on-hold':
        return {
          color: '#0099ff',
        };
      default:
        return {
          color: '#000000',
        };
    }
  };

  return (
    <TouchableOpacity onPress={orderDetails}>
      <View style={Styles.container}>
        <View style={Styles.orderCard}>
          <Text style={[statusFunction(), Styles.status]}>{status}</Text>
          {status === 'delivered' || status === 'completed' ? (
            <Text style={[statusFunction(), Styles.date]}>
              {orderDate.subtract(10, 'days').calendar()}
            </Text>
          ) : (
            <View />
          )}
        </View>

        <View style={Styles.orderCard}>
          <Text style={Styles.orderText}>Order number:</Text>
          <Text style={Styles.orderValue}>{number}</Text>
        </View>
        <View style={Styles.orderCard}>
          <Text style={Styles.orderText}>Order total:</Text>
          <Text style={Styles.orderValue}>
            {' '}
            {'\u20B9'} {total}
          </Text>
        </View>
        <Text style={Styles.orderText}>{line_items.length} items</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

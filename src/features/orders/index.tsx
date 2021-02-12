import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import InformationCard from './components/Information/informationCard';
import DeliveredProductList from './components/deliveredProductList';
import { useRoute } from '@react-navigation/native';

const OrderDetails: React.FC = () => {
  const route = useRoute();
  const { item } = route.params;
  const { date_created, number, total, billing, status, line_items } = item;
  const { address_1, city, state, postcode, country, email, phone } = billing;
  const addressline1 = address_1 + ' , ' + city;
  const addressline2 = state + ' ' + postcode + ' ,' + country;
  const deliveryStatus = 'Status: ' + status;
  const moment = require('moment');
  let orderDate = moment(date_created);
  const date = 'Delivery Date: ' + orderDate.subtract(10, 'days').calendar();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainconatiner}>
          <View style={styles.textconatiner}>
            <Text style={styles.textKeyStyle}>
              Date: <Text style={styles.textValueStyle}>{orderDate.format('Do MMMM yyyy')}</Text>
            </Text>
            <Text style={styles.textKeyStyle}>
              Order number: <Text style={styles.textValueStyle}>{number}</Text>
            </Text>
            <Text style={styles.textKeyStyle}>
              Order total:{' '}
              <Text style={styles.textValueStyle}>
                {'\u20B9'}
                {total}
              </Text>
            </Text>
          </View>
          <View style={styles.orderconatiner}>
            <DeliveredProductList orderProductDetails={line_items} />
          </View>
          <View style={styles.informationconatiner}>
            <InformationCard
              name="BILLING ADDRESS"
              image="map-marker-radius-outline"
              addressLine_1={addressline1}
              addressLine_2={addressline2}
            />
          </View>
          <View style={styles.informationconatiner}>
            <InformationCard
              name="DELIVERY DETAILS"
              image="cart"
              addressLine_1={date}
              addressLine_2={deliveryStatus}
            />
          </View>
          <View style={styles.informationconatiner}>
            <InformationCard
              name="CONTACT DETAILS"
              image="phone-forward"
              addressLine_1={phone}
              addressLine_2={email}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;

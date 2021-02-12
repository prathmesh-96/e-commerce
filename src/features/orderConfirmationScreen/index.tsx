import React, { useEffect } from 'react';
import { View, Text, ScrollView, BackHandler } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import OrderItem from '../orderHistory/components/orderCard';
import { ScreenNames } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OrderConfirmationScreen: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const { data } = props.route.params;
  const { shipping, line_items } = data;
  const { first_name, last_name, address_1, city, state, country, postcode } = shipping;
  let item_count = line_items.length;

  // to handle back button of android phone
  function handleBackButtonClick() {
    //go to home screen directly
    navigation.navigate(ScreenNames.HomeScreen);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewStyle}>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>Thank you for shopping with us</Text>
          <Text style={styles.textNameStyle}>
            {item_count} item(s) will be shipped to : {first_name} {last_name}
          </Text>
          <Text style={styles.addressStyle}>
            {address_1}, {city}, {state}, {country}, {postcode}
          </Text>
          <View style={styles.orderdetailContainer}>
            <MaterialIcons name="check" size={25} color="#188436" />
            <Text style={styles.addressStyle}>Order Details:</Text>
          </View>
          <View style={styles.orderhistory}>
            <OrderItem orderHistoryitem={data} />
          </View>
        </View>
        <View style={styles.shopMoreView}>
          <Button
            color="#fff"
            onPress={() => navigation.push(ScreenNames.HomeScreen)}
            mode="contained"
            labelStyle={styles.shopMoreText}
            style={styles.shopMoreContainer}
          >
            Shop More
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderConfirmationScreen;

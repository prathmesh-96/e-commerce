import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Button, Checkbox } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../constants';
import CustomerInfo from '../../../types/CustomerInfo';

export interface customerDetails {
  customerInfoDetails: CustomerInfo;
}
const AddressListCard: React.FC<customerDetails> = (props: customerDetails) => {
  const [checked, setChecked] = React.useState(true);

  const { customerInfoDetails } = props;

  const navigation = useNavigation();
  const edit = () => {
    navigation.navigate(ScreenNames.AddNewAddress, {
      customerShippingAddress: customerInfoDetails.shipping,
    });
  };

  return customerInfoDetails ? (
    <SafeAreaView>
      <View style={styles.layoutContainer}>
        <View style={styles.container}>
          <View style={styles.checkBoxcontainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              disabled={true}
              color={'#000000'}
            />
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.textDefault}>(Default)</Text>
            <Text style={styles.textName}>
              {customerInfoDetails.shipping.first_name} {customerInfoDetails.shipping.last_name}
            </Text>
            {customerInfoDetails.shipping.address_2 ? (
              <Text style={styles.textAddress}>
                {customerInfoDetails.shipping.address_1},{'\n'}
                {customerInfoDetails.shipping.address_2},{'  '}
                {customerInfoDetails.shipping.city},{'  '}
                {customerInfoDetails.shipping.state}, {'  '}
                {customerInfoDetails.shipping.postcode}
              </Text>
            ) : (
              <Text style={styles.textAddress}>
                {customerInfoDetails.shipping.address_1},{'  '} {customerInfoDetails.shipping.city},
                {'  '}
                {customerInfoDetails.shipping.state}, {'  '}
                {customerInfoDetails.shipping.postcode}
              </Text>
            )}
            <View style={styles.buttonContainer}>
              <Button
                color="#000"
                onPress={() => edit()}
                mode="outlined"
                labelStyle={styles.textButton}
                style={styles.buttonBorder}
              >
                Edit
              </Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  ) : null;
};

export default AddressListCard;

import React from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button } from 'react-native-paper';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useRoute } from '@react-navigation/native';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { setpostCustomerInformation } from '../addNewAddress/redux/actionCreator/shippingAddress';
import stateListJson from '../../jsonFiles/stateList';
import { getCustomer } from '../../utils';
import CustomerInfo from '../../types/CustomerInfo';

const mapState = (state: AppState) => ({
  customerShippingAddressDetails:
    state.shippingAddress.shippingAddressReducer.customerShippingAddress,
});

const mapDispatch = {
  setpostCustomerInformation: (customerId, customerShippingAddressDetails) =>
    setpostCustomerInformation(customerId, customerShippingAddressDetails),
};

const connector = connect(mapState, mapDispatch);

const validationSchema = yup.object().shape({
  first_name: yup.string().required('First Name is Required').label('firstName'),
  last_name: yup.string().required('Last Name is Required').label('lastName'),
  address_1: yup.string().required('Address Line 1 is Required').label('addressLine1'),
  address_2: yup.string().label('addressLine2'),
  postcode: yup.string().required('Pin Code is Required').label('pincode'),
  city: yup.string().required('City is Required').label('city'),
  state: yup.string().required('State is Required').label('state'),
});

type PropsFromRedux = ConnectedProps<typeof connector>;

const AddNewAddress: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const route = useRoute();
  var customerAddress = '';
  var address_1 = '';
  var address_2 = '';
  var city = '';
  var company = '';
  var country = '';
  var first_name = '';
  var last_name = '';
  var postcode = '';
  var state = '';
  let districtArray = ['Select City'];

  const getDistricts = (selectedState) => {
    stateListJson
      .filter(function (item) {
        return item.state === selectedState;
      })
      .map(function ({ districts }) {
        if (districts !== null) {
          districtArray = districts;
        }
        return { districts };
      });
  };
  const getSavedCustomer = async (info) => {
    const savedCustomer: CustomerInfo = await getCustomer();
    props.setpostCustomerInformation(savedCustomer.id, info);
  };

  if (route.params) {
    customerAddress = route.params.customerShippingAddress;
    address_1 = customerAddress.address_1;
    address_2 = customerAddress.address_2;
    city = customerAddress.city;
    state = customerAddress.state;
    getDistricts(state);
    company = customerAddress.company;
    country = customerAddress.country;
    first_name = customerAddress.first_name;
    last_name = customerAddress.last_name;
    postcode = customerAddress.postcode;
  }
  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          first_name,
          last_name,
          address_1,
          address_2,
          postcode,
          city,
          state,
          company,
          country,
        }}
        onSubmit={(values) => {
          const info = {
            shipping: values,
          };
          console.log(info);
          getSavedCustomer(info);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <React.Fragment>
            <ScrollView style={styles.container}>
              <View>
                <View style={styles.nameContainer}>
                  <View style={styles.dropdownContainerStyle}>
                    {route.params ? (
                      <TextInput
                        defaultValue={first_name}
                        style={[styles.textInputStyle, styles.textStyle]}
                        keyboardType="name-phone-pad"
                        onChangeText={() => formikProps.setFieldValue('first_name', first_name)}
                      />
                    ) : (
                      <TextInput
                        placeholder="First Name"
                        style={[styles.textInputStyle, styles.textStyle]}
                        keyboardType="name-phone-pad"
                        onChangeText={formikProps.handleChange('first_name')}
                      />
                    )}
                    <Text style={styles.errorStyle}>{formikProps.errors.first_name}</Text>
                  </View>
                  <View style={styles.dropdownContainerStyle}>
                    {route.params ? (
                      <TextInput
                        defaultValue={last_name}
                        style={[styles.textInputStyle, styles.textStyle]}
                        keyboardType="name-phone-pad"
                        onChangeText={formikProps.handleChange('last_name')}
                      />
                    ) : (
                      <TextInput
                        placeholder="Last Name"
                        style={[styles.textInputStyle, styles.textStyle]}
                        keyboardType="name-phone-pad"
                        onChangeText={formikProps.handleChange('last_name')}
                      />
                    )}
                    <Text style={styles.errorStyle}>{formikProps.errors.last_name}</Text>
                  </View>
                </View>
                {route.params ? (
                  <TextInput
                    defaultValue={address_1}
                    style={[styles.addressInputStyle, styles.textStyle]}
                    keyboardType="name-phone-pad"
                    onChangeText={formikProps.handleChange('address_1')}
                    multiline={true}
                    numberOfLines={2}
                  />
                ) : (
                  <TextInput
                    placeholder="Address Line 1"
                    style={[styles.addressInputStyle, styles.textStyle]}
                    keyboardType="name-phone-pad"
                    onChangeText={formikProps.handleChange('address_1')}
                    multiline={true}
                    numberOfLines={2}
                  />
                )}
                <Text style={styles.errorStyle}>{formikProps.errors.address_1}</Text>
                {route.params && address_2 !== '' ? (
                  <TextInput
                    defaultValue={address_2}
                    style={[styles.addressInputStyle, styles.textStyle]}
                    keyboardType="name-phone-pad"
                    onChangeText={formikProps.handleChange('address_2')}
                    multiline={true}
                    numberOfLines={2}
                  />
                ) : (
                  <TextInput
                    placeholder="Address Line 2"
                    style={[styles.addressInputStyle, styles.textStyle]}
                    keyboardType="name-phone-pad"
                    onChangeText={formikProps.handleChange('address_2')}
                    multiline={true}
                    numberOfLines={2}
                  />
                )}
                {route.params ? (
                  <TextInput
                    value={postcode}
                    style={[styles.textInputStyle, styles.textStyle]}
                    keyboardType="number-pad"
                    onChangeText={formikProps.handleChange('postcode')}
                  />
                ) : (
                  <TextInput
                    placeholder="Pin Code"
                    style={[styles.textInputStyle, styles.textStyle]}
                    keyboardType="number-pad"
                    onChangeText={formikProps.handleChange('postcode')}
                  />
                )}
                <Text style={styles.errorStyle}>{formikProps.errors.postcode}</Text>

                <View style={styles.listContainer}>
                  <View style={styles.dropdownContainerStyle}>
                    {route.params ? (
                      <Picker
                        mode="dialog"
                        itemStyle={styles.textStyle}
                        style={styles.pickerStyle}
                        selectedValue={formikProps.values.state || state}
                        onValueChange={(itemValue) => {
                          formikProps.setFieldValue('state', itemValue);
                          getDistricts(itemValue);
                        }}
                      >
                        {stateListJson.map((item, index) => {
                          return <Picker.Item label={item.state} value={item.state} key={index} />;
                        })}
                      </Picker>
                    ) : (
                      <Picker
                        mode="dialog"
                        itemStyle={styles.textStyle}
                        style={styles.pickerStyle}
                        selectedValue={formikProps.values.state}
                        onValueChange={(itemValue) => {
                          formikProps.setFieldValue('state', itemValue);
                          getDistricts(itemValue);
                        }}
                      >
                        {stateListJson.map((item, index) => {
                          return <Picker.Item label={item.state} value={item.state} key={index} />;
                        })}
                      </Picker>
                    )}
                    <Text style={styles.errorStyle}>{formikProps.errors.state}</Text>
                  </View>

                  <View style={styles.dropdownContainerStyle}>
                    {route.params ? (
                      <Picker
                        mode="dialog"
                        itemStyle={styles.textStyle}
                        style={styles.pickerStyle}
                        selectedValue={formikProps.values.city || city}
                        onValueChange={(itemValue) => formikProps.setFieldValue('city', itemValue)}
                      >
                        {districtArray.map((item, index) => {
                          return <Picker.Item label={item} value={item} key={index} />;
                        })}
                      </Picker>
                    ) : (
                      <Picker
                        mode="dialog"
                        itemStyle={styles.textStyle}
                        style={styles.pickerStyle}
                        selectedValue={formikProps.values.city}
                        onValueChange={(itemValue) => formikProps.setFieldValue('city', itemValue)}
                      >
                        {districtArray.map((item, index) => {
                          return <Picker.Item label={item} value={item} key={index} />;
                        })}
                      </Picker>
                    )}
                    <Text style={styles.errorStyle}>{formikProps.errors.city}</Text>
                  </View>
                </View>
                <View>
                  <Button
                    color="#fff"
                    onPress={formikProps.handleSubmit}
                    mode="contained"
                    labelStyle={styles.nextButtonText}
                    style={styles.nextButtonContainer}
                  >
                    Next
                  </Button>
                </View>
              </View>
            </ScrollView>
          </React.Fragment>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default connector(AddNewAddress);

import AsyncStorage from '@react-native-community/async-storage';
import { Constants } from '../constants';
import CustomerInfo from '../types/CustomerInfo';

export const saveUserId = async (id) => {
  await AsyncStorage.setItem(Constants.STORAGE_ITEM_USER_ID, JSON.stringify(id));
};

export const getUserId = async () => {
  let userId = await AsyncStorage.getItem(Constants.STORAGE_ITEM_USER_ID, null);
  return userId ? JSON.parse(userId) : null;
};

export const saveCustomer = async (customer: CustomerInfo) => {
  await AsyncStorage.setItem(Constants.STORAGE_ITEM_CUSTOMER, JSON.stringify(customer));
};

export const removeCustomer = async () => {
  await AsyncStorage.removeItem(Constants.STORAGE_ITEM_CUSTOMER);
};

export const getCustomer = async () => {
  let customer = await AsyncStorage.getItem(Constants.STORAGE_ITEM_CUSTOMER, null);
  return customer ? JSON.parse(customer) : null;
};

export const getCustomerName = (customer: CustomerInfo) => {
  if (customer.first_name && customer.last_name)
    return `${customer.first_name} ${customer.last_name}`;
  else if (customer.first_name) return customer.first_name;
  else if (customer.email) return customer.email;
  return 'Customer';
};

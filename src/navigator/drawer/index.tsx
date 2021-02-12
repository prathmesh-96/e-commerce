import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { DrawerItems, ScreenNames } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Colors } from 'react-native-paper';
import { getCustomer, getCustomerName, saveCustomer, removeCustomer } from '../../utils';
import CustomerInfo from '../../types/CustomerInfo';
import Loader from '../../components/loader';
import { getCustomerInfo } from '../../services/customer';
import { navigate, push } from '../NavigationService';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const DrawerContent: React.FC = () => {
  const [customer, updateCustomer] = useState<CustomerInfo>(null);
  const [loading, setLoading] = useState(true);
  // const { navigation } = props
  const setCustomer = async () => {
    // const res = await getCustomerInfo(2);
    // console.log(getCustomer);
    // saveCustomer(res.data[0]);
  };

  const getSavedCustomer = async () => {
    const savedCustomer: CustomerInfo = await getCustomer();
    if (getSavedCustomer !== null) {
      setCustomer();
    }
    updateCustomer(savedCustomer);
    setLoading(false);
  };

  useEffect(() => {
    getSavedCustomer();
  }, []);

  const iconColor = Colors.black;
  return (
    <DrawerContentScrollView>
      <View style={Styles.container}>
        <View style={Styles.userInfoSection}>
          {loading ? (
            <Loader />
          ) : (
            <View>
              <Text style={Styles.helloText}>
                {customer ? getCustomerName(customer) : 'Hello there!'}
              </Text>
              {customer ? (
                <Text style={Styles.loginText}>{customer.email}</Text>
              ) : (
                <View style={Styles.loginContainer}>
                  <Text style={Styles.loginText}>Log in</Text>
                  <Text style={Styles.loginText}>Sign up</Text>
                </View>
              )}
            </View>
          )}
        </View>
        <Drawer.Section style={Styles.drawerSection}>
          <DrawerItem
            icon={() => <SimpleLineIcons name="home" color={iconColor} size={20} />}
            label={DrawerItems.HOME}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              navigate(ScreenNames.HomeScreen);
            }}
          />
          {/* <DrawerItem
            icon={() => <MaterialCommunityIcons name="tune" color={iconColor} size={20} />}
            label={DrawerItems.ACCOUNT}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              console.log('Account')
            }}
          /> */}
          <DrawerItem
            icon={() => <Ionicons name="md-cart-outline" color={iconColor} size={20} />}
            label={DrawerItems.ORDER_HISTORY}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              navigate(ScreenNames.OrderHistoryScreen);
            }}
          />
          <DrawerItem
            icon={() => <Ionicons name="help-circle-outline" color={iconColor} size={20} />}
            label={DrawerItems.FAQs}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              navigate(ScreenNames.FAQScreen);
            }}
          />
          <DrawerItem
            icon={() => <Ionicons name="call-outline" color={iconColor} size={20} />}
            label={DrawerItems.CONTACT_US}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              navigate(ScreenNames.ContactUsScreen);
            }}
          />
          <DrawerItem
            icon={() => <Ionicons name="information-circle-outline" color={iconColor} size={20} />}
            label={DrawerItems.ABOUT_US}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              navigate(ScreenNames.AboutUsScreen);
            }}
          />
          <DrawerItem
            icon={() => <EvilIcons name="user" color={iconColor} size={25} />}
            label={DrawerItems.HELP}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              console.log('HELP');
            }}
          />
          <DrawerItem
            icon={() => <MaterialCommunityIcons name="logout" color={iconColor} size={20} />}
            label={DrawerItems.LOGOUT}
            labelStyle={Styles.labelNameStyle}
            onPress={() => {
              removeCustomer();
              navigate(ScreenNames.LoginScreen);
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/features/home';
import ProductDetail from '../../src/features/productDetail';
import ProductSearch from '../../src/features/productSearch';
import { ScreenNames } from '../constants';
import Burger from '../components/burger';
import CartSearchIcon from '../components/cartSearchIcon';
import Category from '../../src/features/category';
import Cart from '../../src/features/cart';
import Login from '../../src/features/login';
import Register from '../../src/features/register';
import OrderHistory from '../../src/features/orderHistory';
import ProductReviewDetail from '../features/productReviewDetails';
import SelectAddress from '../features/selectAddress';
import AddNewAddress from '../features/addNewAddress';
import OrderDetails from '../features/orders';
import Summary from '../features/summary';
import orderConfirmationScreen from '../features/orderConfirmationScreen';
import AddReviews from '../features/productReviewDetails/components/addReviews';
import AboutUs from '../features/aboutUs';
import FAQScreen from '../features/faqScreen';
import DrawerComponent from './drawer';
import ContactUs from '../features/contactUs';

const Drawer = createDrawerNavigator();

export const Auth: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreenNames.HomeScreen}>
      <Stack.Screen name={ScreenNames.LoginScreen} component={Login} />
      <Stack.Screen name={ScreenNames.RegisterScreen} component={Register} />
    </Stack.Navigator>
  );
};

const HomeStack: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreenNames.HomeScreen}>
      <Stack.Screen
        name={ScreenNames.HomeScreen}
        component={Home}
        options={{
          headerLeft: () => <Burger />,
          headerRight: () => (
            <CartSearchIcon searchVisibleProp={false} screenName={ScreenNames.HomeScreen} />
          ),
          title: 'HOME',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />
      <Stack.Screen
        name={ScreenNames.ProductDetail}
        component={ProductDetail}
        options={{
          headerLeft: () => <Burger />,
          headerRight: () => <CartSearchIcon screenName={ScreenNames.ProductDetail} />,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />
      <Stack.Screen
        name={ScreenNames.ProductSearch}
        component={ProductSearch}
        options={{
          headerRight: () => (
            <CartSearchIcon searchVisibleProp={true} screenName={ScreenNames.ProductSearch} />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenNames.CategoryScreen}
        component={Category}
        options={{
          headerRight: () => (
            <CartSearchIcon searchVisibleProp={false} screenName={ScreenNames.CategoryScreen} />
          ),
          headerLeft: () => <Burger />,
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'CATEGORY',
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />
      <Stack.Screen
        name={ScreenNames.CartScreen}
        component={Cart}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'CART',
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />
      <Stack.Screen
        name={ScreenNames.LoginScreen}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.RegisterScreen}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.OrderHistoryScreen}
        component={OrderHistory}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'ORDER HISTORY',
          headerTintColor: 'white',
          headerStatusBarHeight: 12,
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenNames.ProductReviewDetails}
        component={ProductReviewDetail}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'REVIEWS',
          headerTintColor: 'white',
          headerStatusBarHeight: 12,
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenNames.SelectAddressScreen}
        component={SelectAddress}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'SELECT ADDRESS',
          headerTintColor: 'white',
          headerStatusBarHeight: 12,
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenNames.AddNewAddress}
        component={AddNewAddress}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'ADD NEW ADDRESS',
          headerTintColor: 'white',
          headerStatusBarHeight: 12,
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenNames.OrderDetails}
        component={OrderDetails}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'ORDER DETAILS',
          headerTintColor: 'white',
          headerStatusBarHeight: 12,
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenNames.SummaryScreen}
        component={Summary}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'SUMMARY',
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />

      <Stack.Screen
        name={ScreenNames.OrderConfirmationScreen}
        component={orderConfirmationScreen}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'CONFIRMATION',
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />

      <Stack.Screen
        name={ScreenNames.AddReviewsScreen}
        component={AddReviews}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          title: 'ADD REVIEWS',
          headerTintColor: 'white',
          // headerTitleAlign: 'center',
          headerStatusBarHeight: 12,
        }}
      />
    </Stack.Navigator>
  );
};

export const App: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerComponent />}>
      <Drawer.Screen name={ScreenNames.HomeScreen} component={HomeStack} />
      <Drawer.Screen name={ScreenNames.AboutUsScreen} component={AboutUs} />
      <Drawer.Screen name={ScreenNames.ContactUsScreen} component={ContactUs} />
      <Drawer.Screen name={ScreenNames.FAQScreen} component={FAQScreen} />
      <Drawer.Screen name={ScreenNames.OrderHistoryScreen} component={OrderHistory} />
    </Drawer.Navigator>
  );
};

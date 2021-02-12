import React, { useState } from 'react';
import { App, Auth } from './app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef } from './NavigationService';
import { getUserId, saveUserId, saveCustomer } from '../utils';
import Splash from '../components/splash';
import { getCustomerInfo } from '../services/customer';

const Navigator = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const decideAppFlow = async () => {
    // const userId = await getUserId();
    // if (userId) {
    //   setLoading(false);
    // } else {
    //   //set userid forcefully
    //   saveUserId(2);
    //   setCustomer();
    // }
    setLoading(false);
    setLoggedIn(true);
  };

  const setCustomer = async () => {
    // const res = await getCustomerInfo(2);
    // saveCustomer(res.data[0]);
    // setLoading(false);
  };

  React.useEffect(() => {
    console.log('useEffect');
    decideAppFlow();
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {loading ? <Splash /> : loggedIn ? <App /> : <Auth />}
    </NavigationContainer>
  );
};

export default Navigator;

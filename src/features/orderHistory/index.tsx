import React, { useEffect } from 'react';
import { View } from 'react-native';
import Styles from './styles';
import OrderHistoryList from './components/orderList';
import { AppState } from '../../redux/reducer';
import { getOrderHistory } from './redux/actionCreator/orderHistory';
import { connect, ConnectedProps } from 'react-redux';
import Loader from '../../components/loader';
import { useNavigation } from '@react-navigation/native';
import { getCustomer } from '../../utils';
import CustomerInfo from '../../types/CustomerInfo';

const mapState = (state: AppState) => ({
  orderHistoryList: state.orderHistory.orderHistoryReducer.orderHistories,
  isLoading: state.orderHistory.orderHistoryReducer.isLoading,
});

const mapDispatch = {
  getOrderHistory: (customerId, lazyload) => getOrderHistory(customerId, lazyload),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const OrderHistory: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { orderHistoryList, isLoading } = props;
  const navigation = useNavigation();
  let userID;
  const getSavedCustomer = async (lazyload) => {
    const savedCustomer: CustomerInfo = await getCustomer();
    console.log('user id ==', savedCustomer.id);
    userID = savedCustomer.id;
    props.getOrderHistory(savedCustomer.id, lazyload);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      getSavedCustomer(false);
    });
    return unsubscribe;
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <View style={Styles.container}>
        {console.log(userID)}
        <OrderHistoryList
          onEndReached={() => getSavedCustomer(true)}
          orderHistories={orderHistoryList}
        />
      </View>
    );
  }
};

export default connector(OrderHistory);

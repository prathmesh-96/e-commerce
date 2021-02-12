import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './styles';
import OrderItem from '../orderCard';
import OrderHistory from '../../../../types/OrderHistory';

export interface Props {
  orderHistories: OrderHistory[];
  onEndReached: any;
}
const OrderHistoryList: React.FC<Props> = (props) => {
  const { onEndReached, orderHistories } = props;

  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.itemList}
        data={orderHistories}
        renderItem={({ item }: { item: OrderHistory }) => <OrderItem orderHistoryitem={item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View />}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default OrderHistoryList;

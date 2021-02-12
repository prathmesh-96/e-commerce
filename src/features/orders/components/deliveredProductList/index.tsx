import React from 'react';
import { View, FlatList, Text } from 'react-native';
import StyleSheetList from './styles';
import OrderProductDetails from '../../../../types/OrderProductDetails';
import DeliveredProductCard from '../DeliveredProduct/deliveredProductCard';

export interface Props {
  orderProductDetails: OrderProductDetails[];
}

const DeliveredProductList: React.FC<Props> = (props) => {
  const { orderProductDetails } = props;
  return (
    <View>
      <Text style={StyleSheetList.headerName}>DELIVERED PRODUCTS</Text>
      <FlatList
        style={StyleSheetList.listContainer}
        data={orderProductDetails}
        renderItem={({ item }: { item: OrderProductDetails }) => (
          <DeliveredProductCard
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        )}
        keyExtractor={(item) => item.name.toString()}
        ItemSeparatorComponent={() => <View style={StyleSheetList.seperator} />}
      />
    </View>
  );
};

export default DeliveredProductList;

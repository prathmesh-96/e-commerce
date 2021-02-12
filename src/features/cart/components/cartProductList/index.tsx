import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './styles';
import CartItem from '../CartItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartProduct from '../../../../types/CartProduct';
import { CartPro } from '../../dummylist';

export interface Props {
  orderProducts: CartProduct[];
  // onEndReached: any
}
const CartProductList: React.FC<Props> = (props: Props) => {
  const { orderProducts } = props;
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={CartPro}
          renderItem={({ item }) => (
            <CartItem
              id={item.id}
              key={item.item_key}
              title={item.name}
              price={item.price}
              discount={item.discount}
              image={item.image}
              cart_quantity={item.cart_quantity}
              cart_subtotal={item.cart_subtotal}
            />
          )}
          keyExtractor={(item) => item.product_id}
        />
      </View>
    </SafeAreaView>

    // <SafeAreaView>
    //   <View style={Styles.container}>
    //     <FlatList
    //       style={Styles.itemList}
    //       data={orderProducts}
    //       renderItem={({ item }: { item: CartProduct }) => (
    //         <CartItem
    //           key={item.key}
    //           id={item.product_id}
    //           name={item.product_name}
    //           price={item.product_price}
    //           title={item.product_title}
    //           quantity={item.quantity}
    //           image={item.product_image}
    //           line_subtotal={item.line_subtotal}
    //         />
    //       )}
    //       keyExtractor={(item) => item.product_id}
    //       ItemSeparatorComponent={() => <View />}
    //       // onEndReachedThreshold={0.7}
    //       // onEndReached={onEndReached}
    //     />
    //   </View>
    // </SafeAreaView>
  );
};

export default CartProductList;

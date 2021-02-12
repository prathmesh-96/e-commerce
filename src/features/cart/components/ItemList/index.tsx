import React from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import CartProductList from '../cartProductList';
import CartProduct from '../../../../types/CartProduct';
import CartTotal from '../../../../types/CartTotal';
import { line_item } from '../../../../types/PlaceOrder';
import { ScreenNames } from '../../../../constants';

export interface Props {
  cartTotal: CartTotal;
  orderProducts: CartProduct[];
  id: number;
  name: string;
  price: number;
  image: string;
  // onEndReached: any
}

const ProductsList: React.FC<Props> = (props: Props) => {
  const { orderProducts, cartTotal } = props;
  const navigation = useNavigation();
  let line_items: line_item[] = new Array(orderProducts.length);
  const proceedToBuy = () => {
    for (const key in orderProducts) {
      line_items[key] = {
        product_id: orderProducts[key].product_id,
        quantity: orderProducts[key].quantity,
      };
    }
    navigation.navigate(ScreenNames.SelectAddressScreen, {
      order: { line_items },
      cartTotalAmt: cartTotal.total,
      shippingTotal: cartTotal.shipping_total,
      taxTotal: cartTotal.total_tax,
      screenName: 'Cart',
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <View>
            <CartProductList orderProducts />
          </View>

          <View>
            <View style={Styles.coupon}>
              <Icon name="pricetags-outline" size={18} style={Styles.iconStyle} color={'#874F4F'} />
              <Text style={Styles.applyCoupon}>Apply Coupon</Text>
              <TextInput
                style={[Styles.couponText, Styles.textInputStyle]}
                placeholder="  Enter Coupon Code"
              />
            </View>

            <View style={Styles.bottomFlex}>
              <Text style={Styles.bottomText}>Coupon Discount</Text>
              <Text style={Styles.bottomDiscountAmt}>10%</Text>
            </View>

            <View style={Styles.bottomFlex}>
              <Text style={Styles.bottomText}>Tax</Text>
              <Text style={Styles.bottomAmount}>
                {'\u20B9'}
                {cartTotal ? cartTotal.total_tax : '-'}
              </Text>
            </View>

            <View style={Styles.bottomFlex}>
              <Text style={Styles.bottomText}>Shipping Charges</Text>
              <Text style={Styles.bottomAmount}>
                {'\u20B9'}
                {cartTotal ? cartTotal.shipping_total : '-'}
              </Text>
            </View>

            <View style={Styles.total}>
              <Text style={Styles.totalText}>TOTAL</Text>
              <Text style={Styles.totalAmt}>
                {'\u20B9'}
                {cartTotal ? cartTotal.total : '-'}
              </Text>
            </View>

            <Button
              color="#fff"
              onPress={() => proceedToBuy()}
              mode="contained"
              labelStyle={Styles.nextButtonText}
              style={Styles.nextButtonContainer}
            >
              PROCEED TO BUY
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsList;

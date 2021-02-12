import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderProductDetails from '../../../../types/OrderProductDetails';

export interface OrderProduct {
  name: string;
  image: string;
  price: string;
  quantity: string;
}
const DeliveredProductCard: React.FC<OrderProductDetails> = (props: OrderProductDetails) => {
  const { name, price, quantity } = props;
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Image
          source={{ uri: 'https://dummyimage.com/100X100/959595/ffffff.png' }}
          style={styles.imageStyle}
        />
        <Text style={styles.productNameStyle}>{name}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.productPriceStyle}>
            {'\u20B9'}
            {price}
          </Text>
          <Text style={styles.productQuantityStyle}>x{quantity}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveredProductCard;

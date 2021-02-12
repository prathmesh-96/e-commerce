import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';
import FastImage from 'react-native-fast-image';
import Product from '../../../../types/Product';
import { ScreenNames } from '../../../../constants';

export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  short_description: string;
  products: Product;
  navigation: {};
}

const OptionProductCard: React.FC<Products> = (product: Products) => {
  const { name, image, price, products, navigation } = product;
  const { push } = navigation;
  const onProductDetail = () => {
    push(ScreenNames.ProductDetail, {
      product: products,
    });
  };
  return (
    <TouchableOpacity style={Styles.container} onPress={onProductDetail} activeOpacity={0.9}>
      <FastImage
        source={{ uri: image }}
        style={Styles.productImage}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={Styles.businessName}>{name}</Text>
      <Text style={Styles.productDetailText}>${price}</Text>
    </TouchableOpacity>
  );
};

export default OptionProductCard;

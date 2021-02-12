import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';
import { helpers } from '../../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenNames } from '../../../../constants';
import Product from '../../../../types/Product';
import { navigate } from '../../../../navigator/NavigationService';

export interface Products {
  id: number;
  name: string;
  price: number;
  image?: string;
  products: Product[];
}

const ProductCard: React.FC<Products> = (product: Products) => {
  const { name, price, image, products } = product;
  const { colors } = useTheme();
  const bgColor = { backgroundColor: colors.card };

  const onProductDetail = () => {
    navigate(ScreenNames.ProductDetail, { product: products });
  };

  return (
    <View style={[Styles.container, bgColor]}>
      <TouchableOpacity style={Styles.productDetailParentContainer} onPress={onProductDetail}>
        <FastImage
          source={{ uri: image }}
          style={Styles.productImage}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={Styles.productName}>{name}</Text>
        <Text style={Styles.productPrice}>{`${helpers.RUPEE_SYMBOL}${price}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

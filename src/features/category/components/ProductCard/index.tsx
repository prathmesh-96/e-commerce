import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants';
import Product from '../../../../types/Product';

export interface Products {
  id: number;
  name: string;
  price: number;
  compare_at_price: number;
  image?: string;
  products: Product;
}

const ProductCard: React.FC<Products> = (product: Products) => {
  const { name, price, compare_at_price, image, products } = product;
  const navigation = useNavigation();
  var savedamt = price - compare_at_price;
  var vdiscount = (savedamt / price) * 100;
  var discount = vdiscount.toFixed(0);

  const onPress = () => {
    navigation.navigate(ScreenNames.ProductDetail, {
      products: products,
    });
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={Styles.container}>
        <View>
          <FastImage
            source={{ uri: image }}
            style={Styles.productImage}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={Styles.lineBreak}>{'\n'}</Text>
          <Text style={Styles.title}>{name} </Text>
          <Text style={Styles.lineBreak1}>{'\n'}</Text>

          <View style={Styles.price}>
            {compare_at_price ? (
              <Text style={Styles.discountPrice}>
                {' '}
                {'\u20B9'}
                {compare_at_price} {'  '}
              </Text>
            ) : (
              <Text style={Styles.discountPrice}>
                {'\u20B9'}0 {'  '}
              </Text>
            )}
            {price ? (
              <Text style={Styles.originalPrice}>
                {'\u20B9'}
                {price}
              </Text>
            ) : (
              <Text style={Styles.originalPrice}>{'\u20B9'}0 </Text>
            )}
          </View>

          <View style={Styles.savings}>
            <Text style={Styles.save}>
              Save {'\u20B9'}
              {savedamt} {'  '}
            </Text>
            <Text style={Styles.discountBraces}>(</Text>
            {price ? (
              <Text style={Styles.discount}>{discount}% off</Text>
            ) : (
              <Text style={Styles.discount}>0% off</Text>
            )}
            <Text style={Styles.discountBraces}>)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

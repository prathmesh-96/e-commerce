import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from './styles';
import FastImage from 'react-native-fast-image';
import StarRating from 'react-native-star-rating';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants';
import Product from '../../../../types/Product';

export interface Products {
  name: string;
  price: number;
  image?: string;
  products: Product;
}

const ProductSearchCard: React.FC<Products> = (product: Products) => {
  const { name, image, products } = product;
  const { short_description, rating_count, on_sale } = products;
  const navigation = useNavigation();
  // const regex = /(<([^>]+)>)/gi;

  const onPress = () => {
    navigation.navigate(ScreenNames.ProductDetail, {
      products: products,
    });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.productSearchCardcontainer}>
        <View style={Styles.imageContainer}>
          <FastImage
            source={{ uri: image }}
            style={Styles.productImage}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={Styles.productInfoMainContainer}>
          <View style={Styles.ratingContainer}>
            <StarRating
              disabled={true}
              maxStars={5}
              starSize={12}
              rating={rating_count}
              fullStarColor={'#FFC107'}
              emptyStarColor={'#FFC107'}
              starStyle={{ padding: 2 }}
            />
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.titleText}>{name}</Text>
          </View>
          <View style={Styles.productDetailContainer}>
            <Text style={Styles.productDetailText}>Product Details</Text>
          </View>
          <View style={Styles.productInfoContainer}>
            <Text style={Styles.productInfoText}>{short_description}</Text>
          </View>
          <View style={Styles.productPriceContainer}>
            <Text style={Styles.priceText}>₹{products.variants[0].price} </Text>
            <Text style={Styles.totalPriceText}> ₹{products.variants[0].compare_at_price}</Text>
          </View>
          {on_sale ? (
            <View style={Styles.productDiscountContainer}>
              <Text style={Styles.discountText}>
                - <Text style={Styles.discountBraces}>(</Text>
                {(
                  ((products.variants[0].compare_at_price - products.variants[0].price) /
                    products.variants[0].compare_at_price) *
                  100
                ).toFixed(0)}
                %<Text style={Styles.discountBraces}>)</Text>
              </Text>
              <Text style={Styles.totalDiscountText}>
                Save ₹ {products.variants[0].compare_at_price - products.variants[0].price}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductSearchCard;

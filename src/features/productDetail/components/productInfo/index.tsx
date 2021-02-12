import React from 'react';
import { View, Text } from 'react-native';
import StarRating from 'react-native-star-rating';
import Styles from './styles';
import QualityCotainer from '../quantityContainer';
import Product from '../../../../types/Product';

export interface Props {
  products: Product;
}

const ProductInfo: React.FC<Props> = (props) => {
  const { products } = props;
  // const { name, average_rating, short_description, regular_price, price } = products;

  return (
    <View style={Styles.productInfoMainContainer}>
      <View style={Styles.productNameContainer}>
        <View style={Styles.productCompanyNameAndRatingContainer}>
          <View style={Styles.companyNameContainer}>
            <Text style={Styles.productName}>{products.title}</Text>
          </View>
          <View style={Styles.ratingContainer}>
            <StarRating
              disabled={true}
              maxStars={5}
              starSize={14}
              rating={parseFloat(products.average_rating)}
              fullStarColor={'#FFC107'}
              emptyStarColor={'#FFC107'}
              starStyle={{ padding: '1%' }}
            />
          </View>
        </View>
        {/* <View style={Styles.productNameChildContainer}>
          <Text style={Styles.productName}>{products.title}</Text>
        </View> */}
      </View>
      <View style={Styles.productContianer}>
        <View style={Styles.productDetailContainer}>
          <Text style={Styles.productDetailText}>Product Details</Text>
        </View>
        <View style={Styles.productInfoContainer}>
          <Text style={Styles.productInfoText}>{products.short_description}</Text>
        </View>
        <View style={Styles.productPriceContainer}>
          <Text style={Styles.productDiscountPriceText}>₹{products.variants[0].price} </Text>
        </View>
        <View style={Styles.productPriceContainer}>
          <Text style={Styles.productOriginalPriceText}>
            ₹{products.variants[0].compare_at_price}{' '}
          </Text>
          <View style={Styles.offerText}>
            <Text style={Styles.discountText}>
              {(
                ((products.variants[0].compare_at_price - products.variants[0].price) /
                  products.variants[0].compare_at_price) *
                100
              ).toFixed(0)}
              %
            </Text>
            <Text style={Styles.totalDiscountText}>
              Save ₹ {products.variants[0].compare_at_price - products.variants[0].price}
            </Text>
          </View>
        </View>
        <View style={Styles.quantityContainer}>
          <QualityCotainer />
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;

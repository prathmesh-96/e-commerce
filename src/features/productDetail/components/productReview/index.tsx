import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/EvilIcons';
import StarRating from 'react-native-star-rating';
import Styles from './styles';
import { Reviews } from '../../../../types/Product';
import { ScreenNames } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

export interface Props {
  Firstreviews: Reviews[];
  totalReview: number;
  totalrating: number;
  product_id: number;
}

const ProductReview: React.FC<Props> = (props) => {
  const { Firstreviews, totalReview, totalrating, product_id } = props;
  let review;
  let reviewer;
  let rating;
  if (Firstreviews.length > 0) {
    review = Firstreviews[0].review;
    reviewer = Firstreviews[0].reviewer;
    rating = Firstreviews[0].rating;
  }
  let productTotalRating: number = +totalrating;

  const navigation = useNavigation();
  const reviewDetails = () =>
    navigation.navigate(ScreenNames.ProductReviewDetails, { productID: product_id });
  return (
    <View style={Styles.productReviewContainer}>
      <View style={Styles.reviewAndRatingContainer}>
        <View style={Styles.reviewTextContainer}>
          <Text style={Styles.titleText}> Read reviews </Text>
        </View>
        <View style={Styles.totalRatingContainer}>
          <StarRating
            disabled={true}
            maxStars={5}
            starSize={14}
            rating={productTotalRating}
            fullStarColor={'#FFC107'}
            emptyStarColor={'#FFC107'}
            starStyle={{ padding: '1%' }}
          />
          <Text style={Styles.totalRatingText}> {productTotalRating}/5</Text>
        </View>
      </View>
      <View style={Styles.totalReviewCountContainer}>
        <Text style={Styles.totalReviewCount}>
          {/* {totalReview} */}
          customer reviews{' '}
        </Text>
      </View>
      {Firstreviews.length > 0 ? (
        <View style={Styles.userReviewContainer}>
          <Icons name="user" size={25} />
          <View style={Styles.userReviewTextContainer}>
            <View style={Styles.userNameAndRatingContainer}>
              <Text style={Styles.userName}>{reviewer}</Text>
              <StarRating
                disabled={true}
                maxStars={rating}
                starSize={14}
                rating={rating}
                fullStarColor={'#FFC107'}
                emptyStarColor={'#FFC107'}
                starStyle={{ padding: '1%' }}
              />
              <View style={Styles.userRatingContainer}>
                <StarRating
                  disabled={true}
                  maxStars={1}
                  starSize={14}
                  emptyStarColor={'#FFC107'}
                  starStyle={{ padding: '1%' }}
                />
                <Text style={Styles.userRatingText}> {rating}/5</Text>
              </View>
            </View>
            <Text style={Styles.reviewsText}>{review}</Text>
          </View>
        </View>
      ) : (
        <View style={Styles.writeReviewContainer}>
          <Text style={Styles.userName}> No reviews </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ScreenNames.AddReviewsScreen, { productId: product_id })
            }
          >
            <Text style={Styles.writeReviewText}>Write a Review</Text>
          </TouchableOpacity>
        </View>
      )}
      {Firstreviews.length > 0 ? (
        <TouchableOpacity style={Styles.seeMoreButtonContainer} onPress={reviewDetails}>
          <Text style={Styles.seeMoreText}> see more </Text>
          <Icon name="down" size={12} color="#959595" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ProductReview;

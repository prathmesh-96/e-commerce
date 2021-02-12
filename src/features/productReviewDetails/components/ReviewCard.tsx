import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Icons from 'react-native-vector-icons/EvilIcons';
import StarRating from 'react-native-star-rating';
import Styles from '../styles';

export interface reviewDeatil {
  reviewer: string;
  review: string;
  rating: number;
}

const ReviewCard: React.FC<reviewDeatil> = (reviewDeatil: reviewDeatil) => {
  const { reviewer, review, rating } = reviewDeatil;
  const regex = /(<([^>]+)>)/gi;
  return (
    <SafeAreaView>
      <View style={Styles.productReviewContainer}>
        <View style={Styles.userReviewContainer}>
          <Icons name="user" size={30} color="#959595" />
          <View style={Styles.userReviewTextContainer}>
            <View style={Styles.userNameAndRatingContainer}>
              <Text style={Styles.userName}>{reviewer}</Text>
              <View style={Styles.userRatingContainer}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  starSize={14}
                  rating={rating}
                  fullStarColor={'#FFC107'}
                  emptyStarColor={'#FFC107'}
                />
                <Text style={Styles.userRatingText}> {rating}/5</Text>
              </View>
            </View>
            <Text style={Styles.reviewsText}>{review}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReviewCard;

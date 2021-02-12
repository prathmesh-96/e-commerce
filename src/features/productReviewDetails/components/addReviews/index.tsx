import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import StarRating from 'react-native-star-rating';
import { Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import CustomerInfo from '../../../../types/CustomerInfo';
import { getCustomer } from '../../../../utils';
import { AppState } from '../../../../redux/reducer';
import { connect, ConnectedProps } from 'react-redux';
import { postReviews } from '../../redux/actionCreators/addProductReview';
import PostReviewDetails from '../../../../types/PostReviewDetails';
import * as yup from 'yup';
import { Formik } from 'formik';

const mapState = (state: AppState) => ({
  reviewsDetails: state.productReviewDetails.postReviewReducer.reviewDetails,
});

const mapDispatch = {
  postReviews: (reviewsDetails) => postReviews(reviewsDetails),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const validationSchema = yup.object().shape({
  rating_count: yup.number().required('Please select a rating').label('rating_count'),
  reviews: yup.string().required('Please fill out this field').label('reviews'),
});

const AddReviews: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { reviewsDetails } = props;
  const route = useRoute();
  const { productId } = route.params;
  const [count, setCount] = useState(0);

  const getSavedCustomer = async (values) => {
    console.log('views', values.rating_count);
    const savedCustomer: CustomerInfo = await getCustomer();
    let name = savedCustomer.first_name.concat(' ').concat(savedCustomer.last_name);
    let reviewDetails: PostReviewDetails = {
      product_id: productId,
      reviewer: name,
      reviewer_email: savedCustomer.email,
      rating: values.rating_count,
      review: values.reviews,
    };
    // console.log(reviewDetails)
    props.postReviews(reviewDetails);
  };

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          rating_count: '',
          reviews: '',
        }}
        onSubmit={(values) => {
          getSavedCustomer(values);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <React.Fragment>
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.mainContainer}>
                <View style={styles.ratingContainer}>
                  <Text style={styles.addReviewText}> Your Rating *</Text>
                  <Text style={styles.errorStyle}>{formikProps.errors.rating_count}</Text>
                </View>
                <View style={styles.totalRatingContainer}>
                  <StarRating
                    maxStars={5}
                    rating={count}
                    selectedStar={(rating) => {
                      setCount(rating);
                      formikProps.setFieldValue('rating_count', rating);
                    }}
                    fullStarColor={'#FFC107'}
                    emptyStarColor={'#FFC107'}
                    starSize={32}
                    starStyle={{ padding: '1%' }}
                  />
                </View>
                <View style={styles.ratingContainer}>
                  <Text style={styles.addReviewText}> Your Review *</Text>
                  <Text style={styles.errorStyle}>{formikProps.errors.reviews}</Text>
                </View>
                <TextInput
                  placeholder={'write here'}
                  style={[styles.addressInputStyle, styles.textStyle]}
                  keyboardType="name-phone-pad"
                  multiline={true}
                  onChangeText={(val) => formikProps.setFieldValue('reviews', val)}
                />
                <Button
                  color="#fff"
                  onPress={formikProps.handleSubmit}
                  mode="contained"
                  labelStyle={styles.nextButtonText}
                  style={styles.nextButtonContainer}
                >
                  Submit
                </Button>
              </View>
            </ScrollView>
          </React.Fragment>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default connector(AddReviews);

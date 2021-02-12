import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../redux/reducer';
import ProductReviewList from './components/ProductReviewList';
import { getReviews } from './redux/actionCreators/productReviewDetails';
import { useRoute } from '@react-navigation/native';
import Loader from '../../components/loader';
import { getReviewsResponse } from './redux/actionCreators/addProductReview';
import Styles from './styles';
import { Snackbar } from 'react-native-paper';

const mapState = (state: AppState) => ({
  reviewList: state.productReviewDetails.reviewsReducer.productReviewDetails,
  isLoadingProducts: state.productReviewDetails.reviewsReducer.isLoading,
  postReviewResponse: state.productReviewDetails.postReviewResponseReducer.postReviewResponse,
});

const mapDispatch = {
  getReviews: (productID, lazyload) => getReviews(productID, lazyload),
  getReviewsResponse: (getResponse) => getReviewsResponse(getResponse),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProductReviewDetails: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { reviewList, isLoadingProducts, postReviewResponse } = props;
  const route = useRoute();
  const { productID } = route.params;

  useEffect(() => {
    props.getReviews(productID, false);
  }, []);

  if (isLoadingProducts) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView>
        <View style={Styles.mainContainer}>
          <ScrollView>
            <ProductReviewList
              onEndReached={() => props.getReviews(productID, true)}
              reviews={reviewList}
              productId={productID}
            />
          </ScrollView>
          <View style={Styles.snackbarContainer}>
            <Snackbar
              visible={postReviewResponse}
              onDismiss={() => props.getReviewsResponse(false)}
              action={{
                label: 'Dismiss',
                onPress: () => {
                  props.getReviewsResponse(false);
                },
              }}
              duration={Snackbar.DURATION_MEDIUM}
            >
              Review posted
            </Snackbar>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};
export default connector(ProductReviewDetails);

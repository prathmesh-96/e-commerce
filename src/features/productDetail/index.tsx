import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './styles';
import OptionProductsList from './components/optionProductList';
import ProductInfo from './components/productInfo';
import ProductDescription from './components/productDescription';
import ProductReview from './components/productReview';
import ProductImage from './components/productImage';
import { connect, ConnectedProps } from 'react-redux';
import { getProductDetails, clearPopularProducts } from './redux/actionCreators/productsDetail';
import { postAddToCart, getAddToCartResponse } from './redux/actionCreators/addToCart';
import { AppState } from '../../redux/reducer';
import { AddToCartProducts } from '../../types/AddToCartProducts';
import { Snackbar } from 'react-native-paper';
import { ScreenNames } from '../../constants';
import { line_item } from '../../types/PlaceOrder';
import { getCartTotal } from '../cart/redux/actionCreator/cartTotal';
import { clearQuantityCount } from '../productDetail/redux/actionCreators/quantity';
import { useRoute } from '@react-navigation/native';
import { navigate } from '../../navigator/NavigationService';

const mapState = (state: AppState) => ({
  product: state.productDetail.productsReducer.products,
  similarProduct: state.productDetail.productsReducer.similarProduct,
  reviews: state.productDetail.productsReducer.reviews,
  addtocartproduct: state.productDetail.addToCartReducer.addToCartProducts,
  quantity_count: state.productDetail.quantityCountReducer.quantity_count,
  addtocartproductResponse: state.productDetail.addToCartResponseReducer.addToCartResponse,
  cartTotal: state.cartProducts.cartTotalReducer.cartTotal,
});

const mapDispatch = {
  getProducts: (productId, related_id) => getProductDetails(productId, related_id),
  cleanProduct: () => clearPopularProducts(),
  postAddToCart: (addtocartproduct) => postAddToCart(addtocartproduct),
  //to dismiss snackbar after duration : medium
  getAddToCartResponse: (addtocartproductResponse) =>
    getAddToCartResponse(addtocartproductResponse),
  getCartTotal: () => getCartTotal(),
  //To initialize quantity with 1
  clearQuantityCount: () => clearQuantityCount(),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const ProductDetail: React.FC<Props> = (props: Props) => {
  // const route = useRoute();
  const { product } = props.route.params;
  const { navigation } = props;
  const { related_ids, average_rating, id } = product;
  const { price } = product;
  let titleName = product.name;
  const { similarProduct, reviews, quantity_count, addtocartproductResponse, cartTotal } = props;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      props.getProducts(id, related_ids);
      props.getCartTotal();
      props.clearQuantityCount();
      navigation.setOptions({ title: titleName });
    });
    return unsubscribe;
  }, []);

  //to add a product in cart
  const addtoCart = () => {
    let addtocartproduct: AddToCartProducts = {
      // product_id: id,
      // quantity: quantity_count,
    };
    props.postAddToCart(addtocartproduct);
  };

  //when customer presses buy now button
  const buyNow = () => {
    let line_items: line_item[] = new Array(1);

    line_items[0] = {
      product_id: id,
      quantity: quantity_count,
    };

    navigation.navigate(ScreenNames.SelectAddressScreen, {
      order: { line_items },
      cartTotalAmt: price,
      shippingTotal: cartTotal.shipping_total,
      taxTotal: cartTotal.total_tax,
      screenName: 'BuyNow',
    });
  };

  return (
    <View>
      <ScrollView>
        {/*contentContainerStyle={Styles.container}*/}
        <View style={Styles.imageContainer}>
          {product ? <ProductImage productImage={product.images} /> : null}
        </View>
        <View style={Styles.productInfoContainer}>
          {product ? <ProductInfo products={product} /> : null}
        </View>
        <View style={Styles.descriptionContainer}>
          {product ? <ProductDescription products={product} /> : null}
        </View>
        <View style={Styles.readViewContainer}>
          <ProductReview
            Firstreviews={reviews}
            totalReview={reviews.length}
            totalrating={average_rating}
            product_id={id}
          />
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.addButtonContainer} onPress={() => addtoCart()}>
            <Text style={Styles.addButtonText}>ADD TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buyButtonContainer} onPress={() => buyNow()}>
            <Text style={Styles.buyButtonText}>BUY NOW </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.similarOptioncontainer}>
          {similarProduct.length > 0 ? (
            <OptionProductsList similarProduct={similarProduct} navigation={navigation} />
          ) : null}
        </View>
      </ScrollView>
      <View style={Styles.snackbarContainer}>
        <Snackbar
          visible={addtocartproductResponse}
          onDismiss={() => props.getAddToCartResponse(false)}
          action={{
            label: 'View Cart',
            onPress: () => {
              navigation.navigate(ScreenNames.CartScreen);
            },
          }}
          duration={Snackbar.DURATION_MEDIUM}
        >
          Added To Cart
        </Snackbar>
      </View>
    </View>
  );
};

export default connector(ProductDetail);

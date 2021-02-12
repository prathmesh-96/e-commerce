import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import Styles from './styles';
import ProductsList from './components/ItemList';
import Loader from '../../components/loader';
import { AppState } from '../../redux/reducer';
import { connect, ConnectedProps } from 'react-redux';
import { getCartProducts } from './redux/actionCreator/cartProducts';
import { getCartTotal } from './redux/actionCreator/cartTotal';
import { navigate } from '../../navigator/NavigationService';
import { ScreenNames } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { updateQuantityResponseAction } from './redux/actionCreator/updateQuantity';
import { clearupdateCartPrduct } from './redux/actionCreator/updatecartProducts';

const mapState = (state: AppState) => ({
  cartProducts: state.cartProducts.cartProductReducer.orderProducts,
  isLoading: state.cartProducts.cartProductReducer.isLoading,
  cartTotal: state.cartProducts.cartTotalReducer.cartTotal,
  updateQuantityResponse: state.cartProducts.updateQuantityResponseReducer.updatedResponse,
  updatecartProducts: state.cartProducts.updatecartProductReducer.orderProducts,
});

const mapDispatch = {
  getCartProducts: (lazyload) => getCartProducts(lazyload),
  getCartTotal: () => getCartTotal(),
  updateQuantityResponseAction: (updateResponse) => updateQuantityResponseAction(updateResponse),
  clearupdateCartPrduct: () => clearupdateCartPrduct(),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
const Home: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { cartProducts, isLoading, cartTotal, updateQuantityResponse, updatecartProducts } = props;
  const navigation = useNavigation();

  const onHomeScreen = () => {
    props.clearupdateCartPrduct();
    navigate(ScreenNames.HomeScreen);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      props.getCartProducts(false);
      props.getCartTotal();
      props.clearupdateCartPrduct();
    });
    return unsubscribe;
  }, [navigation, props]);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <View style={Styles.container}>
        <View>
          {cartProducts.length === 0 ? (
            <View style={Styles.emptyContainer}>
              <Text style={Styles.textStyle}>Your cart is currently empty</Text>
              <Text style={Styles.bottomTextStyle}>
                We recommend you to browse through our popular categories
              </Text>
              <Button
                color="#fff"
                onPress={() => onHomeScreen()}
                mode="contained"
                labelStyle={Styles.nextButtonText}
                style={Styles.nextButtonContainer}
              >
                Start Shopping
              </Button>
            </View>
          ) : updatecartProducts.length === 0 ? (
            <ProductsList
              // onEndReached={() => props.getCartProducts(2, true)}
              cartTotal={cartTotal}
              orderProducts={cartProducts}
            />
          ) : (
            <ProductsList
              // onEndReached={() => props.getCartProducts(2, true)}
              cartTotal={cartTotal}
              orderProducts={updatecartProducts}
            />
          )}
        </View>

        <View style={Styles.snackbarContainer}>
          <Snackbar
            visible={updateQuantityResponse}
            onDismiss={() => props.updateQuantityResponseAction(false)}
            action={{
              label: 'Dismiss',
              onPress: () => {
                props.updateQuantityResponseAction(false);
              },
            }}
            duration={Snackbar.DURATION_MEDIUM}
          >
            Cart Quantity Updated
          </Snackbar>
        </View>
      </View>
    );
  }
};
export default connector(Home);

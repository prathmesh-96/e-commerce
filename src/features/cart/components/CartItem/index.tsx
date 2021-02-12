import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Styles from './styles';
import Iconics from 'react-native-vector-icons/Ionicons';
import { AppState } from '../../../../redux/reducer';
import { connect, ConnectedProps } from 'react-redux';
import { getCartDeleteProducts } from '../../redux/actionCreator/cartDeleteProduct';
import { updateQuantity } from '../../redux/actionCreator/updateQuantity';
import UpdateCartProducts from '../../../../types/UpdateCartProducts';

export interface cartProducts {
  product_key: string;
  // product_id: number;
  // quantity: number;
  // product_image: string;
  // product_name: string;
  // product_title: string;
  // product_price: string;
  // line_subtotal: number;

  id: number;
  item_key: string;
  title: string;
  price: number;
  discount: number;
  image: string;
  cart_quantity: number;
  cart_subtotal: number;
}

const mapState = (state: AppState) => ({
  delete_reply: state.cartProducts.cartDeleteProductReducer.reply,
});

const mapDispatch = {
  getCartDeleteProducts: (key) => getCartDeleteProducts(key),
  updateQuantity: (updateCartQuantity) => updateQuantity(updateCartQuantity),
};

const connector = connect(mapState, mapDispatch);
export interface propsFromRedux {
  PropsFromRedux: ConnectedProps<typeof connector>;
}

type Props = cartProducts & propsFromRedux;

const CartItem: React.FC<Props> = (props: Props) => {
  const {
    product_key,
    // product_name,
    // product_price,
    // quantity,
    // product_image,
    // line_subtotal,

    id,
    item_key,
    title,
    price,
    image,
    cart_quantity,
    cart_subtotal,
  } = props;
  const { getCartDeleteProducts, updateQuantity } = props;
  const [count, setCount] = useState(cart_quantity);
  const incCounter = () => {
    setCount(count + 1);
    let updateQuantityCart: UpdateCartProducts = {
      cart_item_key: item_key,
      cart_quantity: count + 1,
    };
    updateQuantity(updateQuantityCart);
  };
  const decCounter = () => {
    if (count > 0) {
      setCount(count - 1);
      let updateQuantityCart: UpdateCartProducts = {
        cart_item_key: product_key,
        cart_quantity: count - 1,
      };
      updateQuantity(updateQuantityCart);
    } else {
      setCount(count);
      let updateQuantityCart: UpdateCartProducts = {
        cart_item_key: product_key,
        cart_quantity: count,
      };
      updateQuantity(updateQuantityCart);
    }
  };

  // const { delete_reply } = props
  // var price = parseFloat(product_price.split())
  // console.log('price ==', product_price)
  // const totalPrice = price * cart_quantity;
  const removeProduct = () => {
    getCartDeleteProducts(product_key);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.productCard}>
        <View style={Styles.imageFlex}>
          <Image source={{ uri: image }} style={Styles.image} />
        </View>

        <View style={Styles.productDetails}>
          {/* <Text style={Styles.company}>{product_title}</Text> */}
          <Text style={Styles.productName}>{title}</Text>
          {/* <Text style={Styles.productInfo}>Product Details things you...</Text> */}
          <Text style={Styles.blankSpace}> {'\n'}</Text>
          <View style={Styles.counter}>
            <Text style={Styles.quantity}> {'\n'}Qty.</Text>
            <TouchableOpacity style={Styles.buttonIncDec} onPress={() => decCounter()}>
              <Iconics name="remove-circle" color="#C4C4C4" size={28} />
            </TouchableOpacity>
            <Text style={Styles.count}>{count}</Text>
            <TouchableOpacity style={Styles.buttonIncDec} onPress={() => incCounter()}>
              <Iconics name="add-circle" color="#C4C4C4" size={28} />
            </TouchableOpacity>
          </View>
          <Text style={Styles.blankSpace}> {'\n'}</Text>
          <TouchableOpacity onPress={() => removeProduct()}>
            <Text style={Styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.amount}>
          <Text style={Styles.price}>{price}</Text>
          <Text style={Styles.line}>________________</Text>
          <Text style={Styles.salePrice}>
            {'\u20B9'}
            {cart_quantity * price}
            {/* {line_subtotal} */}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default connector(CartItem);

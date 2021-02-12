import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Styles from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../../../redux/reducer';
import { setQuantityCount } from '../../redux/actionCreators/quantity';
import { useNavigation } from '@react-navigation/native';

const mapState = (state: AppState) => ({
  quantity_count: state.productDetail.quantityCountReducer.quantity_count,
});

const mapDispatch = {
  setQuantityCount: (quantity_count) => setQuantityCount(quantity_count),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
const Quantity: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  let { quantity_count } = props;
  const navigation = useNavigation();

  const [count, setCount] = useState(1);
  const incCounter = () => {
    setCount(count + 1);
    props.setQuantityCount(count + 1);
  };
  const decCounter = () => {
    if (count > 0) {
      setCount(count - 1);
      props.setQuantityCount(count - 1);
    } else {
      setCount(count);
      props.setQuantityCount(count);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      setCount(1);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={Styles.quantityContainer}>
      <Text style={Styles.quantityText}>Quantity</Text>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.minusButtonContainer} onPress={() => decCounter()}>
          <Icon name="circle-with-minus" size={20} color="gray" />
        </TouchableOpacity>
        <Text style={Styles.quantityCountText}>{count}</Text>
        <TouchableOpacity style={Styles.plusButtonContainer} onPress={() => incCounter()}>
          <Icon name="circle-with-plus" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connector(Quantity);

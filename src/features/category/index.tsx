import React, { useEffect } from 'react';
import { View } from 'react-native';
import Styles from './styles';
import ProductsList from './components/ProductHorizontalList';
import { connect, ConnectedProps } from 'react-redux';
import { getProductsByCategory } from './redux/actionCreators/productByCategory';
import { AppState } from '../../redux/reducer';
import Loader from '../../components/loader';
import { useRoute, useNavigation } from '@react-navigation/native';

const mapState = (state: AppState) => ({
  productsByCategory: state.category.productsByCategoryReducer.products,
  isLoadingProducts: state.category.productsByCategoryReducer.isLoading,
});

const mapDispatch = {
  getProductsByCategory: (categoryId, lazyload) => getProductsByCategory(categoryId, lazyload),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Category: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { productsByCategory, isLoadingProducts } = props;
  const route = useRoute();
  const { categoryId, name } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    props.getProductsByCategory(categoryId, false);
    navigation.setOptions({ title: name });
  }, []);

  if (isLoadingProducts) {
    return <Loader />;
  } else {
    return (
      <View style={Styles.container}>
        <ProductsList
          onEndReached={() => props.getProductsByCategory(categoryId, true)}
          productsByCategory={productsByCategory}
          containerStyle={Styles.listContainer}
        />
      </View>
    );
  }
};

export default connector(Category);

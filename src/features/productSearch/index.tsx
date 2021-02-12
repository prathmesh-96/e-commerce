import React from 'react';
import { View } from 'react-native';
import Styles from './styles';
import ProductsSearchList from './components/ProductSearchList';
import { connect, ConnectedProps } from 'react-redux';
import { getSearchProducts } from './redux/actionCreators/products';
import { AppState } from '../../redux/reducer';
import { useRoute } from '@react-navigation/native';
import Loader from '../../components/loader';

const mapState = (state: AppState) => ({
  searchProducts: state.productSearch.productSearchReducer.products,
  searching: state.productSearch.productSearchReducer.isLoading,
});

const mapDispatch = {
  getSearchProducts: (searchText: string, lazyload: boolean) =>
    getSearchProducts(searchText, lazyload),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SearchProducts: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { searchProducts, searching } = props;
  const route = useRoute();
  const { searchText } = route.params;

  return (
    <View style={Styles.container}>
      {searching ? (
        <Loader />
      ) : (
        <ProductsSearchList
          onEndReached={() => props.getSearchProducts(searchText, true)}
          searchProducts={searchProducts}
          containerStyle={Styles.listContainer}
        />
      )}
    </View>
  );
};

export default connector(SearchProducts);

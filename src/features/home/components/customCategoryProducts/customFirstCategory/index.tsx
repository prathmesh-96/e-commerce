import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import ListHeader from '../../listHeader';
import ProductsList from '../../ProductHorizontalList';
import { AppState } from '../../../../../redux/reducer';
import Loader from '../../../../../components/loader';
import { ConnectedProps, connect } from 'react-redux';
import { getFirstCategory } from '../../../redux/actionCreators/firstCategory';

const mapState = (state: AppState) => ({
  productsByCategory: state.home.categoryFirstReducer.products,
  isLoadingProducts: state.home.categoryFirstReducer.isLoading,
});

const mapDispatch = {
  getFirstCategory: (categoryId, lazyload) => getFirstCategory(categoryId, lazyload),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface PropsfromScreen {
  containerStyle: any;
  header: string;
  id: number;
}

type Props = PropsFromRedux & PropsfromScreen;

const CustomFirstCategory: React.FC<Props> = (props) => {
  const { header, id, productsByCategory, isLoadingProducts } = props;

  useEffect(() => {
    props.getFirstCategory(id, false);
  }, []);

  return (
    <View>
      <ListHeader header={header} />
      {isLoadingProducts ? (
        <View style={styles.cardHeight}>
          <Loader />
        </View>
      ) : (
        <ProductsList
          onEndReached={() => props.getFirstCategory(id, true)}
          products={productsByCategory}
          containerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default connector(CustomFirstCategory);

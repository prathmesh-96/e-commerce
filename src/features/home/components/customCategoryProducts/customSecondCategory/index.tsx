import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import ListHeader from '../../listHeader';
import ProductsList from '../../ProductHorizontalList';
import { AppState } from '../../../../../redux/reducer';
import Loader from '../../../../../components/loader';
import { ConnectedProps, connect } from 'react-redux';
import { getSecondCategory } from '../../../redux/actionCreators/secondCategory';

const mapState = (state: AppState) => ({
  secondCategoryProducts: state.home.categorySecondReducer.products,
  isLoadingProducts: state.home.categorySecondReducer.isLoading,
});

const mapDispatch = {
  getSecondCategory: (categoryId, lazyload) => getSecondCategory(categoryId, lazyload),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface PropsfromScreen {
  containerStyle: any;
  header: string;
  id: number;
}

type Props = PropsFromRedux & PropsfromScreen;

const CustomSecondCategory: React.FC<Props> = (props) => {
  const { header, id, secondCategoryProducts, isLoadingProducts } = props;

  useEffect(() => {
    props.getSecondCategory(id, false);
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
          onEndReached={() => props.getSecondCategory(id, true)}
          products={secondCategoryProducts}
          containerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default connector(CustomSecondCategory);

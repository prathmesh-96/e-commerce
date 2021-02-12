import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './styles';
import ProductCard from '../ProductSearchCard';
import Product from '../../../../types/Product';
import EmptyList from '../../../../components/EmptyList';

export interface Props {
  containerStyle: any;
  searchProducts: Product[];
  onEndReached: any;
}

const ProductsSearchList: React.FC<Props> = (props) => {
  const { containerStyle, searchProducts, onEndReached } = props;
  return (
    <View>
      <FlatList
        style={containerStyle}
        data={searchProducts}
        renderItem={({ item }) => (
          <ProductCard
            name={item.title}
            price={item.variants[0].price}
            image={item.images[0].src}
            products={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={Styles.seperator} />}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        ListEmptyComponent={<EmptyList emptyText={'No products found'} />}
      />
    </View>
  );
};

export default ProductsSearchList;

import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './styles';
import ProductCard from '../ProductCard';
import Product from '../../../../types/Product';
import EmptyList from '../../../../components/EmptyList';

export interface Props {
  containerStyle: any;
  productsByCategory: Product[];
  onEndReached: any;
}

const ProductsList: React.FC<Props> = (props) => {
  const { containerStyle, productsByCategory, onEndReached } = props;
  return (
    <View style={containerStyle}>
      <FlatList
        style={Styles.itemList}
        data={productsByCategory}
        renderItem={({ item }: { item: Product }) => (
          <ProductCard
            id={item.id}
            name={item.title}
            // regular_price={item.variants[0].price}
            // sale_price={item.variants[0].compare_at_price}
            image={item.images && item.images[0] && item.images[0].src}
            products={item}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={Styles.seperator} />}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        ListEmptyComponent={<EmptyList emptyText={'No products found'} />}
      />
    </View>
  );
};

export default ProductsList;

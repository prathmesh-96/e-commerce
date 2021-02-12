import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import Styles from './styles';
import ProductCard from '../ProductCard';
import Product from '../../../../types/Product';

export interface Props {
  containerStyle: any;
  products: Product[];
  onEndReached: any;
}

const ProductsList: React.FC<Props> = (props) => {
  const { containerStyle, products, onEndReached } = props;
  return (
    <SafeAreaView style={containerStyle}>
      {/* <ListHeader header={header} /> */}
      <FlatList
        style={Styles.listContainer}
        data={products}
        renderItem={({ item }: { item: Product }) => (
          <ProductCard
            id={item.id}
            name={item.title}
            price={item.variants && item.variants[0] && item.variants[0].price}
            image={item.images && item.images[0] && item.images[0].src}
            products={item}
          />
        )}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={Styles.seperator} />}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProductsList;

import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Styles from './styles';
import ProductCard from '../optionProductCard';
import Product from '../../../../types/Product';

export interface Props {
  similarProduct: Product[];
  navigation: {};
}

const OptionProductsList: React.FC<Props> = (props) => {
  const { similarProduct, navigation } = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.similarOptionContainer}>
        <Text style={Styles.titleText}> Similar Options </Text>
      </View>
      <FlatList
        style={Styles.listContainer}
        data={similarProduct}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            name={item.title}
            price={item.variants[0].price}
            image={item.images[0].src}
            short_description={item.body_html}
            products={item}
            navigation={navigation}
          />
        )}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={Styles.seperator} />}
      />
    </View>
  );
};

export default OptionProductsList;

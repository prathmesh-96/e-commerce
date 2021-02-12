import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './styles';
import Collections from '../../../../types/Collections';
import CategoryCard from '../CategoryCard';
import { Component } from 'react';

export interface Props {
  containerStyle: any;
  category: Collections[];
  onEndReached: any;
}

const CategoryList: React.FC<Props> = (props) => {
  const { containerStyle, category, onEndReached } = props;
  return (
    <View style={containerStyle}>
      <FlatList
        style={Styles.listContainer}
        data={category}
        renderItem={({ item }: { item: Collections }) => (
          <CategoryCard key={item.id} title={item.title} categoryId={item.id} />
        )}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={Styles.seperator} />}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;

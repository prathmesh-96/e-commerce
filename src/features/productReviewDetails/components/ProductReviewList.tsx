import React from 'react';
import { View, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles';
import ReviewCard from '../components/ReviewCard';
import ReviewDetails from '../../../types/ReviewDetails';
import EmptyList from '../../../components/EmptyList';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../constants';

export interface Props {
  reviews: ReviewDetails[];
  onEndReached: any;
  productId: number;
}
const ProductReviewList: React.FC<Props> = (props) => {
  const { onEndReached, reviews, productId } = props;
  console.log('on end ==', productId);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenNames.AddReviewsScreen, { productId: productId })
          }
        >
          <Text style={Styles.writeReviewText}>Write a Review</Text>
        </TouchableOpacity>
        <FlatList
          style={Styles.listContainer}
          data={reviews}
          renderItem={({ item }: { item: ReviewDetails }) => (
            <ReviewCard reviewer={item.reviewer} review={item.review} rating={item.rating} />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={Styles.seperator} />}
          onEndReachedThreshold={0.7}
          onEndReached={onEndReached}
          ListEmptyComponent={<EmptyList emptyText={'No Reviews found'} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductReviewList;

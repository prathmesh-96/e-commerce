import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants';
import Icons from 'react-native-vector-icons/Ionicons';

export interface Category {
  categoryId: number;
  title: string;
}
const data = ['bonfire', 'bookmarks', 'business', 'bus-sharp'];

const CategoryCard: React.FC<Category> = (category: Category) => {
  const { categoryId, title } = category;
  const navigation = useNavigation();

  const onPressCategory = () => {
    navigation.navigate(ScreenNames.CategoryScreen, {
      categoryId: categoryId,
      title: title,
    });
  };
  var randomNumber = Math.floor(Math.random() * 4);

  return (
    <TouchableOpacity onPress={() => onPressCategory()}>
      <View style={[Styles.container]}>
        <View style={Styles.viewConatiner}>
          <Icons name={data[randomNumber]} size={30} color={'#856464'} style={Styles.imageStyle} />
        </View>
        <View style={Styles.textContiner}>
          <Text style={Styles.textStyle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import Image from '../../../../types/Product';

export interface Props {
  productImage: Image[];
}

const ProductImage: React.FC<Props> = (props: Props) => {
  const { productImage } = props;
  const getVisibility = () => {
    let flag: boolean = true;
    if (productImage.length < 2) {
      flag = false;
    }
    return flag;
  };
  return (
    <Swiper
      style={Styles.wrapper}
      height={400}
      loop
      dot={<View style={Styles.dotContainer} />}
      paginationStyle={Styles.paggingStyle}
      showsButtons={getVisibility()}
      nextButton={<Icon name="right" size={30} color="#c1c9c4" />}
      prevButton={<Icon name="left" size={30} color="#c1c9c4" />}
      activeDot={<View style={Styles.activeDotContainer} />}
    >
      {productImage.map &&
        productImage.map((item) => {
          return (
            <View key={item.id} style={Styles.slide}>
              <FastImage
                style={Styles.image}
                source={{ uri: item.src }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          );
        })}
    </Swiper>
  );
};

export default ProductImage;

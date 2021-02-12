import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';
import Product from '../../../../types/Product';

export interface Props {
  products: Product[];
}

const ProductDescription: React.FC<Props> = (props) => {
  const { products } = props;
  const regex = /(<([^>]+)>)/gi;

  return (
    <View style={Styles.productDescriptionContainer}>
      <View style={Styles.descriptionContainer}>
        <Text style={Styles.descriptionTitleText}>Description</Text>
      </View>
      <View style={Styles.packageContainer}>
        <Text style={Styles.titleText}>
          <Text style={Styles.infoText}> {products.body_html.replace(regex, '')}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductDescription;

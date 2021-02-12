import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';

export interface EmptyListText {
  emptyText: string;
}

const EmptyList: React.FC<EmptyListText> = (props: EmptyListText) => {
  const { emptyText } = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.noData}>{emptyText}</Text>
    </View>
  );
};

export default EmptyList;

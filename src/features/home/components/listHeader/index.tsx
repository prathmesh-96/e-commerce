import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Styles from './styles';

export interface Props {
  header: string;
}

const ListHeader: React.FC<Props> = (props) => {
  const { colors } = useTheme();
  const { header } = props;

  const bgColor = { backgroundColor: colors.card };
  return (
    <View style={[Styles.container, bgColor]}>
      <Text style={Styles.headerText}>{header.toUpperCase()}</Text>
    </View>
  );
};

export default ListHeader;

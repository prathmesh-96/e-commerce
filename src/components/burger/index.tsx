import React from 'react';
import { View } from 'react-native';
import Styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Colors } from 'react-native-paper';

const Burger: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <MaterialCommunityIcons
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        name="menu"
        color={Colors.white}
        size={30}
      />
    </View>
  );
};

export default Burger;

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface Info {
  name: string;
  image: string;
  addressLine_1: string;
  addressLine_2: string;
}
const InformationCard: React.FC<Info> = (props: Info) => {
  const { name, addressLine_1, addressLine_2, image } = props;
  return (
    <SafeAreaView>
      <View style={styles.layoutContainer}>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <MaterialCommunityIcons name={image} color="#874F4F" size={22} />
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.headerName}>{name}</Text>
            <Text style={styles.textName}>{addressLine_1}</Text>
            <Text style={styles.textName}>{addressLine_2}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InformationCard;

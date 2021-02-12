import { StyleSheet, Dimensions } from 'react-native';
const imageWidth = Math.round(Dimensions.get('window').width) / 3;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 180,
    width: 140,
    borderRadius: 3,
  },
  productDetailParentContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  productImage: {
    height: 100,
    width: imageWidth,
  },
  productName: {
    fontWeight: '400',
    textAlign: 'center',
    margin: '5%',
  },
  productPrice: {
    color: '#7e7978',
  },
  categoryTag: {
    borderRadius: 3,
    height: 20,
    width: 80,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
});

export default styles;

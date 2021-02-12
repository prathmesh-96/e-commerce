import { StyleSheet, Dimensions } from 'react-native';
const imageWidth = Math.round(Dimensions.get('window').width) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    width: imageWidth,
    backgroundColor: 'white',
  },
  productImage: {
    width: '50%',
    height: 100,
    marginTop: '10%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  businessName: {
    textAlign: 'center',
    fontWeight: '700',
    marginTop: '3%',
  },
  productDetailText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: '3%',
  },
});

export default styles;

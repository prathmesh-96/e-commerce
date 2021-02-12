import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  CartIcon: {
    marginEnd: 10,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  searchIcon: {
    marginEnd: 20,
    alignSelf: 'stretch',
  },
  searchBox: {
    height: 40,
    width: screenWidth - 130,
    marginEnd: 25,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  cartIconView: {
    flexDirection: 'row',
  },

  cartBadgeStyle: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    left: 20,
    bottom: 23,
    zIndex: 2000,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },

  cartBadgeText: {
    color: '#ffffff',
  },
});

export default styles;

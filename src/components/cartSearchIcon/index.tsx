import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Searchbar } from 'react-native-paper';
import {
  getSearchProducts,
  setSearchQuery,
} from '../../features/productSearch/redux/actionCreators/products';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { navigate } from '../../navigator/NavigationService';
import { ScreenNames } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { getCartItemCount } from '../../features/home/redux/actionCreators/cartBadge';

export interface SearchState {
  searchVisibleProp: boolean;
  screenName: string;
}

const mapState = (state: AppState) => ({
  searchQuery: state.productSearch.productSearchReducer.searchQuery,
  cartItemCount: state.home.cartBadgeReducer.cartItemCount,
});

const mapDispatch = {
  getSearchProducts: (searchText: string, lazyload: boolean) =>
    getSearchProducts(searchText, lazyload),
  setSearchQuery: (searchQuery: string) => setSearchQuery(searchQuery),
  // setSearchQuery: () => clearSearchProducts(),
  getCartItemCount: () => getCartItemCount(),
};

const connector = connect(mapState, mapDispatch);

// let value = []

type Props = ConnectedProps<typeof connector> & SearchState;

const CartSearchIcon: React.FC<Props> = (props: Props) => {
  const { searchVisibleProp, searchQuery, screenName, cartItemCount } = props;
  const [searchVisible, setSearchVisible] = useState(searchVisibleProp);
  const [searchText, setSearchText] = useState(searchQuery);
  const onSearch = () => {
    // value.push(searchText)
    props.getSearchProducts(searchText, false);
  };
  const navigation = useNavigation();
  const clear = () => {
    setSearchVisible(false);
    setSearchText('');
  };

  const openCart = () => {
    navigate(ScreenNames.CartScreen);
  };

  useEffect(() => {
    props.getCartItemCount();
    if (searchVisible) {
      setSearchText(searchQuery);
      setSearchVisible(searchVisible);
    } else {
      setSearchText('');
    }
  }, [navigation, props, screenName, searchQuery, searchVisible, searchVisibleProp]);

  return (
    <View style={Styles.icons}>
      {searchVisible ? (
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={(input) => setSearchText(input)}
            value={searchText}
            style={Styles.searchBox}
            returnKeyType="search"
            autoFocus={true}
            onSubmitEditing={onSearch}
            clearIcon={() => (
              <MaterialCommunityIcons
                onPress={() => clear()}
                name="close"
                color={Colors.black}
                size={25}
              />
            )}
          />
        </View>
      ) : (
        <View style={Styles.searchIcon}>
          <MaterialCommunityIcons
            onPress={() => setSearchVisible(true)}
            name="magnify"
            color={Colors.white}
            size={32}
          />
        </View>
      )}

      <TouchableOpacity style={Styles.CartIcon} onPress={() => openCart()}>
        <View style={Styles.cartIconView}>
          <MaterialCommunityIcons name="cart" color={Colors.white} size={32} />
          <View style={Styles.cartBadgeStyle}>
            <Text style={Styles.cartBadgeText}>{cartItemCount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connector(CartSearchIcon);

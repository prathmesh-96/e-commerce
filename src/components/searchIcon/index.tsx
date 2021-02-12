import React, { useState } from 'react';
import { View } from 'react-native';
import Styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../constants';

export interface SearchState {
  searchVisibleProp: boolean;
}

const SearchIcon: React.FC<SearchState> = (searchState: SearchState) => {
  const { searchVisibleProp } = searchState;
  const [searchVisible, setSearchVisible] = useState(searchVisibleProp);
  const [searchText, setsearchText] = useState('');
  const navigation = useNavigation();
  const onSearch = () => {
    navigation.push(ScreenNames.ProductSearch, {
      searchText: searchText.toLowerCase(),
    });
  };

  return (
    <View>
      {searchVisible ? (
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={(searchText) => setsearchText(searchText)}
            value={searchText}
            style={Styles.searchBox}
            returnKeyType="search"
            onSubmitEditing={onSearch}
            clearTextOnFocus
            clearIcon={() => (
              <MaterialCommunityIcons
                onPress={() => setSearchVisible(false)}
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
    </View>
  );
};

export default SearchIcon;

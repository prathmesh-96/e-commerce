import React, { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Styles from './styles';
import ProductsList from './components/ProductHorizontalList';
import { connect, ConnectedProps } from 'react-redux';
import { getProducts } from './redux/actionCreators/products';
import { getCategories } from './redux/actionCreators/Category';
import { getCollections } from './redux/actionCreators/Collections';
import { getFeaturedProducts } from './redux/actionCreators/featuredProduct';
import { getBabyProducts } from './redux/actionCreators/babyProduct';
import { AppState } from '../../redux/reducer';
import ProductImage from './components/productImage';
import CategoryList from './components/categoryList';
import Loader from '../../components/loader';
import { clearQuantityCount } from '../productDetail/redux/actionCreators/quantity';
import CustomFirstCategory from './components/customCategoryProducts/customFirstCategory';
import CustomSecondCategory from './components/customCategoryProducts/customSecondCategory';
import { collections } from './redux/sagas';

const mapState = (state: AppState) => ({
  products: state.home.productsReducer.products,
  featuredproducts: state.home.featuredProductReducer.featuredProducts,
  categories: state.home.categoryReducer.categories,
  Collections: state.home.collectionsReducer.collections,
  babyproducts: state.home.babyProductReducer.babyProducts,
  isLoadingProducts: state.home.productsReducer.isLoading,
  isLoadingFeaturedProducts: state.home.featuredProductReducer.isLoading,
  isLoadingBabyProducts: state.home.babyProductReducer.isLoading,
  isLoadingCategories: state.home.categoryReducer.isLoading,
  isLoadingCollections: state.home.collectionsReducer.isLoading,
});

const mapDispatch = {
  getProducts: (lazyload) => getProducts(lazyload),
  getFeaturedProducts: (lazyload) => getFeaturedProducts(lazyload),
  getBabyProducts: (lazyload) => getBabyProducts(lazyload),
  getCategories: (lazyload) => getCategories(lazyload),
  getCollections: (lazyload) => getCollections(lazyload),
  clearQuantityCount: () => clearQuantityCount(),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const {
    products,
    featuredproducts,
    babyproducts,
    isLoadingProducts,
    isLoadingFeaturedProducts,
    isLoadingBabyProducts,
    categories,
    Collections,
    isLoadingCategories,
    isLoadingCollections,
  } = props;

  useEffect(() => {
    props.getProducts(false);
    props.getFeaturedProducts(false);
    props.getBabyProducts(false);
    props.getCategories(false);
    props.getCollections(false);
    props.clearQuantityCount();
  }, []);

  return (
    <ScrollView contentContainerStyle={Styles.container} showsVerticalScrollIndicator={false}>
      <View style={Styles.carouselContainer}>
        <ProductImage />
      </View>
      {/* {isLoadingCategories ? (
        <View style={Styles.categoryCardHeight}>
          <Loader />
        </View>
      ) : (
        <CategoryList
          onEndReached={() => props.getCategories(true)}
          category={categories}
          containerStyle={Styles.listContainer}
        />
      )} */}
      {isLoadingCollections ? (
        <View style={Styles.categoryCardHeight}>
          <Loader />
        </View>
      ) : (
        <CategoryList
          onEndReached={() => props.getCollections(true)}
          category={Collections}
          containerStyle={Styles.listContainer}
        />
      )}
      <View>
        {Collections.length > 0 ? (
          <CustomFirstCategory
            containerStyle={Styles.listContainer}
            header={'Featured Products'}
            id={242436047042}
          />
        ) : (
          <View style={Styles.cardHeight}>
            <Loader />
          </View>
        )}
      </View>
      {/* <View>
        {categories.length > 0 ? (
          <CustomSecondCategory containerStyle={Styles.listContainer} header={'Clothing'} id={16} />
        ) : (
          <View style={Styles.cardHeight}>
            <Loader />
          </View>
        )}
      </View> */}
      <View>
        <Text style={Styles.productsHeading}>POPULAR PRODUCTS</Text>
        {isLoadingBabyProducts ? (
          <View style={Styles.cardHeight}>
            <Loader />
          </View>
        ) : (
          <ProductsList
            onEndReached={() => props.getBabyProducts(true)}
            products={babyproducts}
            containerStyle={Styles.listContainer}
          />
        )}
      </View>
      {/* <View>
        <Text style={Styles.productsHeading}>FEATURED PRODUCTS</Text>
        {isLoadingFeaturedProducts ? (
          <View style={Styles.cardHeight}>
            <Loader />
          </View>
        ) : (
          <ProductsList
            onEndReached={() => props.getFeaturedProducts(true)}
            products={featuredproducts}
            containerStyle={Styles.listContainer}
          />
        )}
      </View> */}
      {/* <View>
        <Text style={Styles.productsHeading}>POPULAR PRODUCTS</Text>
        {isLoadingProducts ? (
          <View style={Styles.cardHeight}>
            <Loader />
          </View>
        ) : (
          <ProductsList
            onEndReached={() => props.getProducts(true)}
            products={products}
            containerStyle={Styles.listContainer}
          />
        )}
      </View> */}
    </ScrollView>
  );
};

export default connector(Home);

export default interface Product {
  src: string;
  id: number;
  name: string;
  type: string;
  featured: boolean;
  description: string;
  body_html: string;
  short_description: string;
  handle: string;
  price: number;
  compare_at_price: number;
  regular_price: number;
  sale_price: number;
  on_sale: boolean;
  purchasable: boolean;
  stock_quantity: string;
  stock_status: string;
  dimensions: Dimension;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: string;
  related_ids: number[];
  categories: Category[];
  tags: string[];
  images: Image[];
  image: string;
  category: string;
  categoryId: number;
  attributes: attribute[];
  title: string;
  variants: Variants[];
  collections: Collections[];
  searchText: string;
}

interface Variants {
  price: number;
  compare_at_price: number;
}

interface Dimension {
  length: string;
  width: string;
  height: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  collections: Collections[];
}

interface Collections {
  id: number;
  title: string;
  body_html: string;
}

interface attribute {
  id: 1;
  name: string;
  options: [];
  position: number;
  variation: boolean;
  visible: boolean;
}

interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export interface Reviews {
  product_id: number;
  reviewer: string;
  reviewerEmail: string;
  review: string;
  rating: number;
  totalReview: number;
}

export interface similarOptionProduct {
  src: string;
  id: number;
  name: string;
  type: string;
  featured: boolean;
  description: string;
  short_description: string;
  body_html: string;
  handle: string;
  price: number;
  compare_at_price: number;
  regular_price: number;
  sale_price: number;
  on_sale: boolean;
  purchasable: boolean;
  stock_quantity: string;
  stock_status: string;
  dimensions: Dimension;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: string;
  related_ids: number[];
  categories: Category[];
  tags: string[];
  images: Image[];
  image: string;
  category: string;
  categoryId: number;
  attributes: attribute[];
  title: string;
  variants: Variants[];
  collections: Collections[];
  searchText: string;
}

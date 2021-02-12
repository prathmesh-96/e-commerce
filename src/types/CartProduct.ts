export default interface CartProduct {
  // key: string;
  // product_id: number;
  // quantity: number;
  // product_image: string;
  // line_subtotal: number;
  // line_subtotal_tax: number;
  // line_total: number;
  // product_name: string;
  // product_title: string;
  // product_price: string;

  id: number;
  item_key: string;
  name: string;
  price: number;
  discount: number;
  cart_quantity: number;
  cart_subtotal_tax: number;
  cart_subtotal: number;
  image: string;
}

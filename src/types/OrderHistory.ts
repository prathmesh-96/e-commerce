export default interface OrderHistory {
  id: number;
  number: string;
  order_key: string;
  date_created: string;
  status: string;
  currency: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  customer_id: number;
  customer_note: string;
  billing: Billing;
  shipping: Shipping;
  line_items: LineItems[];
  currency_symbol: string;
}

interface Billing {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  postcode: number;
  country: string;
  state: string;
  email: string;
  phone: string;
}

interface Shipping {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  postcode: number;
  country: string;
  state: string;
}

interface LineItems {
  id: number;
  name: string;
  product_id: number;
  quantity: number;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: [];
  meta_data: [];
  sku: string;
  price: number;
}

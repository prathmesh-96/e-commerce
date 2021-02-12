export default interface PlaceOrder {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  line_items: line_item[];
  customer_id: number;
  billing: billing;
  shipping: shipping;
}

export interface line_item {
  product_id: number;
  quantity: number;
}
interface billing {
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

interface shipping {
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

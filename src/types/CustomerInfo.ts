export default interface CustomerInfo {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  billing: billing;
  shipping: shipping;
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

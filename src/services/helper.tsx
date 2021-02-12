import axios from 'axios';
import { API } from '../constants';
import { Buffer } from 'buffer';

const auth = Buffer.from(`${API.CONSUMER_KEY}:${API.CONSUMER_SECRET}`, 'utf8').toString('base64');
export const protectedAxios = axios.create({
  baseURL: API.SERVER_URL,
  headers: {
    'Content-Type': API.CONTENT_TYPE,
    Authorization: `Basic ${auth}`,
  },
});
export const unProtectedAxios = axios.create({
  baseURL: API.CART_URL,
  headers: {
    'Content-Type': API.CONTENT_TYPE,
    Authorization: `Basic ${auth}`,
  },
});

//export default unProtectedAxios

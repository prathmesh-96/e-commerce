// import { CartPro } from './components/ItemList';

// const data: CartPro[] = [
//   {
//     id: 2,
//     name: 'MONACO',
//     price: 50,
//     discount: 10,
//     company: 'Britannia',
//     image: 'https://dummyimage.com/556x985',
//   },
//   {
//     id: 4,
//     name: 'BOURBON',
//     price: 600,
//     discount: 10,
//     company: 'Xyzxyz',
//     image: 'https://dummyimage.com/556x985',
//   },
//   {
//     id: 5,
//     name: 'HIDE N SEEK',
//     price: 200,
//     discount: 10,
//     company: 'Abcabc',
//     image: 'https://dummyimage.com/556x985',
//   },
// ];

// export default data;

export const CartPro = [
  {
    id: 2,
    item_key: 'A',
    name: 'Baby Powder',
    price: 150,
    discount: 10,
    image: 'https://dummyimage.com/556x985',
    cart_quantity: 1,
    cart_subtotal: 150,
    total: 0,
  },
  {
    id: 4,
    name: 'Fish Oil Capsule',
    price: 300,
    discount: 10,
    cart_subtotal: 300,
    company: 'Xyzxyz',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5cJOUqsCSA_6o0L4n2oE_2QWxKawVvMN_g&usqp=CAU',
  },
  {
    id: 5,
    name: 'How BIG Are Your Worries (Childern Book)',
    price: 200,
    discount: 10,
    cart_subtotal: 200,
    company: 'Abcabc',
    // image: 'https://dummyimage.com/556x985',
    image:
      'data:image/jpeg;base64,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',
  },
];

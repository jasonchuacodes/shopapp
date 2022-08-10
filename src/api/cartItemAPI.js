import instance from './instance';

const cartItemAPI = {
  fecthCartItem: (id) => {
    const options = {
      method: 'GET',
      url: `cart-item/${id}`,
    };

    return instance.request(options);
  },
};
export default cartItemAPI;

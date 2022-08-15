import instance from './instance';

const cartItemAPI = {
  fetchCartItem: (id) => {
    const options = {
      method: 'GET',
      url: `cart-item/${id}`,
    };
    return instance.request(options);
  },
  addCartItem: (params) => {
    const options = {
      method: 'POST',
      url: `cart-item/new`,
      params: {
        ...params
      }
    }
    return instance.request(options);
  }
};
export default cartItemAPI;

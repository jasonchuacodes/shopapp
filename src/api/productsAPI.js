import instance from './base';

const productsAPI = {
  fetchProducts: (params) => {
    const options = {
      method: 'GET',
      url: '/products',
      params: {
        ...params,
      },
    };

    return instance.request(options);
  },
};
export default productsAPI;

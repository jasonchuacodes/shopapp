import instance from './instance';

const customersAPI = {
  fetchCustomer: (id) => {
    const options = {
      method: 'GET',
      url: `customers/${id}`,
    };

    return instance.request(options);
  },

  registerCustomer: (params) => {
    const options = {
      method: 'POST',
      url: `customers/register`,
      params: {
        ...params
      }
    };

    return instance.request(options);
  }
};
export default customersAPI;

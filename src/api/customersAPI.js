import instance from './base';

const customersAPI = {
  fetchCustomer: (id) => {
    const options = {
      method: 'GET',
      url: `customers/${id}`,
    };

    return instance.request(options);
  },
};
export default customersAPI;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerCustomer } from '../../redux/customer/customerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params, setParams] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    dispatch(registerCustomer(params))
    .then((res) => {
      const errorMessages = res.payload.errors;
      setErrors(errorMessages);

      errorMessages || navigate('/login');
    });
    console.log(params);
  };

  return (
    <div className="container mx-auto px-16 text-gray-600">
      <form action="#">
        <div className="flex justify-center mt-24 mb-16">
          <i class="fa-solid fa-cart-shopping fa-5x"></i>
        </div>
        <div className="">
          <div className="flex p-2">
            <div className="w-1/4 p-2 border-2 rounded-md flex mx-4">
              <div>First Name</div>
            </div>
            <div className="p-2 border-2 rounded w-3/4">
              <input
                onChange={handleInputChange}
                className="w-full indent-2"
                type="text"
                name="first_name"
                placeholder="FIRST NAME"
              />
            </div>
          </div>
          {errors && (
            <div className="ml-10 text-red-600 text-sm">
              {errors.first_name}
            </div>
          )}
          <div className="flex p-2">
            <div className="w-1/4 p-2 border-2 rounded-md flex mx-4">
              <div>Last Name</div>
            </div>
            <div className="p-2 border-2 rounded w-3/4">
              <input
                onChange={handleInputChange}
                className="w-full indent-2"
                type="text"
                name="last_name"
                placeholder="LAST NAME"
              />
            </div>
          </div>
          {errors && (
            <div className="ml-10 text-red-600 text-sm">{errors.last_name}</div>
          )}
          <div className="flex p-2">
            <div className="w-1/4 p-2 border-2 rounded-md flex mx-4">
              <div>Email</div>
            </div>
            <div className="p-2 border-2 rounded w-3/4">
              <input
                onChange={handleInputChange}
                className="w-full indent-2"
                type="text"
                name="email"
                placeholder="EMAIL"
              />
            </div>
          </div>
          {errors && (
            <div className="ml-10 text-red-600 text-sm">{errors.email}</div>
          )}

          <div className="flex p-2">
            <div className="w-1/4 p-2 border-2 rounded-md flex mx-4">
              <div>Address</div>
            </div>
            <div className="p-2 border-2 rounded w-3/4">
              <input
                onChange={handleInputChange}
                className="w-full indent-2"
                type="text"
                name="address"
                placeholder="ADDRESS"
              />
            </div>
          </div>
          {errors && (
            <div className="ml-10 text-red-600 text-sm">{errors.address}</div>
          )}
          <div className="flex p-2">
            <div className="w-1/4 p-2 border-2 rounded-md flex mx-4">
              <div>Contact</div>
            </div>
            <div className="p-2 border-2 rounded w-3/4">
              <input
                onChange={handleInputChange}
                className="w-full indent-2"
                type="text"
                name="contact"
                placeholder="CONTACT"
              />
            </div>
          </div>
          {errors && (
            <div className="ml-10 text-red-600 text-sm">{errors.contact}</div>
          )}
          <div className="flex p-2">
            <div className="w-1/4 p-2 border-2 rounded-md flex mx-4">
              <div>Password</div>
            </div>
            <div className="p-2 border-2 rounded w-3/4">
              <input
                onChange={handleInputChange}
                className="w-full indent-2"
                type="password"
                name="password"
                placeholder="PASSWORD"
              />
            </div>
          </div>
          {errors && (
            <div className="ml-10 text-red-600 text-sm">{errors.password}</div>
          )}
          <div className="flex justify-center mt-10">
            <div className="">
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleRegister}
                  class="p-1 text-sm text-blue-600 border-2 border-blue-300 rounded font-bold px-4 "
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

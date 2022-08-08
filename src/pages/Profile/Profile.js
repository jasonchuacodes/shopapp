/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCustomer } from '../../redux/customer/customerSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  
  useEffect(() => {
    dispatch(fetchCustomer(1)).then(res => {
      setUser(res.payload);
    });
  }, []);

  return (
    <div className="flex justify-center text-sm text-gray-600">
      <table className="border-separate border-spacing-3">
        <tbody>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">FIRST NAME</td>
            <td className="pl-4">{user.first_name}</td>
          </tr>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">LAST NAME</td>
            <td className="pl-4">{user.last_name}</td>
          </tr>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">ADDRESS</td>
            <td className="pl-4">{user.address}</td>
          </tr>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">CONTACT</td>
            <td className="pl-4">{user.contact}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;

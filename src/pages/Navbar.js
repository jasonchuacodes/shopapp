import { Link, Outlet } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { updateIsOpen } from '../redux/dropdown/dropdownSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.dropdown.isOpen);

  const handleClick = () => {
    dispatch(updateIsOpen())
  }

  return (
    <>
      <div className="pb-10 flex justify-between">
        <Link to="/shop">
          <div className="w-32 p-2 flex justify-center bg-blue-100 text-blue-800 rounded-full">
            <div className="mr-4">
              <i class="fa-solid fa-shop"></i>
            </div>
            <div className="">SHOP</div>
          </div>
        </Link>
        <div className="flex">
          <Link className="" to="/cart">
            <button
              type="submit"
              class="mr-4 relative text-sm text-gray-600 text-blue border-2 border-gray-300 rounded-full font-bold w-24 p-2"
            >
              CART
              <span className="block absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-blue-400 px-1.5 rounded-full">
                2
              </span>
            </button>
          </Link>
         
          <div className="flex justify-center dropdown relative inline-block">
            <button onClick={handleClick}>
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://source.unsplash.com/VP_4ijGm0n0"
                alt="peaky-blinder-profile"
              />
            </button>
            <Dropdown onClick={handleClick} isOpen={isOpen} />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

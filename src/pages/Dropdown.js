import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } top-10 mt-2 dropdown-content absolute min-w-16`}
    >
      <Link
        className="mb-2 rounded-lg px-1.5 bg-gray-200 block"
        to="/profile"
        onClick={onClick}
      >
        Profile
      </Link>
      <Link
        className="mb-2 rounded-lg px-1.5 bg-gray-200 block"
        to="/orders"
        onClick={onClick}
      >
        Orders
      </Link>
      <Link
        className="mb-2 rounded-lg px-1.5 bg-gray-200 block"
        to="/login"
        onClick={onClick}
      >
        Logout
      </Link>
    </div>
  );
};

export default Dropdown;

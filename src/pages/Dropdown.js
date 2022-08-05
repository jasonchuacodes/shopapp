import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } p-1 bg-gray-100 rounded-lg top-10 mt-2 dropdown-content absolute min-w-16`}
    >
      <Link
        className="mb-2 rounded-lg px-1.5 block"
        to="/profile"
        onClick={onClick}
      >
        Profile
      </Link>
      <Link
        className="mb-2 rounded-lg px-1.5 block"
        to="/orders"
        onClick={onClick}
      >
        Orders
      </Link>
      <Link
        className="rounded-lg px-1.5 block"
        to="/login"
        onClick={onClick}
      >
        Logout
      </Link>
    </div>
  );
};

export default Dropdown;

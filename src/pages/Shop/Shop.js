import { Link } from 'react-router-dom';
import {fetchProducts} from '../../redux/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts()).then((res) => {
      setProducts(res.payload);
      // console.log(res.payload);
    })
  }, []);

  console.log(products);

  return (
    <div className="pb-10 flex justify-center text-sm text-gray-600">
      <div>
        <table>
          <tbody>
            <tr className="product flex w-full mb-3">
              <td className=" ">
                <div className="flex justify-center">
                  <img
                    className="h-24 w-24 object-cover rounded-lg"
                    src="https://source.unsplash.com/OjMyiwfviQ4"
                    alt="iphone12"
                  />
                </div>
                <div className="counter flex items-center justify-center">
                  <button className="flex text-center items-center justify-center h-4 w-4 rounded-full bg-blue-400">
                    +
                  </button>
                  <div className="mx-2">{10}</div>
                  <button className="flex text-center items-center justify-center h-4 w-4 rounded-full bg-red-400">
                    -
                  </button>
                </div>
              </td>
              <td className="product-description ml-6 text-xs">
                <div className="font-bold">IPhone 12</div>
                <ul className="font-light mt-2">
                  <li>256GB</li>
                  <li>brand awefawefwefnew</li>
                  <li>brand new</li>
                </ul>
                <div className="mt-4 flex justify-end">$3.00</div>
              </td>
            </tr>
          
          </tbody>
        </table>
        <div className="flex justify-end mt-3">
          <Link to="/cart">
            <div className="rounded-lg p-2 border-1 text-gray-800 bg-gray-200 mr-2">
              Go to Cart
            </div>
          </Link>
          <button className="p-2 border-1 rounded-lg bg-blue-200 text-blue-800">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;

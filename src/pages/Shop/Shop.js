import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { fetchProducts } from '../../redux/products/productsSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import CircleMinus from '../../shared/icons/CircleMinusIcon';
import CirclePlus from '../../shared/icons/CirclePlusIcon';

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts()).then((res) => {
      setProducts(res.payload);
    });
  }, [dispatch]);

  return (
    <div className="pb-10 flex justify-center text-sm text-gray-600">
      <div>
        <table>
          <tbody>
            {products?.map((product) => {
              return (
                <Fragment key={product.id}>
                  <tr className="flex w-full mb-3">
                    <td className="">
                      <div className="flex justify-center">
                        <img
                          className="h-24 w-24 object-cover rounded-lg"
                          src={`${product.product_image}`}
                          alt="Product"
                        />
                      </div>
                      <div className="flex items-center">
                        <button>
                          <CirclePlus colorName="blue" width="20" height="20" />
                        </button>
                        <div className="mx-2">{10}</div>
                        <button>
                          <CircleMinus colorName="red" width="20" height="20" />
                        </button>
                      </div>
                    </td>
                    <td className="w-full product-description ml-6 text-xs">
                      <div className="font-bold">{product.name}</div>
                      <div className="font-light mt-2">
                        {product.description}
                      </div>
                      <div className="mt-4 flex justify-end">
                        ${product.price}
                      </div>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
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

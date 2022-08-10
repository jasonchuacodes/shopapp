import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCartItem } from '../../redux/cartItem/cartItemSlice';
import CirclePlus from '../../shared/icons/CirclePlusIcon';
import CircleMinus from '../../shared/icons/CircleMinusIcon';

/* eslint-disable react-hooks/exhaustive-deps */
const Cart = () => {
  const dispatch = useDispatch();

  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    dispatch(fetchCartItem(1)).then((res) => {
      setCartItem(res.payload);
    });
  }, []);

  useEffect(() => {
    setTotalPrice(
      cartItem.reduce((total, item) => {
        return total + item.product.price;
      }, 0)
    );
  }, [cartItem]);

  return (
    <div className="flex justify-center text-sm text-gray-600">
      <table>
        <tbody>
          {cartItem?.map((item) => {
            return (
              <Fragment key={item.product.id}>
                <tr className="flex w-full mb-3">
                  <td className="">
                    <div className="h-24 w-24 flex justify-center">
                      <img
                        className="object-cover"
                        src={`${item.product.product_image}`}
                        alt="Product"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button>
                        <CircleMinus colorName="red" width="20" height="20" />
                      </button>
                      <div className="px-2">{item.product_qty}</div>
                      <button>
                        <CirclePlus colorName="blue" width="20" height="20" />
                      </button>
                    </div>
                  </td>
                  <td className="w-full product-description ml-6 text-xs">
                    <div className="font-bold">{item.product.name}</div>
                    <div className="font-light mt-2">
                      {item.product.description}
                    </div>
                    <div className="mt-4 flex justify-end">
                      ${item.product.price}
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
        <tbody>
          <tr className="flex justify-end mt-3">
            <td>TOTAL PRICE: ${totalPrice}</td>
          </tr>
          <tr className="flex justify-end mt-3">
            <td>
              <button className="p-2 border-1 rounded-lg bg-blue-200 text-blue-800">
                PLACE ORDER
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;

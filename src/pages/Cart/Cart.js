const Cart = () => {
  return (
    <div className="flex justify-center text-sm text-gray-600">
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
        <div className="flex justify-end mt-3">
          <div>TOTAL PRICE: $30.00</div>
        </div>
        <div className="flex justify-end mt-3">
          <button className="p-2 border-1 rounded-lg bg-blue-200 text-blue-800">
            PLACE ORDER
          </button>
        </div>
      </table>
    </div>
  );
};

export default Cart;

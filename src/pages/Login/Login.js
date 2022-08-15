import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="container mx-auto px-16 text-gray-600">
      <form action="#">
        <div className="flex justify-center mt-24 mb-16">
          <i class="fa-solid fa-cart-shopping fa-5x"></i>
        </div>
        <div className="">
          <div className="flex p-2 mb-4 border-2 rounded-md">
            <div className="mx-4">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="w-full">
              <input
                className="w-full indent-2"
                type="text"
                name="username"
                placeholder="USERNAME"
              />
            </div>
          </div>
          <div className="flex p-2 mb-4 border-2 rounded-md">
            <div className="mx-4">
              <i class="fa-solid fa-lock"></i>
            </div>
            <input
              className="w-full indent-2"
              type="password"
              name="password"
              placeholder="PASSWORD"
            />
          </div>

          <div className="flex justify-center mt-20">
            <div className="">
              <div className="flex justify-center">
                <button
                  type="submit"
                  class="w-24 text-blue-600 text-blue border-2 border-blue-300 rounded font-bold py-2 px-4 "
                >
                  LOGIN
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/register"
                  class="text-sm text-gray-600 text-blue border-2 border-gray-300 rounded font-bold px-4 "
                >
                  REGISTER
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

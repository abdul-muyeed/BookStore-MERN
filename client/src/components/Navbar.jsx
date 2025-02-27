import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import avaterImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Orders",
      href: "/order",
    },
    {
      name: "Order",
      href: "/order",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <header className=" max-w-screen-2xl mx-auto md:px-40 px-5 py-6 font-primary">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className=" size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className=" absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#eaeaea] w-full py-1 md:px-8 px-6  rounded-md focus:outline"
            />
          </div>
        </div>
        <div className="flex items-center md:space-x-3 space-x-2 relative">
          {currentUser ? (
            <>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {/* <span>{isDropdownOpen.toString()}</span> */}
                <img
                  className="rounded-full size-7 ring-2 ring-blue-500"
                  src={avaterImg}
                  alt=""
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white top-8 right-0 w-48  border border-gray-300 rounded-md shadow-lg z-40">
                  <ul>
                    {navigation.map((nav, index) => (
                      <li
                        key={index}
                        className="py-2 px-4 text-sm hover:bg-gray-100"
                      >
                        <Link
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          to={nav.href}
                        >
                          {nav.name}
                        </Link>
                      </li>
                    ))}
                    <li className="py-2 px-4 text-sm hover:bg-gray-100">
                      <button className="block w-full px-4 py-2 text-sm  hover:bg-red-600 hover:text-white rounded-md" onClick={() => {logout(); setIsDropdownOpen(!isDropdownOpen)} }>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">
              <HiOutlineUser className="size-6" />
            </Link>
          )}

          {/* <HiOutlineUser className="size-6" /> */}
          <button className="">
            {" "}
            <HiOutlineHeart className="size-6 hidden sm:block" />{" "}
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-4 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

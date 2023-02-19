import React, { useEffect, useState } from "react";
import Image from "next/image";

import icFacebook from "../../../../public/images/bi_facebook.png";
import icInstagram from "../../../../public/images/ant-design_instagram-filled.png";
import icTwitter from "../../../../public/images/ant-design_twitter-circle-filled.png";
import icShoppingCart from "../../../../public/images/shopping-cart 1.png";
import icNotification from "../../../../public/images/new.png";
import Cookies from "js-cookie";

const Navbar = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");

    setToken(token);
    setRole(role);
  }, []);

  const handleLogout = () => {
    Cookies.remove("user", { path: "" });
    setToken("");
    setRole(false);
  };
  return (
    <div className="w-full shadow-md">
      <div className="container mx-auto flex flex-row justify-between h-20 items-center text-dark-blue font-semibold">
        <div id="logo"></div>
        <div className="flex flex-row items-center font-gilroy">
          <a className="mx-4 hover:opacity-80" href="#">
            Download
          </a>
          <span>|</span>
          <span className="mx-4">Ikuti kami di</span>
          <a className="px-2 hover:opacity-80" href="#">
            <Image src={icFacebook} alt="facebook" />
          </a>
          <a className="mx-2 hover:opacity-80" href="#">
            <Image src={icInstagram} alt="instagram" />
          </a>
          <a className="mx-2 hover:opacity-80" href="#">
            <Image src={icTwitter} alt="twitter" />
          </a>
        </div>
        <div className="flex flex-row items-center font-proximanova">
          <a className="mx-4 hover:opacity-80" href="#">
            <Image src={icShoppingCart} alt="shoppingcart" />
          </a>
          <a className="mx-4 hover:opacity-80" href="#">
            <Image src={icNotification} alt="notification" />
          </a>
          {token ? (
            <div className="flex flex-row items-center">
              {role === 1 ? (
                <div>
                  <a className="mx-4 hover:underline" href="/user">
                    User List
                  </a>
                </div>
              ) : (
                <div></div>
              )}
              <div className="flex space-x-2 hover:opacity-80">
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <div className="flex space-x-2 hover:opacity-80">
                <a
                  className="bg-blue-white rounded-md px-4 py-2 mx-4"
                  href="/login"
                >
                  Login
                </a>
              </div>
              <div className="flex space-x-2 hover:opacity-80 ml-4">
                <a href="/signup">Signup</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

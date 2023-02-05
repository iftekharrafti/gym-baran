import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full xs:shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold" style={{fontFamily: 'Darker Grotesque'}}>
                    <span className="w-14 h-8 text-white text-xl px-2 py-1 rounded-lg" style={{background: '#6765F0'}}>Gym</span>
                    <span className="text-xl ml-1">baran</span>
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0"  style={{fontFamily: 'Poppins'}}>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link className="text-base font-normal " href="/">Home</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link className="text-base font-normal " href="/program">Program</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link className="text-base font-normal " href="/blog">Blog</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link className="text-base font-normal " href="/about">About us</Link>
                </li>
                <li>
                    <button className="text-white font-bold py-3 px-8 rounded-lg" style={{background: '#264373'}}>
                        <Link href="/login">Log in</Link>
                    </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

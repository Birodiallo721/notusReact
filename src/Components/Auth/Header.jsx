/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = ({ isHome }) => {
  const [visibiliteMenu, setVisibiliteMenu] = useState(false);
  const [toggleMenu, SetToggleMenu] = useState(true);
  return (
    <nav
      className={`flex items-center text-gray-800  px-20 py-5  h-20  max-lg:h-auto w-full ${
        isHome ? "fixed bg-white  shadow-lg" : "text-white bg-transparent "
      } w-full font-bold  uppercase z-30 absolute   justify-between `}
    >
      <NavLink className="w-52 " to="/">
        Notus Tailwind JS
      </NavLink>
      {/* Menu hambourger */}

      <div
        className="border-1 border-gray-300 px-3 py-2 rounded-sm min-lg:hidden absolute right-16 cursor-pointer max-md:right-2  min-md:right-5"
        onClick={() => SetToggleMenu(!toggleMenu)}
      >
        <img
          className="w-5 h-5"
          src="src\assets\icons-menu.svg"
          alt="Menu hambourger"
        />
      </div>

      {/* Sous menu  */}
      <ul
        className={`flex justify-between items-center w-full  max-sm:items-center max-lg:bg-white max-lg:shadow-2xs max-lg:absolute max-lg:left-0 max-lg:top-15 max-lg:flex-col  max-lg:items-start max-lg:px-10 max-lg:pt-3 ${
          toggleMenu && "max-lg:hidden"
        } `}
      >
        <li className="flex items-center max-sm:hidden max-lg:mx-9  ">
          <i className="text-gray-400 far fa-file-alt fa-lg  mr-2"></i>
          <NavLink to="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index">
            Docs
          </NavLink>
        </li>
        <span className="flex justify-around items-center w-105  max-sm:hidden max-lg:flex-col max-lg:m-auto max-lg:h-85 max-lg:justify-evenly">
          <li>
            <span
              onClick={() => setVisibiliteMenu(!visibiliteMenu)}
              className="cursor-pointer mx-3"
            >
              Demo Pages
            </span>
            {visibiliteMenu && (
              <ul
                className={
                  "absolute right-80 top-12 bg-white mt-4 w-52 px-5 normal-case font-normal shadow-lg rounded-md  text-[#334155] z-50"
                }
              >
                <li className="text-[#98A6BB] font-bold py-2">
                  <span>Admin Layout</span>
                </li>
                <li className="py-2">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/settings">Settings</NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/tables">Tables</NavLink>
                </li>
                <li className="border-b-2 border-gray-300  py-3">
                  <NavLink to="/maps">Maps</NavLink>
                </li>
                <li className="text-[#98A6BB] font-bold py-2 ">
                  <span>Auth Layout</span>
                </li>
                <li className="py-2">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="border-b-2 border-gray-300 py-3">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="text-[#98A6BB] font-bold">
                  <span>No Layout</span>
                </li>
                <li className="py-2">
                  <NavLink to="/landing">Landing</NavLink>
                </li>
                <li className="pb-4 pt-2 ">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </ul>
            )}
            {/* flex flex-col justify-between */}
          </li>
          <li className="flex items-center mr-2">
            <i className="text-gray-400 fab fa-facebook fa-lg"></i>
            <h6 className="pl-2 hidden max-lg:flex ">share</h6>
          </li>
          <li className="flex items-center mr-2">
            <i className="text-gray-400 fab fa-twitter fa-lg"></i>
            <h6 className="pl-2 hidden max-lg:flex">Tweet</h6>
          </li>
          <li className="flex items-center mr-2">
            <i className="text-gray-400 fab fa-github fa-lg"></i>
            <h6 className="pl-2 hidden max-lg:flex">Star</h6>
          </li>
          <li>
            <button
              className={`flex items-center ${
                isHome ? "bg-[#EC4899] text-white" : "bg-white text-[#334155]"
              }  px-3.5 py-1.5 rounded-sm font-semibold uppercase`}
              type="button"
            >
              <i
                className={`${
                  isHome ? "text-white" : "text-neutral-500"
                } fas fa-arrow-alt-circle-down mr-2.5`}
              ></i>
              Download
            </button>
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Header;

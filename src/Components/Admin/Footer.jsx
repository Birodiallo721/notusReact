/* eslint-disable react/prop-types */
const Footer = ({ isAdmin }) => {
  return (
    <footer
      className={` ${
        isAdmin ? "text-[#64748b]" : "text-white"
      }   font-semibold w-full px-16 py-8`}
    >
      <hr className="text-gray-400" />
      <div className="flex justify-between items-center mt-8 px-7">
        <p>
          Copyright © 2025{" "}
          <a
            className={` ${
              isAdmin ? "hover:text-gray-800" : "hover:text-gray-400"
            }`}
            href="#"
          >
            Creative Tim
          </a>{" "}
        </p>
        <ul className="flex justify-between w-80">
          <li
            className={` ${
              isAdmin ? "hover:text-gray-800" : "hover:text-gray-400"
            }`}
          >
            <a href="#">Creative Tim</a>
          </li>
          <li
            className={` ${
              isAdmin ? "hover:text-gray-800" : "hover:text-gray-400"
            }`}
          >
            <a href="#">About Us</a>
          </li>
          <li
            className={` ${
              isAdmin ? "hover:text-gray-800" : "hover:text-gray-400"
            }`}
          >
            <a href="#">Blog MIT </a>
          </li>
          <li
            className={` ${
              isAdmin ? "hover:text-gray-800" : "hover:text-gray-400"
            }`}
          >
            <a href="#">License</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

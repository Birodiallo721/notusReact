import { NavLink } from "react-router-dom";
const NoLayout = () => {
  //   const NoLayoutPages = ["landing page", "profile page"];
  return (
    <div>
      {/* No Layout Pages */}
      <hr className="mt-10 w-56 text-gray-300" />
      <h6 className="text-[#64748b] text-sm font-bold uppercase mt-5">
        No Layout Pages
      </h6>
      <ul className="font-bold pt-3">
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) => isActive && "text-[#db2777]"}
            to="/landing"
          >
            <i className="fas fa-newspaper fa-lg mx-3"></i>
            landing page
          </NavLink>
        </li>
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) => isActive && "text-[#db2777]"}
            to="/profile"
          >
            <i className="fas fa-user-circle fa-lg mx-3"></i>
            profile page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NoLayout;

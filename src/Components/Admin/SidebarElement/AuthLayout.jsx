import { NavLink } from "react-router-dom";
const AuthLayout = () => {
  //  const AuthLayoutPages = ["login", "register"];
  return (
    <div>
      {/* Auth Layout Pages */}
      <hr className="mt-10 w-56 text-gray-300" />
      <h6 className="text-[#64748b] text-sm font-bold uppercase mt-5">
        Auth Layout Pages
      </h6>
      <ul className="font-bold pt-3">
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) => isActive && "text-[#db2777]"}
            to="/login"
          >
            <i className="fas fa-fingerprint fa-lg mx-3"></i>
            login
          </NavLink>
        </li>
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) => isActive && "text-[#db2777]"}
            to="/register"
          >
            <i className="fas fa-clipboard-list fa-lg mx-3"></i>
            register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthLayout;

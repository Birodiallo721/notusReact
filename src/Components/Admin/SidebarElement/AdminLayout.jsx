import { NavLink } from "react-router-dom";
const AdminLayout = () => {
  //   const AdminLayoutPages = ["dashboard", "settings", "tables", "maps"];
  return (
    <div>
      {/* Admin Layout Pages */}
      <hr className="mt-10 w-56 text-gray-300" />
      <h6 className="text-[#64748b] text-sm font-bold uppercase mt-5">
        Admin Layout Pages
      </h6>
      <ul className="font-bold pt-3">
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive && "text-[#db2777] flex items-center"
            }
            to="/dashboard"
          >
            <i className={`fas fa-tv fa-lg mx-3`}></i>
            dashboard{" "}
          </NavLink>
        </li>
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive && "text-[#db2777] flex items-center"
            }
            to="/settings"
          >
            <i className="fas fa-tools fa-lg mx-3"></i>
            settings{" "}
          </NavLink>
        </li>
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive && "text-[#db2777] flex items-center"
            }
            to="/tables"
          >
            <i className="fas fa-table fa-lg mx-3"></i>
            tables{" "}
          </NavLink>
        </li>
        <li className="dashList uppercase">
          <NavLink
            className={({ isActive }) => isActive && "text-[#db2777]"}
            to="/maps"
          >
            <i className="fas fa-map-marked fa-lg mx-3"></i>
            maps{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminLayout;

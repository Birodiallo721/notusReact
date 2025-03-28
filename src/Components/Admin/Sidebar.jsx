import { NavLink } from "react-router-dom";
import AdminLayout from "./SidebarElement/AdminLayout";
import NoLayout from "./SidebarElement/NoLayout";
import AuthLayout from "./SidebarElement/AuthLayout";
import Documentation from "./SidebarElement/Documentation";
const Index = () => {
  return (
    <nav className="h-screen pl-4 overflow-y-scroll pt-9 bg-white  col-start-1 col-end-2 ">
      <NavLink className="font-semibold text-lg uppercase" to="/">
        Notus Tailwind JS
      </NavLink>

      {/* Auth Layout Pages */}
      <AdminLayout />
      {/* Auth Layout Pages */}
      <AuthLayout />
      {/* No Layout Pages */}
      <NoLayout />
      {/* Documentation */}
      <Documentation />
    </nav>
  );
};

export default Index;

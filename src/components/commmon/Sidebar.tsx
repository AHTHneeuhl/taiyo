import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-5 w-32 h-[100vh] bg-white shadow-md px-4 py-6 fixed top-0 left-0">
      <NavItem active={pathname === "/"} path="/">
        Contacts
      </NavItem>
      <NavItem active={pathname === "/dashboard"} path="/dashboard">
        Graphs & Charts
      </NavItem>
      <div className="mt-auto text-xl font-medium">Sidebar</div>
    </div>
  );
};

export default Sidebar;

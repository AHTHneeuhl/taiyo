import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import { useOnClickOutside } from "../../hooks";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((value) => !value), []);
  const drawerRef = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <div className="hidden md:w-32 md:flex flex-col gap-5 h-[100vh] bg-white shadow-md px-4 py-6 fixed top-0 left-0">
        <NavItem active={pathname === "/"} path="/">
          Contacts
        </NavItem>
        <NavItem active={pathname === "/dashboard"} path="/dashboard">
          Graphs & Charts
        </NavItem>
        <div className="mt-auto text-xl font-medium">Sidebar</div>
      </div>
      <div className="md:hidden h-ful fixed top-0 left-0">
        <div
          className="p-4 md:py-1 md:px-2 m-4 border border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
        </div>
        {isOpen && (
          <div
            className="absolute flex flex-col gap-5 shadow-md px-4 py-6 w-32 h-[100vh] bg-white overflow-hidden left-0 top-0 text-sm"
            ref={drawerRef}
          >
            <NavItem active={pathname === "/"} path="/">
              Contacts
            </NavItem>
            <NavItem active={pathname === "/dashboard"} path="/dashboard">
              Graphs & Charts
            </NavItem>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

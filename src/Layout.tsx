import { Sidebar } from "./components/commmon";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-12">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-11 md:col-span-11">{children}</div>
    </div>
  );
};

export default Layout;

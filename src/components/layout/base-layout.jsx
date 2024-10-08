import { Outlet } from "react-router-dom";
import Header from "../common/header/header";

const BaseLayout = () => {
  return (
    <div className="ml-20 min-h-screen">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;

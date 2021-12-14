import { Outlet } from "react-router";
import Filter from "../components/Filter";

function Layout() {
  return (
    <div className="w-full xl:mx-auto min-w-container xl:max-w-container  text-white mt-main pt-12 overflow-hidden">
      <Filter />
      <Outlet />
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router";
import Filter from "../components/Filter";

function Layout() {
  return (
    <div className="mx-auto min-w-container xl:max-w-container h-96 text-white mt-main pt-12">
      <Filter />
      <Outlet />
    </div>
  );
}

export default Layout;

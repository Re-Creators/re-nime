import { Outlet } from "react-router";
import Filter from "../components/filters/Filter";

function Layout() {
  return (
    <div className="w-full px-2 xl:mx-auto min-w-container xl:max-w-container  text-white mt-5 lg:mt-main lg:pt-12">
      <Filter />
      <Outlet />
    </div>
  );
}

export default Layout;

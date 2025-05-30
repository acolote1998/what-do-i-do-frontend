import { createRootRoute, Outlet } from "@tanstack/react-router";
import NavBar from "../../components/NavBar";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Here we can add the HEADER */}
      <Outlet />
      <NavBar />
    </>
  ),
});

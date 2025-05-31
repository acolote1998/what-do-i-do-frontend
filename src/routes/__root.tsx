import { createRootRoute, Outlet } from "@tanstack/react-router";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <NavBar />
    </>
  ),
});

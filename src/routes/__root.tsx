import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Here we can add the HEADER */}
      <Outlet />
      {/* Here we can add the NAV BAR */}
    </>
  ),
});

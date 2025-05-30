import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../src/routeTree.gen";
import { ToastContainer } from "react-toastify";
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const Providers = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default Providers;

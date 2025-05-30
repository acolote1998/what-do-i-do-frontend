import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../src/routeTree.gen";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const Providers = () => {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router} />
        <ToastContainer />
      </ClerkProvider>
    </>
  );
};

export default Providers;

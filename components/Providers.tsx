import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../src/routeTree.gen";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ToastContainer />
        </QueryClientProvider>
      </ClerkProvider>
    </>
  );
};

export default Providers;

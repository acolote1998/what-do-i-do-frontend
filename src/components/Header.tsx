import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate({ to: "/" });
      }}
      style={{
        borderBottom: "1px solid var(--divs-border)",
        backgroundColor: "var(--divs-bg)",
      }}
      className="cursor-default z-50 h-[8.7vh] w-[100vw] fixed top-0 flex items-center justify-evenly text-center"
    >
      <h1 style={{ color: "var(--divs-text" }} className="text-4xl">
        What Do I Do?
      </h1>
      <div className="absolute right-0 mr-4">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton></SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;

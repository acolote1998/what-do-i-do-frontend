import Home from "./icons/Home";
import New from "./icons/New";
import Profile from "./icons/Profile";
const NavBar = () => {
  return (
    <div
      style={{
        borderTop: "1px solid var(--navbar-border)",
        backgroundColor: "var(--navbar-bg)",
      }}
      className="h-[8.7vh] w-[100vw] fixed bottom-0 flex items-center justify-evenly text-center"
    >
      <div className="flex flex-col mt-1 items-center text-center opacity-100">
        <Home width="4.3vh" />
        <p>Home</p>
      </div>
      <New width="7.75vh" opacity="100%" />
      <div className="flex flex-col mt-1 items-center text-center opacity-100">
        <Profile width="5.15vh" />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default NavBar;

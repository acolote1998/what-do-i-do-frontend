const Header = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--divs-border)",
        backgroundColor: "var(--divs-bg)",
      }}
      className="z-50 cursor-pointer h-[8.7vh] w-[100vw] fixed top-0 flex items-center justify-evenly text-center"
    >
      <h1 style={{ color: "var(--divs-text" }} className="text-4xl">
        What Do I Do?
      </h1>
    </div>
  );
};

export default Header;

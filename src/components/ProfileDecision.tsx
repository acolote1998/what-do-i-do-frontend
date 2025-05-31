import Container from "./Container";
import TrashCan from "./icons/TrashCan";
import View from "./icons/View";

const ProfileDecision = () => {
  return (
    <>
      <h1 style={{ color: "var(--app-titles)" }} className="text-3xl"></h1>
      <Container position="relative" heightvh="20" widthvw="80">
        <h2
          style={{ color: "var(--app-titles)" }}
          className="cursor-pointer text-xl"
        >
          Do I eat pizza tonight?
        </h2>
        <div className="flex">
          <div
            style={{
              width: "40vw",
              height: "2vh",
              backgroundColor: "var(--divs-vote-1)",
            }}
            className="flex items-center align-middle justify-start overflow-hidden text-nowrap"
          >
            <p className="ml-2">Option 1</p>
          </div>
          <div
            style={{
              width: "20vw",
              height: "2vh",
              backgroundColor: "var(--divs-vote-2)",
            }}
            className="flex items-center align-middle justify-start overflow-hidden text-nowrap"
          >
            <p className="ml-2">Option 2aaaaaaaa</p>
          </div>
        </div>
        <div className="cursor-pointer flex gap-2 absolute bottom-2 right-2">
          <View width={24}></View>
          <TrashCan width={24}></TrashCan>
        </div>
      </Container>
    </>
  );
};

export default ProfileDecision;

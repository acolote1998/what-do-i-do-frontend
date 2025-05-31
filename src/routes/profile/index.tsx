import { createFileRoute } from "@tanstack/react-router";
import Container from "../../components/Container";
import TrashCan from "../../components/icons/TrashCan";
import View from "../../components/icons/View";

export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <h1 style={{ color: "var(--app-titles)" }} className="text-3xl"></h1>
      <Container position="relative" heightvh="20" widthvw="80">
        <h2 style={{ color: "var(--app-titles)" }} className="text-lg">
          Do I eat pizza tonight?
        </h2>
        <div className="flex">
          <div
            style={{
              width: "40vw",
              height: "2vh",
              backgroundColor: "var(--divs-vote-1)",
            }}
          ></div>
          <div
            style={{
              width: "20vw",
              height: "2vh",
              backgroundColor: "var(--divs-vote-2)",
            }}
          ></div>
        </div>
        <div className="flex gap-2 absolute bottom-2 right-2">
          <View width={24}></View>
          <TrashCan width={24}></TrashCan>
        </div>
      </Container>
    </div>
  );
}

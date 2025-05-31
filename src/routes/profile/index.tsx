import { createFileRoute } from "@tanstack/react-router";
import ProfileDecision from "../../components/ProfileDecision";

export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="overflow-scroll gap-2 justify-between pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
      <h1 style={{ color: "var(--app-titles)" }} className="text-4xl m-5">
        My Decisions
      </h1>
      <ProfileDecision></ProfileDecision>
      <ProfileDecision></ProfileDecision>
      <ProfileDecision></ProfileDecision>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import ProfileDecision from "../../components/ProfileDecision";
import useDecisions from "../../hooks/useDecisions";

export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, error, isError, isPending } = useDecisions();
  return (
    <div className="overflow-scroll gap-2 justify-between pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
      <h1 style={{ color: "var(--app-titles)" }} className="text-4xl m-5">
        My Decisions
      </h1>
      {data?.map((decision) => (
        <ProfileDecision
          id={decision.id}
          description={decision.description}
          open={decision.open}
          option1={decision.option1}
          option2={decision.option2}
          title={decision.title}
          users_votes_1={decision.users_votes_1}
          users_votes_2={decision.users_votes_2}
          key={decision.id}
        />
      ))}
    </div>
  );
}

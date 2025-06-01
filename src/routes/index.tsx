import { createFileRoute } from "@tanstack/react-router";
import useDecisions from "../hooks/useDecisions";
import PublicDecision from "../components/PublicDecision";
import ActionButton from "../components/ActionButton";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, error, isError, isPending } = useDecisions();
  return (
    <div className="overflow-scroll justify-between pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
      <h1 style={{ color: "var(--app-titles)" }} className="text-3xl mt-2">
        Help Decide!
      </h1>
      {data?.map((decision) => (
        <PublicDecision
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
      <div className="m-4">
        <ActionButton widthvw="40" heightvh="7" title="Find others" />
      </div>
    </div>
  );
}

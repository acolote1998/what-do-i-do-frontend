import { createFileRoute } from "@tanstack/react-router";
import PublicDecision from "../components/PublicDecision";
import ActionButton from "../components/ActionButton";
import useThreeRandomDecisions from "../hooks/useThreeRandomDecisions";
import { useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const queryClient = useQueryClient();
  const { data, error, isError, isPending } = useThreeRandomDecisions();
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
      <div
        className="m-4"
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: ["publicDecisions"] });
        }}
      >
        <ActionButton widthvw="40" heightvh="7" title="Find others" />
      </div>
    </div>
  );
}

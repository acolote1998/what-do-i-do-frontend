import { createFileRoute } from "@tanstack/react-router";
import useDecisionsByIdAndOwner from "../../hooks/useDecisionByIdAndOwner";
import Decision from "../../components/Decision";

export const Route = createFileRoute("/decisions/$decisionId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { decisionId } = Route.useParams();
  const { data } = useDecisionsByIdAndOwner(decisionId);
  return (
    <div className="overflow-scroll gap-2 pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
      {data && (
        <Decision
          description={data.description}
          id={data.id}
          open={data.open}
          option1={data.option1}
          option2={data.option2}
          title={data.title}
          users_votes_1={data.users_votes_1}
          users_votes_2={data.users_votes_2}
        ></Decision>
      )}
    </div>
  );
}

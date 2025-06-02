import { createFileRoute } from "@tanstack/react-router";
import useDecisionsByIdAndOwner from "../../hooks/useDecisionByIdAndOwner";
import Decision from "../../components/Decision";

export const Route = createFileRoute("/decisions/$decisionId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { decisionId } = Route.useParams();
  const { data, error, isError, isPending } = useDecisionsByIdAndOwner(
    Number(decisionId)
  );
  return (
    <div className="overflow-scroll gap-2 pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
      <Decision
        description="Que hago?"
        id={0}
        open={true}
        option1="Helado"
        option2="Merca"
        title="Helado o merca"
        users_votes_1={["", "", ""]}
        users_votes_2={["", ""]}
      ></Decision>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import useDecisionsByIdAndOwner from "../../hooks/useDecisionByIdAndOwner";
import Decision from "../../components/Decision";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export const Route = createFileRoute("/decisions/$decisionId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { decisionId } = Route.useParams();
  const { data } = useDecisionsByIdAndOwner(decisionId);
  return (
    <>
      <SignedOut>
        <div className="pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center justify-center min-h-screen">
          <h1 style={{ color: "var(--app-titles)" }} className="text-2xl m-5">
            Please sign in to see the decision
          </h1>
        </div>
      </SignedOut>
      <SignedIn>
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
      </SignedIn>
    </>
  );
}

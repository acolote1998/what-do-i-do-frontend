import { useState } from "react";
import ActionButton from "../components/ActionButton";
import useCreateVote from "../hooks/useCreateVote";
import type { DecisionVoteAction, DecisionsType } from "../types/types";
import { useUser } from "@clerk/clerk-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loader from "./icons/Loader";

const Decision = ({
  id,
  description,
  open,
  option1,
  option2,
  title,
  users_votes_1,
  users_votes_2,
}: DecisionsType) => {
  const [loading, setLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { user } = useUser();

  const hasTheUserVoted1 = users_votes_1.some(
    (voter) => voter.toLowerCase() === user?.id.toLowerCase()
  );
  const hasTheUserVoted2 = users_votes_2.some(
    (voter) => voter.toLowerCase() === user?.id.toLowerCase()
  );

  const [voteToSend, setVoteToSend] = useState<DecisionVoteAction>({
    decisionId: "",
    optionToVote: "",
    whichToVote: 0,
  });
  const { mutation } = useCreateVote(voteToSend);
  const calculateBarWidth = (voters: number) => {
    if (users_votes_1.length === 0 && users_votes_2.length === 0) {
      return 30;
    }
    const totalVoters = users_votes_1.length + users_votes_2.length;
    const maxWidth = 60;
    return (voters * maxWidth) / totalVoters;
  };
  return (
    <div className="overflow-scroll pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
      {loading && <Loader></Loader>}
      <h2 style={{ color: "var(--app-titles)" }} className="text-3xl mt-3">
        {title}
      </h2>
      <textarea
        style={{
          backgroundColor: "var(--divs-bg)",
          border: "1px solid var(--divs-border)",
          color: "var(--divs-text)",
        }}
        readOnly
        className="rounded text-center w-[75vw] h-[28vh]"
        placeholder="Loading..."
        value={description}
      ></textarea>
      <h2 style={{ color: "var(--app-titles)" }} className="text-xl m-5">
        Choice A
      </h2>
      <input
        style={{
          backgroundColor: "var(--divs-bg)",
          border: "1px solid var(--divs-border)",
          color: "var(--divs-text)",
        }}
        type="text"
        className="rounded text-center w-[75vw]"
        placeholder="Loading..."
        readOnly
        value={option1}
      ></input>
      <h2 style={{ color: "var(--app-titles)" }} className="text-xl m-5">
        Choice B
      </h2>
      <input
        style={{
          backgroundColor: "var(--divs-bg)",
          border: "1px solid var(--divs-border)",
          color: "var(--divs-text)",
        }}
        type="text"
        className="rounded text-center w-[75vw]"
        placeholder="Loading..."
        value={option2}
        readOnly
      ></input>

      <div className="m-5 flex flex-row gap-2">
        {open && !hasTheUserVoted1 && !hasTheUserVoted2 ? (
          <>
            <div
              onClick={() => {
                setVoteToSend({
                  decisionId: id,
                  optionToVote: option1,
                  whichToVote: 0,
                });
                mutation.mutate();
                setLoading(true);
                setTimeout(() => {
                  toast.success("Voted Successfully!");
                  setLoading(false);
                  queryClient.invalidateQueries({
                    queryKey: ["decisionById"],
                  });
                }, 2000);
              }}
            >
              <ActionButton
                heightvh="7"
                title={`${option1}`}
                widthvw="30"
              ></ActionButton>
            </div>
            <div
              onClick={() => {
                setVoteToSend({
                  decisionId: id,
                  optionToVote: option2,
                  whichToVote: 1,
                });
                mutation.mutate();
                setLoading(true);
                setTimeout(() => {
                  toast.success("Voted Successfully!");
                  setLoading(false);
                  queryClient.invalidateQueries({
                    queryKey: ["decisionById"],
                  });
                }, 2000);
              }}
            >
              <ActionButton
                heightvh="7"
                title={`${option2}`}
                widthvw="30"
              ></ActionButton>
            </div>
          </>
        ) : (
          <div>
            <h2 style={{ color: "var(--app-titles)" }} className="text-lg m-5">
              Thank you for voting!
            </h2>
          </div>
        )}
      </div>

      <div className="flex">
        <div
          style={{
            width: `${calculateBarWidth(users_votes_1.length)}vw`,
            height: "2vh",
            backgroundColor: "var(--divs-vote-1)",
          }}
          className="flex items-center align-middle justify-start overflow-hidden text-nowrap"
        >
          <p className="ml-2">{option1}</p>
        </div>
        <div
          style={{
            width: `${calculateBarWidth(users_votes_2.length)}vw`,
            height: "2vh",
            backgroundColor: "var(--divs-vote-2)",
          }}
          className="flex items-center align-middle justify-start overflow-hidden text-nowrap"
        >
          <p className="ml-2">{option2}</p>
        </div>
      </div>
    </div>
  );
};

export default Decision;

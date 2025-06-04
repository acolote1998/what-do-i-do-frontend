import Container from "./Container";
import TrashCan from "./icons/TrashCan";
import View from "./icons/View";
import type { DecisionsType } from "../types/types";
import { useNavigate } from "@tanstack/react-router";
import useDeleteDecisionsById from "../hooks/useDeleteDecisionById";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "./icons/Loader";

const ProfileDecision = ({
  open,
  option1,
  option2,
  title,
  users_votes_1,
  users_votes_2,
  id,
}: DecisionsType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { mutation } = useDeleteDecisionsById(id);
  const navigate = useNavigate();
  const calculateBarWidth = (voters: number) => {
    if (users_votes_1.length === 0 && users_votes_2.length === 0) {
      return 30;
    }
    const totalVoters = users_votes_1.length + users_votes_2.length;
    const maxWidth = 60;
    return (voters * maxWidth) / totalVoters;
  };

  return (
    <>
      {loading && <Loader></Loader>}
      {open && (
        <>
          <h1 style={{ color: "var(--app-titles)" }} className="text-3xl"></h1>
          <Container position="relative" heightvh="20" widthvw="80">
            <h2
              style={{ color: "var(--app-titles)" }}
              className="cursor-pointer text-xl"
            >
              {title}
            </h2>
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
            <div className="cursor-pointer flex gap-2 absolute bottom-2 right-2">
              <div
                onClick={() => {
                  navigate({ to: `/decisions/${id}` });
                }}
              >
                <View width={24}></View>
              </div>
              <div
                onClick={() => {
                  mutation.mutate();
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    toast.success("Deleted Successfully!");
                    queryClient.invalidateQueries({
                      queryKey: ["profileDecisions"],
                    });
                  }, 2000);
                }}
              >
                <div>
                  <TrashCan
                    style={{ opacity: `${loading ? `0.25` : `1`}` }}
                    width={24}
                  ></TrashCan>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default ProfileDecision;

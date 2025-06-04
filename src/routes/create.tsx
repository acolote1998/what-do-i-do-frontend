import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import ActionButton from "../components/ActionButton";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import useCreateDecision from "../hooks/useCreateDecision";
import type { DecisionsType } from "../types/types";
import { toast } from "react-toastify";
import Loader from "../components/icons/Loader";

export const Route = createFileRoute("/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [decisionToCreate, setDecisionToCreate] = useState<DecisionsType>({
    description: "",
    id: "",
    option1: "",
    option2: "",
    title: "",
    users_votes_1: [],
    users_votes_2: [],
    open: true,
  });
  const { mutation } = useCreateDecision(decisionToCreate);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [choice1, setChoice1] = useState<string>("");
  const [choice2, setChoice2] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const areInputsValid = () => {
    if (title.trim() === "") {
      toast.warning("Please write a valid title");
      return false;
    }
    if (description.trim() === "") {
      toast.warning("Please write a valid description");
      return false;
    }
    if (choice1.trim() === "") {
      toast.warning("Please write a valid first choice");
      return false;
    }
    if (choice2.trim() === "") {
      toast.warning("Please write a valid second choice");
      return false;
    }

    return true;
  };
  return (
    <>
      <SignedOut>
        <div className="pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center justify-center min-h-screen">
          <h1 style={{ color: "var(--app-titles)" }} className="text-2xl m-5">
            Please sign in to create a decision
          </h1>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="overflow-scroll pt-[8.7vh] pb-[8.7vh] flex flex-col items-center text-center min-h-screen">
          {loading && <Loader></Loader>}
          <h2 style={{ color: "var(--app-titles)" }} className="text-3xl mt-3">
            Create a new decision
          </h2>
          <h2 style={{ color: "var(--app-titles)" }} className="text-xl m-5">
            Title
          </h2>
          <input
            style={{
              backgroundColor: "var(--divs-bg)",
              border: "1px solid var(--divs-border)",
              color: "var(--divs-text)",
            }}
            type="text"
            className="rounded text-center w-[75vw]"
            placeholder="Write your title here"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <h2 style={{ color: "var(--app-titles)" }} className="text-xl m-5">
            Description
          </h2>
          <textarea
            style={{
              pointerEvents: "none",
              resize: "none",
              backgroundColor: "var(--divs-bg)",
              border: "1px solid var(--divs-border)",
              color: "var(--divs-text)",
            }}
            className="rounded text-center w-[75vw] h-[28vh]"
            placeholder="Describe your situation here"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            placeholder="Write your title here"
            onChange={(e) => {
              setChoice1(e.target.value);
            }}
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
            placeholder="Write your title here"
            onChange={(e) => {
              setChoice2(e.target.value);
            }}
          ></input>
          <div
            style={{ opacity: `${loading ? `0.25` : `1`}` }}
            className="m-5"
            onClick={() => {
              if (areInputsValid()) {
                const decision: DecisionsType = {
                  id: "",
                  description: description,
                  option1: choice1,
                  option2: choice2,
                  title: title,
                  users_votes_1: [],
                  users_votes_2: [],
                  open: true,
                };
                setDecisionToCreate(decision);
                mutation.mutate();
                setLoading(true);
                setTimeout(() => {
                  navigate({ to: "/profile" });
                  toast.success("Decision Created!");
                  setLoading(false);
                }, 2000);
              }
            }}
          >
            <ActionButton
              heightvh="7"
              title="Publish Decision"
              widthvw="30"
            ></ActionButton>
          </div>
        </div>
      </SignedIn>
    </>
  );
}

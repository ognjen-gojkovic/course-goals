import React from "react";
import { NewGoalStyled } from "./NewGoal.styled";

interface Props {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal: React.FC<Props> = ({ onAddGoal }) => {
  const goal = React.useRef<HTMLInputElement>(null);
  const summary = React.useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    if (enteredGoal.length > 5 && enteredSummary.length > 5) {
      e.currentTarget.reset();
      onAddGoal(enteredGoal, enteredSummary);
    } else return;
  }

  return (
    <NewGoalStyled onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal:</label>
        <input id="goal" type="text" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary:</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goals</button>
      </p>
    </NewGoalStyled>
  );
};

export default NewGoal;

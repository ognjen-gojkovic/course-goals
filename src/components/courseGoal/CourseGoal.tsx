import React from "react";
import { CourseGoalStyled } from "./CourseGoal.styled";

interface Props {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

export const CourseGoal: React.FC<Props> = ({
  id,
  title,
  description,
  onDelete,
}) => {
  let descriptionShort = description.slice(0, 80);

  return (
    <CourseGoalStyled>
      <div>
        <h2>{title}</h2>
        <p>
          {description.length < 80
            ? description
            : descriptionShort.trimEnd() + "..."}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </CourseGoalStyled>
  );
};

export default CourseGoal;

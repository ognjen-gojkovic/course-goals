import React from "react";
import CourseGoal from "../courseGoal/CourseGoal";
import InfoBox from "../infoBox/InfoBox";
import { CGoal } from "../../App";
import { CourseGoalListStyled } from "./CourseGoalList.styled";

interface Props {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: React.FC<Props> = ({ goals, onDeleteGoal }) => {
  let warningBox: React.ReactNode;

  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You are collecting a lot of goals. Don't overflow yourself with tasks.
      </InfoBox>
    );
  }

  return (
    <CourseGoalListStyled>
      {goals.length === 0 && (
        <InfoBox mode="hint">
          You have no course goals yet. Start adding some!
        </InfoBox>
      )}
      {warningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                description={goal.description}
                onDelete={onDeleteGoal}
              />
            </li>
          );
        })}
      </ul>
    </CourseGoalListStyled>
  );
};

export default CourseGoalList;

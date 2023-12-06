import React from "react";
import Header from "./components/header/Header";
import GoalsImg from "./assets/goals.jpg";
import styled from "styled-components";
import CourseGoalList from "./components/courseGoalList/CourseGoalList";
import NewGoal from "./components/newGoal/NewGoal";
import { GlobalStyle } from "./globalStyle";

export interface CGoal {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = React.useState<CGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    return setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <AppStyled>
      <GlobalStyle />
      <Header image={{ src: GoalsImg, alt: "A list of goals." }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </AppStyled>
  );
}

const AppStyled = styled.main`
  width: 90%;
  max-width: 50rem;
  margin: 1.5rem auto;
  padding: 1rem;
  background-color: #3a4346;
  color: #f0f6f8;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export default App;

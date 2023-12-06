import styled from "styled-components";

export const CourseGoalListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 5%;

  ul {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;

    li {
      list-style: none;
      height: 120px;
      width: 49%;
      margin-top: 2%;
    }
  }
`;

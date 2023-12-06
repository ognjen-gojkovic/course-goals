import styled from "styled-components";

export const CourseGoalStyled = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding: 5px;
  height: 100%;
  min-width: 320px;
  width: 100%;
  border: 3px solid #777;

  div {
    height: 100%;
    flex: 1;
    text-align: center;
    h2 {
    }

    p {
      margin-top: 10px;
    }
  }

  button {
    width: 120px;
    height: 30px;
    margin-top: 10px;
    border: none;
    outline: none;
    box-shadow: none;
    background: orange;
    color: #fff;
    font-size: 1.2rem;
  }
`;

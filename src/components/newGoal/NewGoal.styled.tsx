import styled from "styled-components";

export const NewGoalStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 10px 0;

    label {
      font-size: 1.2rem;
      flex: 2;
    }
    input {
      padding-left: 5px;
      height: 40px;
      font-size: 1.2rem;
      flex: 8;
      outline: none;
    }

    button {
      flex: 1;
      outline: none;
      box-shadow: none;
      border: none;
      height: 40px;
      background-color: orange;
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;

import styled from "styled-components";

export const InfoBoxStyled = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 40%;
  height: 120px;
  border: 5px solid
    ${(props) => (props.className?.endsWith("hint") ? "orange" : "tomato")};
  font-size: 1.2rem;
  color: ${(props) =>
    props.className?.endsWith("hint") ? "orange" : "tomato"};
  text-align: center;
`;

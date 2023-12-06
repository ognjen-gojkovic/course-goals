import React from "react";
import { HeaderStyled } from "./Header.styled";

interface Props {
  image: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ image, children }) => {
  return (
    <HeaderStyled>
      <img src={image.src} alt={image.alt} />
      {children}
    </HeaderStyled>
  );
};

export default Header;

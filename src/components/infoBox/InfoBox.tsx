import React from "react";
import { InfoBoxStyled } from "./InfoBox.styled";

interface HintProps {
  mode: "hint";
  children: React.ReactNode;
}
interface WarningProps {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: React.ReactNode;
}

type Props = HintProps | WarningProps;

const InfoBox: React.FC<Props> = (props) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <InfoBoxStyled className="infobox-hint">
        <p>{children}</p>
      </InfoBoxStyled>
    );
  }

  const { severity } = props;

  return (
    <InfoBoxStyled className={`infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </InfoBoxStyled>
  );
};

export default InfoBox;

import React, { CSSProperties, FunctionComponent } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: FunctionComponent<Props> = (props) => {
  const { text, onClick } = props;

  return <button type="button" onClick={onClick}>{text}</button>;
};

export default Button;

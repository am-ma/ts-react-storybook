import { action } from "@storybook/addon-actions";
import React from "react";
import Button from "../Button";

const huga = "huga";
export default {
  title: "Button" + huga,
};

export const hoge = () => {
  const onClick = () => action("clicked: hoge");

  return <Button text="hoge" onClick={onClick} />;
};

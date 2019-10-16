import { action } from "@storybook/addon-actions";
import React from "react";
import Button from "../Button";

export default {
  title: "Button",
};

export const hoge = () => {
  const onClick = action("clicked: hoge");

  return <Button text="hoge" onClick={onClick} />;
};

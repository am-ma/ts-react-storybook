import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

const onClick = () => {
  console.log("clicked!");
};

ReactDOM.render(
  (
    <>
      <h1>TEST</h1>
      <Button text="Test" onClick={onClick} />
    </>
  ),
  document.getElementById("root"),
);

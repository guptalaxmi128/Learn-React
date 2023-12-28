import React from "react";

const Example = (props) => {
  // console.log(props)

  return (
    <>
      <h1>Hello {props.name}</h1>
      <h1>{props.children}</h1>
      <h2> {props.role}</h2>
    </>
  );
};

export default Example;

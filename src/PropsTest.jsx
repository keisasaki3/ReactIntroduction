import React from "react";

const PropsTest = (props) => {
  const onClickButton = () => {
    alert(props.children);
  };
  return <button onClick={onClickButton}>{props.children}</button>;
};

export default PropsTest;

import React, { useEffect, useState } from "react";

export const CountUpButton = (props) => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <p>{num}</p>
      <p>
        <button onClick={onClickCountUp}>{props.children}</button>
      </p>
      <p>
        <button onClick={onClickSwitchFaceShowFlag}>on/off</button>
        {faceShowFlag && <p>＼(^o^)／</p>}
      </p>
    </>
  );
};

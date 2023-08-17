import React from "react";
import { styled } from "styled-components";
function Guide2() {
  const Btn = styled.button`
    width: 40%;
    height: 48px;
    border: none;
    background: #1dab45;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    position: absolute;
    bottom: -300px;
    left: 30px;
  `;
  return (
    <>
      <div className="Guide2">
        <Btn onClick={onsubmit} type="submit">
          다음
        </Btn>
        <img className="Guide2_image" alt="guide2" src="img/guide2.png"></img>
      </div>
    </>
  );
}
export default Guide2;

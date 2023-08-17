import React from "react";
import { styled } from "styled-components";
function Guide4() {
  const Btn = styled.button`
    width: 40%;
    height: 48px;
    border: none;
    background: #1dab45;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    position: absolute;
    bottom: -400px;
    left: 30px;
  `;
  return (
    <>
      <div className="Guide4">
        <Btn onClick={onsubmit} type="submit">
          다음
        </Btn>
        <img className="Guide4_image" alt="guide4" src="img/guide4.png"></img>
      </div>
    </>
  );
}
export default Guide4;

import React from "react";
import { styled } from "styled-components";
function Guide5() {
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
      <div className="Guide5">
        <Btn onClick={onsubmit} type="submit">
          완료
        </Btn>
        <img className="Guide5_image" alt="guide5" src="img/guide5.png"></img>
      </div>
    </>
  );
}
export default Guide5;

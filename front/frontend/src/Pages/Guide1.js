import React from "react";
import { styled } from "styled-components";
function Guide1() {
  const Btn = styled.button`
    width: 40%;
    height: 48px;
    border: none;
    background: #1dab45;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    position: absolute;
    bottom: -100px;
    left: 30px;
  `;
  return (
    <>
      <div className="Guide1">
        <Btn onClick={() => {window.location.href="/guide2"}} type="submit">
          다음
        </Btn>
        <img className="Guide1_image" alt="guide1" src="img/guide1.png"></img>
      </div>
    </>
  );
}
export default Guide1;

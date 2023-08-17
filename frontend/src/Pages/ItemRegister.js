import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import {
  Container,
  Header,
  HeaderText,
  Input,
  InputTitle,
  Button,
} from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { Title, Center } from "../styles/basicStyles.js";

export default function ItemRegister() {
  const Button = styled.button`
    background-color: white;
    color: black;
    border-width: 3px;
    border-color: #bcc6bf;
    border-radius: 20px;
    width: 136px;
    height: 248px;
    margin: 10px;
  `;
  return (
    <>
      <GlobalStyle />
      <Header>
        <GoChevronLeft
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
        <HeaderText>상품 등록 방법 선택</HeaderText>
      </Header>
      <Container>
        <row>
          <Button onClick={ItemRegister}>동영상으로 등록하기</Button>
          <Button onClick={ItemRegister}>직접 등록하기</Button>
        </row>
        <Button onClick={ItemRegister}>상품 등록 가이드 보기</Button>
      </Container>
    </>
  );
}

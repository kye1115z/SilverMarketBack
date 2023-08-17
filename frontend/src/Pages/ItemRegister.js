import React from "react";
import GlobalStyle from "../GlobalStyle";
import {
  Container,
  Header,
  HeaderText,
  Input,
  InputTitle,
} from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { Title, Center } from "../styles/basicStyles.js";

export default function ItemRegister() {
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
        <button>동영상으로 등록하기</button>
        <button>직접 등록하기</button>
        <button>상품 등록 가이드 보기</button>
      </Container>
    </>
  );
}

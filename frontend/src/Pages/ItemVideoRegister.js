import GlobalStyle from "../GlobalStyle";
import { Container, Header, HeaderText } from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { styled } from "styled-components";

function ItemVideoRegister() {
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
        <HeaderText>상품 동영상으로 등록하기</HeaderText>
      </Header>
      <Container></Container>
    </>
  );
}

export default ItemVideoRegister;

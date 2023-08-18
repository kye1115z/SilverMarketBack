import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { Container, Header, HeaderText } from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";

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
      <Container>
        <Box>
          <Container>
            <Text style={{
                fontWeight: "bolder", color: "#23AA49"
            }}>영상을 선택해주세요!</Text>
            <Text>영상의 길이는 5분 내로 제한됩니다.</Text>
            <Text>영상 속에 다음 정보가 포함되었는지 확인해주세요.</Text>
          </Container>
        </Box>
        <Button>동영상 선택하기</Button>
      </Container>
    </>
  );
}

export default ItemVideoRegister;

const Box = styled.div`
  width: 75vw;
  height: 65vh;
  background-image: url('../img/boxcheck.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text = styled.p`
  font-size: 24px;
  width: 80%;
  margin-top: 20px;
  line-height: 120%;
`;

const Button = styled.button`
  width: 75vw;
  height: 65px;
  border: none;
  border-radius: 15px;
  font-size: 24px;
  color: white;
  background: linear-gradient(329.82deg, #23AA49 18.21%, #4BC06C 109.1%);
`; 

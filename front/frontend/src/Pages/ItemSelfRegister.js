import { useCallback, useState } from "react";
import GlobalStyle from "../GlobalStyle";
import {
  Container,
  Header,
  HeaderText,
  Input,
  InputTitle,
} from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function ItemSelfRegister() {
  // 입력값 상태값
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [origin, setOrigin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [detail, setDetail] = useState("");

  // 메시지
  const [nameMsg, setNameMsg] = useState("");
  const [categoryMsg, setCategoryMsg] = useState("");
  const [priceMsg, setPriceMsg] = useState("");
  const [originMsg, setOriginMsg] = useState("");
  const [quantityMsg, setQuantityMsg] = useState("");
  const [detailMsg, setDetailMsg] = useState("");

  // 유효성 검사 함수로 정리하기
  const [isNameValid, setIsNameValid] = useState(false);
  const [isCategoryValid, setIsCategoryValid] = useState(false);
  const [isPriceValid, setIsPriceValid] = useState(false);
  const [isOriginValid, setIsOriginValid] = useState(false);
  const [isQuantityValid, setIsQuantityValid] = useState(false);
  const [isDetailValid, setIsDetailValid] = useState(false);

  // 상품명
  const onChangeName = useCallback(async (e) => {
    const currName = e.target.value;
    setName(currName);

    if (currName.length < 2 || currName.length > 20) {
      setNameMsg("상품명을 입력해주세요");
      setIsNameValid(false);
    } else {
      setNameMsg("");
      setIsNameValid(true);
    }
  });

  //카테고리
  const onChangeCategory = useCallback(async (e) => {
    const currCategory = e.target.value;
    setCategory(currCategory);

    if (currCategory.length < 2 || currCategory.length > 4) {
      setCategoryMsg("과일, 채소, 유제품, 고기 중 카테고리를 선택해주세요.");
      setIsCategoryValid(false);
    } else {
      setCategoryMsg(`${currCategory}을(를) 선택하셨습니다.`);
      setIsCategoryValid(true);
    }
  });

  // 가격
  const onChangePrice = (getPrice) => {
    const currPrice = getPrice;
    setPrice(currPrice);
    const priceRegExp = /^[0-9]+$/;

    if (!priceRegExp.test(currPrice)) {
      setPriceMsg("숫자만 입력해주세요.");
      setIsPriceValid(false);
    } else {
      setPriceMsg("");
      setIsPriceValid(true);
    }
  };

  const addHyphen = (e) => {
    const currNumber = e.target.value;
    setPrice(currNumber);
    if (currNumber.length == 3 || currNumber.length == 8) {
      setPrice(currNumber + "-");
      onChangePrice(currNumber + "-");
    } else {
      onChangePrice(currNumber);
    }
  };

  // 원산지
  const onChangeOrigin = useCallback(async (e) => {
    const currOrigin = e.target.value;
    setOrigin(currOrigin);

    if (currOrigin.length < 2 || currOrigin.length > 20) {
      setOriginMsg("원산지를 입력해주세요");
      setIsOriginValid(false);
    } else {
      setOriginMsg("");
      setIsOriginValid(true);
    }
  });

  // 개당 수량 또는 중량
  const onChangeQuantity = useCallback(async (e) => {
    const currQuantity = e.target.value;
    setQuantity(currQuantity);

    if (currQuantity.length < 2 || currQuantity.length > 20) {
      setQuantityMsg("상품명을 입력해주세요");
      setIsQuantityValid(false);
    } else {
      setQuantityMsg("");
      setIsQuantityValid(true);
    }
  });

  // 상품 설명
  const onChangeDetail = useCallback(async (e) => {
    const currDetail = e.target.value;
    setDetail(currDetail);

    if (currDetail.length < 2 || currDetail.length > 20) {
      setDetailMsg("상품명을 입력해주세요");
      setIsDetailValid(false);
    } else {
      setDetailMsg("");
      setIsDetailValid(true);
    }
  });
  // 가입 버튼 활성화
  const isAllValid =
    isCategoryValid &&
    isNameValid &&
    isPriceValid &&
    isOriginValid &&
    isQuantityValid &&
    isDetailValid;

  // 제출버튼
  const navigate = useNavigate();
  const onsubmit = () => {
    console.log(isCategoryValid);
    console.log(isNameValid);
    console.log(isPriceValid);
    console.log(isOriginValid);
    console.log(isQuantityValid);
    console.log(isDetailValid);

    alert("상품이 등록되었습니다.");
    navigate("/login");
  };

  //회원가입 버튼 색상
  const [color, setColor] = useState("");
  const Btn = styled.button`
    width: 40%;
    height: 48px;
    border: none;
    background: ${isAllValid
      ? "linear-gradient(329.82deg, #23AA49 18.21%, #4BC06C 109.1%)"
      : "#BCC6BF"};
    border-radius: 8px;
    color: white;
    font-size: 16px;
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
        <HeaderText>상품 직접 등록하기</HeaderText>
      </Header>
      <Container style={{ paddingTop: "0px" }}>
        <div>
          <InputTitle htmlFor="image">사진 등록하기</InputTitle>
        </div>
        <form>
          <InputBox>
            <InputTitle htmlFor="name">상품명</InputTitle>
            <Input
              onChange={onChangeName}
              className="inputName"
              name="name"
              type="text"
              placeholder=""
            />
            <P>{nameMsg}</P>
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="category">카테고리</InputTitle>
            <Input
              onChange={onChangeCategory}
              className="inputCategory"
              name="Category"
              type="text"
              placeholder=""
            />
            <P>{categoryMsg}</P>
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="price">가격</InputTitle>
            <Input
              onChange={addHyphen}
              className="inputPrice"
              name="price"
              type="text"
              placeholder=""
            />
            <P>{priceMsg}</P>
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="origin">원산지</InputTitle>
            <Input
              onChange={onChangeOrigin}
              classOrigin="inputOrigin"
              name="origin"
              type="text"
              placeholder=""
            />
            <P>{originMsg}</P>
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="origin">개당 수량 또는 중량 </InputTitle>
            <Input
              onChange={onChangeQuantity}
              classQuantity="inputQuantity"
              name="quantity"
              type="text"
              placeholder=""
            />
            <P>{quantityMsg}</P>
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="detail">상품설명</InputTitle>
            <Input
              onChange={onChangeDetail}
              classDetail="inputDetail"
              name="detail"
              type="text"
              placeholder=""
            />
            <P>{detailMsg}</P>
          </InputBox>

          <Btn onClick={onsubmit} type="submit" disabled={!isAllValid}>
            상품 등록하기
          </Btn>
        </form>
      </Container>
    </>
  );
}

export default ItemSelfRegister;

const InputBox = styled.div`
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 0.85rem;
  color: red;
`;

const Select = styled.select`
  width: 20%;
  height: 30px;
  font-size: 16px;
`;

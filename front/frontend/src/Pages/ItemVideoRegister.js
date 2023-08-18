import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { Container, Header, HeaderText } from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { useCallback, useEffect, useState } from "react";

function ItemVideoRegister() {

  const checkBoxList = ['상품 외관', '상품명', '가격', '개당 수량 또는 중량', '총 수량 또는 중량', '상품 설명']

  const [checkedList, setCheckedList] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value, isChecked) => {
    if(isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if(!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (e, value) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked)
  }

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    console.log('checkedList: ', checkedList);
  },
  [checkedList])


  const [allow, setAllow] = useState(false);
  const [color, setColor] = useState("#BCC6BF");

  useEffect(() => {
    if(checkedList.length == 6) {
      setAllow((prev) => !prev)
      setColor("linear-gradient(329.82deg, #23AA49 18.21%, #4BC06C 109.1%);")
      console.log("hi")
      console.log(allow)
      console.log(color)
    }
  })

  console.log(checkedList.length)

  const Button = styled.button`
  width: 75vw;
  height: 65px;
  border: none;
  border-radius: 15px;
  font-size: 24px;
  color: white;
  background: ${color};
  margin-bottom: 20px;
`; 

  //비디오 업로드
  const [file, setFile] = useState({
    fileObject: "",
    preview_URL: "../img/fruit.svg",
    type: "image"
  });

  let inputRef;

  const [video, setVideo] = useState();
  const onChangeVideo = async (e) => {
    setVideo(e.target.files[0]);
  } 
  const saveImage = (e) => {
    e.preventDefault();
    // 미리보기 url 만들기
    const fileReader = new FileReader();
    // 파일이 존재하면 file 읽기
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0])
    }
    // 읽기 동작이 성공적으로 완료되었을 때
    // fileReader.onload = () => {
    //   const fileType = e.target.files[0].type.split("/")[0]

    //   // video일 때 시간 제한 16초
    //   if (fileType === "video") {
    //     let videoElement = document.createElement("video");
    //     videoElement.src = fileReader.result
    //     /*
    //       video 길이 제한!
    //       videoElement의 readyState가 4면 비디오가 로딩이 된 것이므로 길이를 판별할 수 있다
    //       video가 재생할 수 있는 상태로 만드는 과정이 비동기적으로 실행되기 때문에
    //       setInterval로 비디오가 로딩된 상태가 될 때까지 계속 확인하면서 기다려준다
    //     */
    //     const timer = setInterval(() => {
    //       if (videoElement.readyState == 4) {
    //         if (videoElement.duration > 300) {
    //           alert("동영상의 길이가 5분보다 길면 안됩니다")
    //         } else {
    //           setFile(
    //             {
    //               fileObject: e.target.files[0],
    //               preview_URL: fileReader.result,
    //               type: fileType
    //             }
    //           )
    //         }
    //         clearInterval(timer);
    //       }
    //     }, 500);
    //   }

    // }
  }

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
      <Container style={{paddingTop: "5px"}}>
        <Box>
          <Container>
            <Text style={{
                fontSize: "22px", fontWeight: "bolder", color: "#23AA49"
            }}>영상을 선택해주세요!</Text>
            <Text style={{fontSize: "22px"}}>영상의 길이는 5분 내로 제한됩니다.</Text>
            <Text style={{fontSize: "22px"}}>영상 속에 다음 정보가 포함되었는지 확인해주세요.</Text>
          </Container>
          <Container style={{paddingTop: "5px"}}>
            {checkBoxList.map((item, idx) => (
              <Text>
                <Input 
                  type="checkbox"
                  id={item}
                  checked={checkedList.includes(item)}
                  onChange={(e)=>checkHandler(e, item)}
                />
                {item}
              </Text>
            ))}
          </Container>
        </Box>
        <Button 
          onClick={onSubmit}
          disabled={allow}
        >
          동영상 선택하기
          <VideoInput 
            type="file"
            accept="video/*"
            onChange={onChangeVideo}
            />
        </Button>
        <Submit>
          동영상 보내기
        </Submit>
      </Container>
    </>
  );
}

export default ItemVideoRegister;

const Box = styled.div`
  width: 85vw;
  height: 70vh;
  background-image: url('../img/boxcheck.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text = styled.p`
  font-size: 20px;
  width: 80%;
  margin-top: 20px;
  line-height: 120%;
`;

const Submit = styled.button`
  width: 75vw;
  height: 65px;
  border: none;
  border-radius: 15px;
  font-size: 24px;
  color: white;
  background: linear-gradient(329.82deg, #23AA49 18.21%, #4BC06C 109.1%);
  
`; 

const Input = styled.input`
  margin-right: 10px;
  width: 17px;
  height: 17px;
`;

const VideoInput = styled.input`
`;
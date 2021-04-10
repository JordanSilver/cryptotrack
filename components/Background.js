import styled from 'styled-components';

const Background = () => {
  return (
    <BackgroundWrap>
      <Left>
        <ImgAni>
          <ImgWrap>
            <img src='./asset1.gif' alt='asset1.gif' />
          </ImgWrap>
        </ImgAni>
      </Left>
      <Right>
        <ImgAni>
          <ImgWrap>
            <img src='./asset2.gif' alt='asset2.gif' />
          </ImgWrap>
        </ImgAni>
      </Right>
    </BackgroundWrap>
  );
};

export default Background;

const BackgroundWrap = styled.div`
  position: absolute;
  height: 80vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(211, 255, 167, 1) 0%,
    rgba(255, 255, 255, 1) 5%
  );
  z-index: -100;
  display: flex;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
`;

const ImgWrap = styled.div`
  height: 200px;
  width: 200px;

  > img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }
`;

const ImgAni = styled.div`
  animation: breathe 3s infinite linear;

  @keyframes breathe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

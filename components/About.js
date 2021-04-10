import styled from 'styled-components';

const About = () => {
  return (
    <>
      <AboutWrap>
        <Left>
          <ImgWrap>
            <img src='/asset4.gif' alt='' style={{ height: '250px' }} />
          </ImgWrap>

          <p>
            Crypto Track makes real time HTTP requests to Coin Gecko's market
            API, keeping your portfolios on track. Coin Tracker uses server side
            data management to keep market prices up to date without having to
            reload the page with SilverStack custom React hooks
          </p>
        </Left>
        <Right>
          <p>
            Deploy application on the blockchain with SilverStack. Download user
            friendly templates to use and deploy applications on a secure
            blockchain network with a blockchain domain
          </p>
          <ImgWrap>
            <img src='/asset3.gif' alt='blockchain' />
          </ImgWrap>
        </Right>
      </AboutWrap>
    </>
  );
};

export default About;

const AboutWrap = styled.div`
  position: absolute;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  @media screen and (max-width: 450px) {
    height: 60vh;
    flex-direction: column;
  }
`;
const Left = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 450px) {
    > p {
      font-size: 0.7rem;
    }
  }
`;
const Right = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    > p {
      font-size: 0.7rem;
    }
  }
`;

const ImgWrap = styled.div`
  height: 200px;
  width: 350px;
  > img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
    border: solid 1.5rem rgba(255, 255, 255, 0.7);
  }
  @media screen and (max-width: 450px) {
    transform: scale(0.6);
  }
`;

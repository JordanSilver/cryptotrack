import styled from 'styled-components';
import Head from 'next/head';
import Background from '../components/Background';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Track || by SilverStack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Background />
        <Heading>
          <h6>Crypto Track</h6>
          <p>Real Time Crypto Market Prices with Coin Tracker</p>
          <p>Deploy applications on the blockchain</p>
        </Heading>
      </Hero>
    </div>
  );
}

const Hero = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 450px) {
    align-items: center;
  }
`;

const Heading = styled.div`
  color: #333;
  text-align: center;
  > h6 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  @media screen and (max-width: 450px) {
    > h6 {
    }
    > p {
      margin: 0;
      display: none;
    }
  }
`;

import Head from 'next/head';
import styled from 'styled-components';
import About from '../components/About';

export default function Apps() {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <About />
      </Hero>
    </div>
  );
}

const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(211, 255, 167, 1) 0%,
    rgba(255, 255, 255, 1) 5%
  );
`;

const Heading = styled.div`
  color: #333;
  font-size: 10rem;
`;

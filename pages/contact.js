import Head from 'next/head';
import styled from 'styled-components';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Contact NXT</Heading>
      </Hero>
    </div>
  );
}
const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  color: #333;
  font-size: 10rem;
`;

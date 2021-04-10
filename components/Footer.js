import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <div>
        <p>SilverStack cryptotrack trademark 2021 all rights reserved ~*</p>
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 5%,
    rgba(0, 0, 0, 1) 30%
  );
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

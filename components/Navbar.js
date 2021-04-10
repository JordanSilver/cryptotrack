import styled from 'styled-components';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <Nav>
        <div>
          <Link href='/' passHref>
            <StyledLink>
              <IconAnimation>
                <FaReact size={36} />
              </IconAnimation>
            </StyledLink>
          </Link>
        </div>
        <div>
          <Link href='/apps' passHref>
            <StyledLink>Apps</StyledLink>
          </Link>

          <Link
            href='https://cryptotrackernextjs.vercel.app/'
            passHref
            target='_blank'
          >
            <StyledLink>Coin Tracker</StyledLink>
          </Link>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  background: linear-gradient(
    0deg,
    rgba(211, 255, 167, 1) 0%,
    rgba(249, 255, 244, 1) 45%
  );
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const IconAnimation = styled.div`
  margin-left: 2rem;

  animation: iconflip 2s infinite linear;

  @keyframes iconflip {
    from {
      transform: translate(0, 0) rotate(0deg);
    }
    to {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

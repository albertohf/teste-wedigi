import styled from 'styled-components';
import logo from '../assets/wedigi.svg';
import cart from '../assets/cart.svg';
import strokes from '../assets/strokes.svg';

const HeaderWrapper = styled.main`
  top: 0;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;
const Divider = styled.span`
  position: absolute;
  width: 100%;
  border: 1px solid #F5F5F5;
  margin-bottom: 20px;
`

function Header() {
  return (
    <>
      <HeaderWrapper>
        <img src={strokes} alt="" />
        <img src={logo} alt="" />
        <img src={cart} alt="" />
      </HeaderWrapper>
      <Divider />
    </>
  );
}

export default Header
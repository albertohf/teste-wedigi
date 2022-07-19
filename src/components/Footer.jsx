import React from 'react'
import styled from "styled-components";
import logo from '../assets/wedigiwhite.svg';

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  color: ${({ theme }) => theme.colors.white001};
  margin-bottom: 20px;
  font-size: 10px;
`
const FooterWrapper = styled.main`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 120px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Footer() {
  return (
    <FooterWrapper>
          <Text>TODO OS DIREITOS RESERVADOS À: WE.DIGI</Text>
          <img src={logo} alt="" />
    </FooterWrapper>
  );
}

export default Footer
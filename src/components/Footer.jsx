import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <li>
          <StyledNavLink href="#">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="#">About Us</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="#">Services</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="#">Contacts</StyledNavLink>
        </li>
      </FooterLinks>

      <br />
      <FooterContentWrapper>
        <FooterContent>
          <p>&copy; 2023 CyberTask Hub. All rights reserved.</p>
          <br />
          <p>Contact us: contact@cybertaskhub.com</p>
        </FooterContent>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 20px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(26, 188, 156, 0.8) 100%
  );
  text-decoration: none;

  width: -webkit-fill-available;
`;

const FooterContent = styled.div`
  color: #a581d7;
  padding: 10px;
  text-align: center;
  display: flex;
  gap: 30px;
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1000px) {
    gap: 60px;
  }
`;

const FooterContentWrapper = styled.div`
  text-align: center;
`;
const FooterLinks = styled.ul`
  list-style: none;
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1000px) {
    gap: 80px;
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #8853d3;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding: 0;
  height: auto;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px #8338ec;
  }
`;

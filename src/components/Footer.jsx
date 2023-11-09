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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(3, 7, 222, 0.8) 100%
  );
  text-decoration: none;

  width: -webkit-fill-available;
`;

const FooterLinks = styled.ul`
  text-decoration: none;
  list-style: none;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #c850c0;
  font-size: 24px;
  margin: 0;
  padding: 0;
  height: auto;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px #c850c0;
  }
`;

import React from 'react';

import {
  FooterContainer,
  FooterContent,
  FooterContentWrapper,
  FooterLinks,
  StyledNavLink,
} from './FooterStyled';

const Footer = () => {
  return (
    <FooterContainer transition={{ delay: 0.7 }}>
      <FooterLinks
        initial={{ y: '+100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <li>
          <StyledNavLink
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            href="#"
          >
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            href="#"
          >
            About Us
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            initial={{ x: '+100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            href="#"
          >
            Services
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            initial={{ x: '+100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            href="#"
          >
            Contacts
          </StyledNavLink>
        </li>
      </FooterLinks>

      <br />
      <FooterContentWrapper>
        <FooterContent
          initial={{ y: +50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; 2023 CyberTask Hub. All rights reserved.</p>
          <br />
          <p>Contact us: contact@cybertaskhub.com</p>
        </FooterContent>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

export default Footer;

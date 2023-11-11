import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>About Us</AboutUsTitle>
      <AboutUsContent>
        <p>
          Welcome to CyberTask Hub, the futuristic productivity platform where
          technology meets organization. At CyberTask Hub, we believe in
          revolutionizing the way you manage tasks and connect with others in a
          cyberpunk-inspired environment.
        </p>
        <p>
          Our journey began with a vision to create a unique and visually
          stunning platform that blends cutting-edge design with seamless
          functionality. Whether you're a cyberpunk enthusiast or simply someone
          looking for an innovative way to stay organized, CyberTask Hub has
          something special for you.
        </p>
        <p>
          Meet our talented team of developers, designers, and creative minds
          who have worked tirelessly to bring CyberTask Hub to life. Each member
          is passionate about technology, design, and creating an unparalleled
          user experience for our community.
        </p>
        <p>
          Explore our features, dive into the neon-lit world of task management,
          and join us on this exciting journey into the future. We are dedicated
          to pushing boundaries and setting new standards for productivity in
          the digital age.
        </p>
        <p>
          Thank you for being a part of CyberTask Hub. Stay connected, stay
          productive, and welcome to the future of organization!
        </p>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default About;

const AboutUsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: rgba(13, 105, 87, 0.5);
  border-radius: 30px;
`;

const AboutUsTitle = styled.h2`
  color: #c8b6ff;
  font-size: 36px;
  margin-bottom: 20px;
`;

const AboutUsContent = styled.div`
  line-height: 1.6;
  font-size: 20px;
  font-weight: 500;
  background-color: #c8b6ff;
  -webkit-background-clip: text;
  color: transparent;
`;

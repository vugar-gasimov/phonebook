import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to CyberTask Hub! 🚀</Title>
      <Subtitle>
        Explore the Futuristic World of Productivity in true cyberpunk style.
        Immerse yourself in a digital realm where productivity meets the future.
      </Subtitle>
      <Features>
        <Feature>
          <FeatureTitle>CyberTask Manager</FeatureTitle>
          <FeatureDescription>
            Unleash the power of our advanced task manager, seamlessly blending
            cyberpunk aesthetics with efficient organization. Manage tasks
            effortlessly, from daily to-do lists to long-term projects.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Neon Phonebook</FeatureTitle>
          <FeatureDescription>
            Connect with your contacts in style! Our Neon Phonebook lets you
            store and manage your cyber-contacts with flair. Neon-lit profiles
            and a streamlined interface make staying in touch a futuristic
            experience.
          </FeatureDescription>
        </Feature>
        {/* Add more features as needed */}
      </Features>
      <GetStarted>
        <GetStartedTitle>Get Started</GetStartedTitle>
        <GetStartedDescription>
          Create your CyberTask Hub account now to embark on a journey of
          unparalleled productivity and style. Whether you're a cyberpunk
          enthusiast or just someone looking for a new, visually appealing way
          to manage tasks, CyberTask Hub is your gateway to the future of
          organization.
        </GetStartedDescription>
      </GetStarted>
      <Footer>
        <ConnectivityInfo>
          🌐 Stay Connected, Stay Productive – Welcome to CyberTask Hub!
        </ConnectivityInfo>
      </Footer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #c8b6ff;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0,
    rgba(26, 188, 156, 0.8) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Feature = styled.div`
  flex: 1 1 300px;
  background-color: rgba(51, 51, 51, 0.6);
  padding: 20px;
  border-radius: 8px;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 20px;
`;

const GetStarted = styled.div`
  margin-top: 40px;
`;

const GetStartedTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const GetStartedDescription = styled.p`
  font-size: 20px;
`;

const Footer = styled.footer`
  margin-top: 40px;
`;

const ConnectivityInfo = styled.p`
  font-size: 1.2em;
`;

export default Home;

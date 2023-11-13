import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeContainer = styled.div`
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

export const Title = styled(motion.h1)`
  margin-bottom: 20px;
`;

export const Subtitle = styled(motion.p)`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Feature = styled(motion.div)`
  flex: 1 1 300px;
  background-color: rgba(51, 51, 51, 0.6);
  padding: 20px;
  border-radius: 8px;
`;

export const FeatureTitle = styled(motion.h2)`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled(motion.p)`
  font-size: 20px;
`;

export const GetStarted = styled.div`
  color: #3a0ca3;
  margin-top: 40px;
`;

export const GetStartedTitle = styled(motion.h2)`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const GetStartedDescription = styled(motion.p)`
  font-size: 20px;
`;

export const Footer = styled.footer`
  margin-top: 40px;
`;

export const ConnectivityInfo = styled(motion.p)`
  color: #f72585;
  font-size: 1.2em;
`;

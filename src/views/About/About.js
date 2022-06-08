import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
 
  Hero,

  Story

} from './components';

const About = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Story />
      </Container>
     
    </Main>
  );
};

export default About;

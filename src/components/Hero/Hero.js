import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, I am Michael Mukiri
      </SectionTitle>
      <SectionText></SectionText>
      <a href="#about">
        <Button>Learn More</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
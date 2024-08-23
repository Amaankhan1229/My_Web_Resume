import React from "react";
import HeroBgAnimation from "../HeroBgAnimation/index.js";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroSectionStyle.js";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants.js";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              src="http://lh3.googleusercontent.com/pw/AP1GczOVlF71EAMciFC8079UO39pxTxJVRYPEea5VXzcZhnQoi4sk8_Z3Zz1TEpyW251mfJ2Q9Gkq_6rRWcnawoa9k6jtcCfu6IUkuXEOh8DYKE_AI4skjYGpmSOErODmpYMhbBBB0WL6d11ZctQgxZzfPOI7Q=w494-h878-s-no-gm?authuser=0"
              alt="hero-image"
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

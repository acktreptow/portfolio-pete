import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const profilePicture = "https://i.pravatar.cc/150?img=7";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src={profilePicture} name="Pete" size="2xl" />
    <VStack>
      <Heading size="md" mb="10">
        {greeting}
      </Heading>
      <Heading size="2xl" pb="3">
        {bio1}
      </Heading>
      <Heading size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

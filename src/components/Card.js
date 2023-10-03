import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bgColor="white" align="left" rounded="2xl">
      <Image src={imageSrc} rounded="2xl" />
      <Heading color="black" pl={5} pt={3} size="md">
        {title}
      </Heading>
      <Text color="grey" px={5} py={1} fontSize="lg">
        {description}
      </Text>
      <HStack pl={5} pb={5}>
        <Text color="black" fontWeight="medium">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;

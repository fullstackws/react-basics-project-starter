/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Tag,
  Button,
  Collapse,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipe, onBack }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the foldable section

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  // Determine if the screen size is mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p={0} mx="auto" bg="blue.100">
      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Button
          colorScheme="teal"
          onClick={onBack}
          variant="solid"
          size="lg"
          leftIcon={<ChevronLeftIcon w={5} h={5} />}
          borderRadius="md"
          _hover={{ bg: "teal.600", color: "white" }}
          _active={{ bg: "teal.700" }}
          fontSize={{ base: "sm", md: "lg" }}
          whiteSpace="nowrap"
        >
          <Text display={{ base: "none", sm: "block" }}>Back to List</Text>
        </Button>
      </Flex>
      <Flex mb={0} flexDirection={{ base: "column", md: "row" }}>
        <Box
          w={{ base: "100%", md: "25%" }}
          bg="lightblue"
          display={{ base: "block", md: "block" }}
        />
        <Box
          w={{ base: "100%", md: "80%" }}
          h={{ base: "auto", md: "50vh" }}
          p={0}
        >
          <Image
            src={recipe.image}
            alt={recipe.label}
            boxSize="100%"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "25%" }}
          bg="lightblue"
          display={{ base: "block", md: "block" }}
        />
      </Flex>
      <Flex w="100%" flexDirection="column">
        <Box bg="white" p={0} />
        <Flex w="100%" flexDirection={{ base: "column", md: "row" }}>
          <Box
            w={{ base: "100%", md: "25%" }}
            bg="lightblue"
            display={{ base: "block", md: "block" }}
          />
          <Box w={{ base: "100%", md: "50%" }} bg="white" p={6}>
            <Flex flexDirection="row">
              <Box w="50%" p={6}>
                <Text
                  fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }} // Scalable font size
                  fontWeight="bold"
                  mb={2}
                >
                  {recipe.mealType}
                </Text>
                <Heading
                  as="h1"
                  size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
                  mb={2}
                  whiteSpace="normal" // Allow wrapping
                  lineHeight={{ base: "1.2", md: "1.5" }} // Adjust line height for better spacing
                  wordBreak="normal" // Prevent breaking long words
                  overflowWrap="normal" // Override overflow-wrap
                  wordWrap="normal" // Override word-wrap
                >
                  {recipe.label}
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }} // Scalable font size
                  fontWeight="bold"
                  mb={2}
                >
                  Total cooking time: {recipe.totalTime || "N/A"} Minutes
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }} // Scalable font size
                  fontWeight="bold"
                  mb={4}
                >
                  Servings: {recipe.yield}
                </Text>
                <Heading
                  as="h3"
                  size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                  mb={2}
                >
                  Ingredients:
                </Heading>
                <Box as="ul" pl={6} mb={4}>
                  {recipe.ingredientLines.map((ingredient, index) => (
                    <Box as="li" key={index} mb={1} color="gray.600">
                      {ingredient}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box w="50%" p={6}>
                <Heading
                  as="h3"
                  size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                  mb={2}
                >
                  Health labels:
                </Heading>
                <Flex flexWrap="wrap" mb={4}>
                  {recipe.healthLabels.slice(0, 2).map((label, index) => (
                    <Tag
                      key={index}
                      size="md" // Change size to 'md' for larger text
                      colorScheme="purple"
                      m={1}
                      borderRadius="full"
                      fontSize={{ base: "md", md: "md", lg: "lg", xl: "xl" }} // Increased scalable font size for health labels
                      px={4} // Wider background for health labels
                    >
                      {label}
                    </Tag>
                  ))}
                  {isMobile && (
                    <Button
                      onClick={() => setIsOpen(!isOpen)}
                      size="sm"
                      m={1}
                      bg="purple.100"
                      color="purple.800"
                      borderRadius="full"
                    >
                      {isOpen ? "Hide" : "Show"}
                    </Button>
                  )}
                  {isMobile && (
                    <Collapse in={isOpen} animateOpacity>
                      <Flex flexWrap="wrap" mb={4}>
                        {recipe.healthLabels.slice(2).map((label, index) => (
                          <Tag
                            key={index}
                            size="md" // Change size to 'md' for larger text
                            colorScheme="purple"
                            m={1}
                            borderRadius="full"
                            fontSize={{
                              base: "md",
                              md: "lg",
                              lg: "lg",
                              xl: "xl",
                            }} // Increased scalable font size for health labels
                            px={4} // Wider background for health labels
                          >
                            {label}
                          </Tag>
                        ))}
                      </Flex>
                    </Collapse>
                  )}
                  {!isMobile && (
                    <Flex flexWrap="wrap" mb={4}>
                      {recipe.healthLabels.slice(2).map((label, index) => (
                        <Tag
                          key={index}
                          size="md" // Change size to 'md' for larger text
                          colorScheme="purple"
                          m={1}
                          borderRadius="full"
                          fontSize={{
                            base: "md",
                            md: "lg",
                            lg: "lg",
                            xl: "xl",
                          }} // Increased scalable font size for health labels
                          px={4} // Wider background for health labels
                        >
                          {label}
                        </Tag>
                      ))}
                    </Flex>
                  )}
                </Flex>

                <Heading
                  as="h3"
                  size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                  mb={2}
                >
                  Diet labels:
                </Heading>
                <Flex flexWrap="wrap" mb={4}>
                  {recipe.dietLabels.map((label, index) => (
                    <Tag
                      key={index}
                      size="md" // Change size to 'md' for larger text
                      colorScheme="green"
                      m={1}
                      borderRadius="full"
                      fontSize={{ base: "md", md: "lg", lg: "lg", xl: "xl" }} // Increased scalable font size
                    >
                      {label}
                    </Tag>
                  ))}
                </Flex>
                {recipe.cautions.length > 0 && (
                  <Box mb={4}>
                    <Heading
                      as="h3"
                      size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                      mb={2}
                    >
                      Cautions:
                    </Heading>
                    <Flex flexWrap="wrap">
                      {recipe.cautions.map((caution, index) => (
                        <Tag
                          key={index}
                          size="md" // Change size to 'md' for larger text
                          colorScheme="red"
                          m={1}
                          borderRadius="full"
                          maxWidth="100%"
                          style={{ whiteSpace: "normal" }}
                          fontSize={{
                            base: "md",
                            md: "lg",
                            lg: "lg",
                            xl: "xl",
                          }} // Increased scalable font size
                        >
                          {caution}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                )}
                <Box>
                  <Heading
                    as="h3"
                    size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                    mb={2}
                  >
                    Total Nutrients:
                  </Heading>
                  <Text color="gray.700">
                    Calories: {recipe.calories.toFixed(0)} kcal
                  </Text>
                  <Text color="gray.700">
                    Carbs: {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} g
                  </Text>
                  <Text color="gray.700">
                    Protein: {recipe.totalNutrients.PROCNT.quantity.toFixed(0)}{" "}
                    g
                  </Text>
                  <Text color="gray.700 ">
                    Fat: {recipe.totalNutrients.FAT.quantity.toFixed(0)} g
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box
            w={{ base: "100%", md: "25%" }}
            bg="lightblue"
            display={{ base: "block", md: "block" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecipePage;

/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Heading, Image, Text, Flex, Tag, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipe, onBack }) => {
  return (
    <Box p={0} mx="auto">
      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Button
          colorScheme="teal"
          onClick={onBack}
          variant="ghost"
          leftIcon={<ChevronLeftIcon w={8} h={8} />}
          fontSize="xl"
        >
          Back to list
        </Button>
      </Flex>

      <Flex mb={0}>
        <Box
          w="25%"
          bg="lightblue"
          p={0}
          borderLeft="none"
          borderRight="none"
        />
        <Box w="50%" h="50vh" p={0}>
          <Image
            src={recipe.image}
            alt={recipe.label}
            boxSize="100%"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box
          w="25%"
          bg="lightblue"
          p={0}
          borderLeft="none"
          borderRight="none"
        />
      </Flex>

      <Flex w="100%" maxHeight="100vh" flexDirection="column">
        <Box bg="white" p={0} />
        <Flex w="100%" h="100%" flexDirection="row">
          <Box
            w="25%"
            bg="lightblue"
            p={0}
            borderLeft="none"
            borderRight="none"
          />
          <Box w="50%" bg="white" p={6}>
            <Flex flexDirection="row">
              <Box w="50%" p={6}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {recipe.mealType}
                </Text>
                <Heading as="h1" size="lg" mb={2}>
                  {recipe.label}
                </Heading>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Total cooking time: {recipe.totalTime || "N/A"} Minutes
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                  Servings: {recipe.yield}
                </Text>
                <Heading as="h3" size="md" mb={2}>
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
                <Heading as="h3" size="md" mb={2}>
                  Health labels:
                </Heading>
                <Flex flexWrap="wrap" mb={4}>
                  {recipe.healthLabels.map((label, index) => (
                    <Tag
                      key={index}
                      size="lg"
                      colorScheme="purple"
                      m={1}
                      borderRadius="full"
                    >
                      {label}
                    </Tag>
                  ))}
                </Flex>
                <Heading as="h3" size="md" mb={2}>
                  Diet labels:
                </Heading>
                <Flex flexWrap="wrap" mb={4}>
                  {recipe.dietLabels.map((label, index) => (
                    <Tag
                      key={index}
                      size="lg"
                      colorScheme="green"
                      m={1}
                      borderRadius="full"
                    >
                      {label}
                    </Tag>
                  ))}
                </Flex>
                {recipe.cautions.length > 0 && (
                  <Box mb={4}>
                    <Heading as="h3" size="md" mb={2}>
                      Cautions:
                    </Heading>
                    <Text color="gray.700">{recipe.cautions.join(", ")}</Text>
                  </Box>
                )}
                <Box>
                  <Heading as="h3" size="md" mb={2}>
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
                  <Text color="gray.700">
                    Fat: {recipe.totalNutrients.FAT.quantity.toFixed(0)} g
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box
            w="25%"
            bg="lightblue"
            p={6}
            borderLeft="none"
            borderRight="none"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecipePage;

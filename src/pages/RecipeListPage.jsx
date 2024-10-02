/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import { data } from "../utils/data";

const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [healthLabel, setHealthLabel] = useState("");

  const filteredRecipes = data.hits.filter((recipe) => {
    const nameMatches = recipe.recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const healthLabelMatches = recipe.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      (nameMatches || healthLabelMatches) &&
      (healthLabel === "" || recipe.recipe.healthLabels.includes(healthLabel))
    );
  });

  return (
    <Box bg="lightblue" minHeight="100vh" p={0}>
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Recipe List
      </Heading>
      <Box
        bg="white"
        p={4}
        m={2}
        borderRadius="lg"
        boxShadow="md"
        minWidth="430px"
        maxWidth="630px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex mb={4}>
          <Input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            mr={2}
            m={0} // Set margin to 0
          />
          <Select
            value={healthLabel}
            onChange={(e) => setHealthLabel(e.target.value)}
            m={0} // Set margin to 0
          >
            <option value="">All health labels</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Sesame-Free">Sesame-Free</option>
            {/* Add more health labels as needed */}
          </Select>
        </Flex>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" m={0}>
        {filteredRecipes.map((recipe) => (
          <Box
            key={recipe.recipe.id} // Use the id for the key
            p={4}
            m={2} // This can stay as it is for outer spacing
            borderRadius="lg"
            boxShadow="md"
            bg="white"
            cursor="pointer"
            onClick={() => onSelectRecipe(recipe.recipe)}
            width="300px"
            display="flex"
            flexDirection="column"
          >
            <Image
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              width="100%"
              height="150px"
              objectFit="cover"
            />
            <Heading as="h2" size="md" mb={2} textAlign="center">
              {recipe.recipe.label}
            </Heading>
            <Flex flexWrap="wrap" justifyContent="center" m={0}>
              {recipe.recipe.dietLabels
                .filter(
                  (dietLabel) =>
                    dietLabel !== "Vegan" && dietLabel !== "Vegetarian"
                )
                .map((dietLabel, index) => (
                  <Box
                    key={`${recipe.recipe.id}-${dietLabel}`} // Use a combination of recipe id and diet label for uniqueness
                    bg="lightgreen"
                    color="darkgreen"
                    px={2}
                    py={1}
                    borderRadius="md"
                    mr={2}
                    mb={2}
                    fontWeight="bold"
                  >
                    {dietLabel}
                  </Box>
                ))}
              {recipe.recipe.healthLabels.includes("Vegan") && (
                <Box
                  bg="#7808ff54"
                  color="#5704bb"
                  px={2}
                  py={1}
                  borderRadius="md"
                  mr={2}
                  mb={2}
                  fontWeight="bold"
                >
                  Vegan
                </Box>
              )}
              {recipe.recipe.healthLabels.includes("Vegetarian") && (
                <Box
                  bg="#7808ff54"
                  color="#5704bb"
                  px={2}
                  py={1}
                  borderRadius="md"
                  mr={2}
                  mb={2}
                  fontWeight="bold"
                >
                  Vegetarian
                </Box>
              )}
              {recipe.recipe.healthLabels.includes("Pescetarian") && (
                <Box
                  bg="lightgreen"
                  color="darkgreen"
                  px={2}
                  py={1}
                  borderRadius="md"
                  mr={2}
                  mb={2}
                  fontWeight="bold"
                >
                  Pescetarian
                </Box>
              )}
              {recipe.recipe.healthLabels.includes("Gluten-Free") && (
                <Box
                  bg="lightgreen"
                  color="darkgreen"
                  px={2}
                  py={1}
                  borderRadius="md"
                  mr={2}
                  mb={2}
                  fontWeight="bold"
                >
                  Gluten-Free
                </Box>
              )}
              {recipe.recipe.healthLabels.includes("Sesame-Free") && (
                <Box
                  bg="lightgreen"
                  color="darkgreen"
                  px={2}
                  py={1}
                  borderRadius="md"
                  mr={2}
                  mb={2}
                  fontWeight="bold"
                >
                  Sesame-Free
                </Box>
              )}
            </Flex>
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="sm"
              fontWeight="bold"
              color="black.500"
              textAlign="center"
            >
              Dish: {recipe.recipe.dishType}
            </Text>
            {recipe.recipe.cautions.length > 0 && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text
                  mb={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontSize="sm"
                  color="black.500"
                  textAlign="center"
                >
                  Cautions:
                </Text>
                <Flex flexWrap="wrap" justifyContent="center" m={0}>
                  {recipe.recipe.cautions.map((caution, index) => (
                    <Box
                      key={`${recipe.recipe.id}-${caution}`} // Use a combination of recipe id and caution for uniqueness
                      bg="red.500"
                      color="white"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={2}
                      mb={2}
                      fontWeight="bold"
                    >
                      {caution.trim()}
                    </Box>
                  ))}
                </Flex>
              </Box>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default RecipeListPage;

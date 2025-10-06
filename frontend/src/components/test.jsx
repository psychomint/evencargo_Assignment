import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";

export const ChakraTest = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box p={6} maxW="md" mx="auto" mt={10} borderWidth={1} borderRadius="lg" bg="gray.50">
      <Heading size="lg" mb={4} color="gray.800">
        Chakra UI Test
      </Heading>
      <Text mb={4}>If this looks styled, Chakra UI is working!</Text>
      <Button colorScheme="orange" onClick={toggleColorMode}>
        Toggle Color Mode
      </Button>
    </Box>
  );
};

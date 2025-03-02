import { Button, Container, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/molecules/Navbar";
import UserGrid from "./components/molecules/UserGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack minH="100vh" p={4} spacing={3}>
      <Navbar />
      <Container maxW="1200px" my={4}>
        <Box
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          textAlign="center"
          letterSpacing="2px"
          textTransform="uppercase"
          mb={8}
        >
          <Box
            as="span"
          >
            Sahabat
          </Box>
        </Box>
        <UserGrid />
      </Container>
    </Stack>
  );
}

export default App;

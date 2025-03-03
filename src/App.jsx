import { Button, Container, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/molecules/Navbar";
import UserGrid from "./components/molecules/UserGrid";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";
function App() {
  const [users, setUsers] = useState([]);

  return (
    <Stack minH="100vh" p={4} spacing={3}>
      <Navbar setutUsers={setUsers}/>
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
        <UserGrid users={users} setUsers={setUsers}/>
      </Container>
    </Stack>
  );
}

export default App;

  import { Box, Button, ColorModeProvider, Container, Flex, HStack, Icon, useColorMode } from "@chakra-ui/react";
  import React from "react";
  import CreateModal from "../atoms/CreateModal";
import { color } from "framer-motion";

  const Navbar = ({setUsers}) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Container maxW="900px">
        <Box px={4} py={4} borderRadius={6} bg={"gray"} boxShadow="md">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              display={{ base: "none", md: "flex" }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </Flex>
            <Flex gap={3} alignItems={"center"}>
              <Box fontSize={"2xl"} fontWeight={600} display={{ base: "none" }}>
                Bismillah
              </Box>

              <Button onClick={toggleColorMode}>
                <Icon name={colorMode === "light" ? "moon" : "sun"} > {colorMode === "light" ? "Dark" : "Light"}</Icon>
              </Button>

              <CreateModal setUsers={setUsers} />
            </Flex>
          </Flex>
        </Box>
      </Container>
    );
  };

  export default Navbar;

import { Card, CardBody, Box, Flex, CardHeader } from "@chakra-ui/react";
import React from "react";
import EditModals from "../atoms/EditModals";

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>

          <Flex flex={"1"} gap={4} alignItems={"center"}>
            <Avatar size="sm" />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>

          <Flex>
            <EditModals />
            <Button colorScheme="red" size="sm">
              Delete
            </Button>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{user.descriptions}</Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;

import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  useToast,
  Button
} from "@chakra-ui/react";
import React from "react";
import EditModals from "./EditModals";
import { BASE_URL } from "../../App";

const UserCard = ({ user, setUsers }) => {
  const toast = useToast();
  const handleDeleteUser = async () => {
		try {
			const res = await fetch(BASE_URL + "/friends/" + user.id, {
				method: "DELETE",
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error);
			}
			setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
			toast({
				status: "success",
				title: "Success",
				description: "Friend deleted successfully.",
				duration: 2000,
				position: "top-center",
			});
		} catch (error) {
			toast({
				title: "An error occurred",
				description: error.message,
				status: "error",
				duration: 4000,
				isClosable: true,
				position: "top-center",
			});
		}
	};
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={"1"} gap={4} alignItems={"center"}>
            <Avatar size="sm" src={user.imgUrl} />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>

          <Flex>
            <EditModals setUsers={setUsers} user={user} />
            <Button colorScheme="red" size="sm" onClick={handleDeleteUser}>
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

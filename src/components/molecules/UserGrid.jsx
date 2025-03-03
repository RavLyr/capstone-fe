import React from "react";
import { Grid, Flex,Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../App";
import UserCard from "../atoms/UserCard";


const UserGrid = ({ users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await fetch(BASE_URL + "/friends");
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error);
				}
				setUsers(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		getUsers();
	}, [setUsers]);

  console.log(users);

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </Grid>
      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}
      {!isLoading && users.length === 0 && (
        <Flex justifyContent={"center"}>
          <Box fontSize={"xl"}>
            <Box as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Poor you! 🥺
            </Box>
            No friends found.
          </Box>
        </Flex>
      )}
    </>
  );
};

export default UserGrid;

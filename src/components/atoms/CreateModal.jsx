import {
  Button,
  useDisclosure,
  Textarea,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  ModalFooter,
  useToast
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import { BASE_URL } from "../../App";

const CreateModal = ({setUsers}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });
  const toast = useToast();

  const handleCreateUser = async (e) => {
		e.preventDefault(); // prevent page refresh
		setIsLoading(true);
		try {
			const res = await fetch(BASE_URL + "/friends", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error);
			}

			toast({
				status: "success",
				title: "Yayy! 🎉",
				description: "Friend created successfully.",
				duration: 2000,
				position: "top-center",
			});
			onClose();
			setUsers((prevUsers) => [...prevUsers, data]);

			setInputs({
				name: "",
				role: "",
				description: "",
				gender: "",
			}); // clear inputs
		} catch (error) {
			toast({
				status: "error",
				title: "An error occurred.",
				description: error.message,
				duration: 4000,
			});
		} finally {
			setIsLoading(false);
		}
	};

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        <AddIcon boxSize={6} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader>Gay</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex alignItems="center" gap={4}>
                <FormControl>
                  <FormLabel>Nama</FormLabel>
                  <Input
                    placeholder="riski"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Deskripsi Orang</FormLabel>
                  <Textarea
                    resize={"none"}
                    overflowY={"hidden"}
                    placeholder="He's a software engineer who loves to code and build things."
                    value={inputs.description}
                    onChange={(e) =>
                      setInputs({ ...inputs, description: e.target.value })
                    }
                  />
                </FormControl>

                <RadioGroup>
                  <Flex gap={4}>
                    <Radio
                      value="male"
                      onChange={(e) =>
                        setInputs({ ...inputs, gender: e.target.value })
                      }
                    >
                      Laki-laki
                    </Radio>
                    <Radio
                      value="Pria"
                      onChange={(e) =>
                        setInputs({ ...inputs, gender: e.target.value })
                      }
                    >
                      Pria
                    </Radio>
                  </Flex>
                </RadioGroup>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={isLoading}
              >
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default CreateModal;

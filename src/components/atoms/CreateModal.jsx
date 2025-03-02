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
  ModalFooter

} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import React from "react";

const CreateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        <AddIcon boxSize={6} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gay</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" gap={4}>
              <FormControl>
                <FormLabel>Nama</FormLabel>
                <Input placeholder="riski" />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="riski" />
              </FormControl>
              <FormControl>
                <FormLabel>Deskripsi Orang</FormLabel>
                <Textarea placeholder="riski" />
              </FormControl>

              <RadioGroup>
                <Flex gap={4}>
                  <Radio value="Laki-laki">Laki-laki</Radio>
                  <Radio value="Pria">Pria</Radio>
                </Flex>
              </RadioGroup>
            </Flex>
          </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Save
          </Button>
          <Button variant="ghost">Cancel</Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;

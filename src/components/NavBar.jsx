import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Spacer,
  HStack,
  Link,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
const NavBar = () => {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully Logged out",
      isClosable: true,
      duration: 5000,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as="nav" p={{ base: "5px", md: "10px", lg: "10px" }} mb="40px">
      {/* <Link as={ReactRouterLink} to="/"> */}
      <Heading as="h1">Blog Post</Heading>
      {/* </Link> */}

      <Spacer />

      <HStack spacing={{ base: "10px", lg: "20px", md: "20px" }}>
        <Avatar name="Damilare" bg="purple.400" color="white" src="">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              5
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text display={{ base: "none", lg: "block", md: "block" }}>
          Damilare@gmail.com
        </Text>
        <Button onClick={showToast} colorScheme="purple">
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;

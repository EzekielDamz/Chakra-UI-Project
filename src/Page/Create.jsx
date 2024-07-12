import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
// import React from "react";

const Create = () => {
  return (
    <Box maxW="480px">
      <form>
        <FormControl isRequired>
          <FormLabel>Write a Blog</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Create a blog here here</FormHelperText>
        </FormControl>
        <Button colorScheme="purple" variant="solid" mt="2rem">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Create;

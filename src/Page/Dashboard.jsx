import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  CardFooter,
  Button,

  Avatar,
} from "@chakra-ui/react";
import { Data } from "../components/Constant/Data";
const Dashboard = () => {
  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      {Data.map((items) => (
        <Card
          key={crypto.randomUUID}
          borderTop="8px"
          borderColor="purple.400"
          bg="white"
        >
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={items.urlToImage} />
              <Box>
                <Heading as="h5" size="sm">
                  {items.title}
                </Heading>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Text>{items.description}</Text>
          </CardBody>
          <CardFooter>
            <Button
              as="a"
              href={items.url}
              target="_blank"
              colorScheme="purple"
              variant="solid"
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        // <div key={crypto.randomUUID}>{items.title}</div>
      ))}

   
    </SimpleGrid>
  );
};

export default Dashboard;

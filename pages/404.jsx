import { Flex, Heading, Link, Button } from "@chakra-ui/react";
import Nav from "./components/nav/nav";

export default function Custom404() {
  return (
    <div>
      <navbar>
        <Nav />
      </navbar>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        width="100vw"
      >
        <Heading>404 - Page Not Found</Heading>
        <Link href="/" passHref>
          <Button as="a" colorScheme="blue" mt={4}>
            Back To Home
          </Button>
        </Link>
      </Flex>
    </div>
  );
}

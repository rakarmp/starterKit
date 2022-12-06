import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { ImSphere } from "react-icons/im";
import { SiNextdotjs, SiChakraui } from "react-icons/si";

export default function PageHome() {
  return (
    <div>
      <Stack
        spacing={4}
        py={12}
        align="center"
        h="100vh"
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          spacing={2}
          align="start"
          w={{ base: "100%", md: "50%" }}
          py={{ base: 20, md: 0 }}
        >
          <Heading as="h1">Starter Kit</Heading>
          <Divider />
          <Text color="gray.500" align="justify">
            <strong>Starter Kit, </strong>
            Memakai <br />
            <Button
              colorScheme="brand"
              variant="ghost"
              rightIcon={<SiNextdotjs />}
            ></Button>
            with
            <Button
              colorScheme="brand"
              variant="ghost"
              rightIcon={<SiChakraui />}
            ></Button>
          </Text>
          <HStack
            spacing={4}
            w="full"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Link href="https://my-profiledev.netlify.app/" isExternal>
              <Button
                colorScheme="brand"
                variant="ghost"
                rightIcon={<ImSphere />}
              >
                Website
              </Button>
            </Link>
            <Link href="https://github.com/grizz12" isExternal>
              <Button
                colorScheme="brand"
                variant="ghost"
                rightIcon={<FiExternalLink />}
              >
                Github
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Center w={{ base: "100%", md: "50%" }}>
          <Image
            src="home.png"
            h={500}
            fit="cover"
            fallback={<Skeleton w={{ base: "100%", md: "50%" }} h={500} />}
            alt="sword"
          />
        </Center>
      </Stack>
    </div>
  );
}

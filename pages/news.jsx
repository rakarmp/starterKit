import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Buttom from "./components/Button";

const ArticleList = (props) => {
  const { article } = props;

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Dimuat Dari Api SpaceFlight</Heading>
      {article.map(function (article) {
        return (
          <div>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={article.imageUrl}
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    {article.title}
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  {article.summary}
                </Text>
              </Box>
            </Box>
          </div>
        );
      })}
      <a href="/">
        <Buttom>Home</Buttom>
      </a>
      <Divider marginTop="5" />
    </Container>
  );
};

export default ArticleList;

export async function getStaticProps() {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v3/articles`
  );
  const article = await response.json();
  return {
    props: {
      article,
    },
  };
}

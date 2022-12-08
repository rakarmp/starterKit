import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image src="home.png" boxSize="50px" objectFit="cover"></Image>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.githubusercontent.com/u/83684256?v=4"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.githubusercontent.com/u/83684256?v=4"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>RakaTrust</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <a href="https://github.com/grizz12">Github</a>
                  </MenuItem>
                  <MenuItem>
                    <a href="https://instagram.com/rakarmp_fja">Instagram</a>
                  </MenuItem>
                  <MenuItem>
                    <a href="/blog">Blog</a>
                  </MenuItem>
                  <MenuItem>
                    <a href="/news">Fetch Data Exapmle</a>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

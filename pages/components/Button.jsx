import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export default function Buttom(props) {
  return (
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
      marginTop={5}
    >
      {props.children}
    </Button>
  );
}

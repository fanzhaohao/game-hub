import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bootstrap-logo-shadow.png";

// NavBar component
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"70px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;

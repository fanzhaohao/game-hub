import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bootstrap-logo-shadow.png";
import ColorModeSwitch from "./ColorModeSwitch";

// NavBar component
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"20px"}>
      <Image src={logo} boxSize={"70px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icon.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

// NavBar component
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"50px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

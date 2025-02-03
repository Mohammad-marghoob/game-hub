import { HStack, Image } from "@chakra-ui/react";
import ThemeChanger from "./ThemeChanger";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ThemeChanger />
    </HStack>
  );
}

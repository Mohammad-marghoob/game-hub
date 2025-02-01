import { HStack, Image } from "@chakra-ui/react";
import ThemeChanger from "./ThemeChanger";
import logo from "../assets/logo.webp";

export default function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ThemeChanger />
    </HStack>
  );
}

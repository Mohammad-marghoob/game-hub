import { HStack, Image, Text } from "@chakra-ui/react";
import ThemeChanger from "./ThemeChanger";
import logo from "../assets/logo.webp";

export default function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
      <ThemeChanger />
    </HStack>
  );
}

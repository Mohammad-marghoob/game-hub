import { HStack, Image } from "@chakra-ui/react";
import ThemeChanger from "./ThemeChanger";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <ThemeChanger />
    </HStack>
  );
}

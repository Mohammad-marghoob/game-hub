import { Input, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";

export default function SearchInput() {
  return (
    <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
      <Input borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
}

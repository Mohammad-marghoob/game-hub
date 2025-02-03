import { Input, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup
        width="100%"
        flex="1"
        startElement={<LuSearch />}
        endElement={<Kbd>⌘K</Kbd>}
      >
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
}

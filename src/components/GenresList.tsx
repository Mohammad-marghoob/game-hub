import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List } from "@chakra-ui/react";
import GenresListSkeleton from "./GenresListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenresList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error, loading } = useGenres();

  if (error) return null;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <List.Root listStyle="none">
      {loading &&
        skeletons.map((skeleton) => <GenresListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="6px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

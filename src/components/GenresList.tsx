import useGenres from "@/hooks/useGenres";

export default function GenresList() {
  const { data, error, loading } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

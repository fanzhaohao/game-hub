import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import Gamecard from "./Gamecard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContariner from "./GameCardContariner.tsx";
import { Genre } from "../hooks/useGenres.ts";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre); // Fetch games from the API
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={"3px"}
      >
        {isLoading &&
          Skeleton.map((Skeleton) => (
            <GameCardContariner key={Skeleton}>
              <GameCardSkeleton />
            </GameCardContariner>
          ))}
        {data.map((game) => (
          <GameCardContariner key={game.id}>
            <Gamecard game={game} />
          </GameCardContariner>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import Gamecard from "./Gamecard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const GameGrid = () => {
  const { games, error, isLoading } = useGames(); // Fetch games from the API
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={"10px"}>
        {isLoading &&
          Skeleton.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
        {games.map((game) => (
          <Gamecard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;

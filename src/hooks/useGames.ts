import useData from "./useData";
import { GameQuery } from "../App";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  // Define the Game object
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // Array of platforms
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;

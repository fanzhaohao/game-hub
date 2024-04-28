import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./componets/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./componets/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }} // Build a responsive grid layout by using the templateAreas prop
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr", //1024px
        }}
      >
        {/* NavBar Aside Main Componet */}
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingLeft={2} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

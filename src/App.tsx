import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./componets/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const [seletedPlatform, setSeletedPlatform] = useState<Platform | null>(null);

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
              selectedGenre={selectGenre}
              onSelectGenre={(genre) => setSelectGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={seletedPlatform}
            onSelectPlatform={(platform) => setSeletedPlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectGenre}
            selectedPlatform={seletedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

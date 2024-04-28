import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }} // Build a responsive grid layout by using the templateAreas prop
      >
        {/* NavBar Aside Main Componet */}
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

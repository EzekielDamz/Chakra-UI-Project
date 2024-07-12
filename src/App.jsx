// import Dashboard from "./Page/Dashboard";
import AppRouter from "./components/Router/AppRouter";
import Sidebar from "./components/Sidebar";
import "./App.css";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50 ">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        p={{base: '20px', lg:'30px'}}
        minHeight={{ lg: '100vh' }} 
        position="sticky"
        top="0"
        zIndex={999}
      >
       <Sidebar/>
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <NavBar />
       <AppRouter />
      </GridItem>
    </Grid>
  );
}

export default App;

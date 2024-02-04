import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ShoppingList from "./components/ShoppingList";
import TotalItemsDisplay from "./components/TotalItemsDisplay";
import { Button, Grid } from "@mui/material";
import OrderForm from "./components/OrderForm.tsx";

const App: React.FC = () => {
  const [choosingItems, setChoosingItems] = useState(true);

  return (
    <Grid
      container
      ml={20}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      {choosingItems ? (
        <>
          <TotalItemsDisplay />
          <AddItemForm />
          <ShoppingList />
          <Button onClick={() => setChoosingItems(!choosingItems)}>השלם</Button>
        </>
      ) : (
        <OrderForm />
      )}
    </Grid>
  );
};

export default App;

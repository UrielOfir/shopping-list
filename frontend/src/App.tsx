import React, {useState} from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import TotalItemsDisplay from './components/TotalItemsDisplay';
import {Button, Grid} from "@mui/material";
import OrderForm from "./components/OrderForm.tsx";

const App: React.FC = () => {
    const [showItems, setShowItems] = useState(false);

  return (
    <Grid  container
           ml={20}
           direction="column"
           justifyContent="center"
           alignItems="center"
           style={{ minHeight: '100vh' }}>
        {showItems?<OrderForm/>:<>
            <AddItemForm/>
            <TotalItemsDisplay/>
            <ShoppingList/>
        </>}
        <Button onClick={()=>setShowItems(!showItems)}>השלם</Button>
    </Grid>
  );
}

export default App;

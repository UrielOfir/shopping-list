import React from 'react';
import {Grid, Typography } from '@mui/material';
import {useTypedSelector} from "../store";
import { Item } from '../store/reducer';


const ShoppingList: React.FC = () => {
  const {items } = useTypedSelector((state) => state.reducer)
  return (
    <Grid item display="flex" flexDirection="row">
        {Object.entries(items).map(([category, items]) => (
            <Grid m={2} key={category} >
                <Typography mb={3} key={category}>
                    {category} -  {items.length} מוצרים
                </Typography>
                {items.map((item:Item)=>
                    <Typography key={Math.random()} justifyItems="start">
                        {item.name } ({item.quantity})
                    </Typography>
                )}
            </Grid>

        ))}
    </Grid>
  );
}

export default ShoppingList;

import React from 'react';
import {Grid, Typography } from '@mui/material';
import {useTypedSelector} from "../store";


const ShoppingList: React.FC = () => {
  const {items } = useTypedSelector((state) => state.reducer)
  return (
    <Grid item display="flex" flexDirection="row">
        {Object.entries(items).map(([category, items]) => (
            <Grid m={2} key={category} >
                <Typography mb={3} key={category}>
                    {category} -  {items.length} מוצרים
                </Typography>
                {items.map((item:string)=>
                    <Typography key={Math.random()} justifyItems="start">
                        {item }
                    </Typography>
                )}
            </Grid>

        ))}
    </Grid>
  );
}

export default ShoppingList;

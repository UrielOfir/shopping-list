import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import {useTypedSelector} from "../store";


const ShoppingList: React.FC = () => {
  const {items } = useTypedSelector((state) => state.reducer)
  console.log(items)
  return (
    <List>
      <ul>
        {Object.entries(items).map(([category, strings]) => (
            <ListItem key={category}>
              <ListItemText>

              <strong>{category}:</strong> {strings.join(', ')} -- {strings.length} items
              </ListItemText>
            </ListItem>
        ))}
      </ul>
    </List>
  );
}

export default ShoppingList;

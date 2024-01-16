import React, { ChangeEvent, useEffect, useState } from "react";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    SelectChangeEvent,
    FormHelperText, Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {useActions, useTypedSelector} from "../store";
import { GeneralActionsEnum } from "../store/reducer";
import { fetchCategoriesFromServer } from "../services/api";

const AddItemForm: React.FC = () => {
  const { addItem } = useActions();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategoriesFromServer()
      .then((categories ) => {
        dispatch({ type: GeneralActionsEnum.SET_CATEGORIES,categories: categories.map((item:any)=> item.name) });
        console.log("Categories fetched:", categories);
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
      });
  }, []);

    const {categories } = useTypedSelector((state) => state.reducer)

  const [itemName, setItemName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (categoryName === "") {
      setError(true);
    } else {
      setError(false);
      addItem(itemName, categoryName);
    }
  };
  return (
      <Grid item display="flex" flexDirection="column">


    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'row'}}>
      <TextField
          style={{marginRight:4, width:331}}
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setItemName(e.target.value)
        }
      />
      {/* Category Selector */}
      <FormControl fullWidth style={{marginRight:4}}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          label="Category"
          value={categoryName}
          onChange={(e: SelectChangeEvent) => {
            setCategoryName(e.target.value);
            setError(false);
          }}
          required
          error={error}
        >
          {categories &&
            categories.map((category: string) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {error && <FormHelperText error>Please select a category</FormHelperText>}
      <Button type="submit" variant="contained" color="primary">
        Add Item
      </Button>
    </form>
      </Grid>

  );
};

export default AddItemForm;

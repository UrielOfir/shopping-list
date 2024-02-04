export enum GeneralActionsEnum {
  ADD_ITEM = "ADD_ITEM",
  SET_CATEGORIES = "SET_CATEGORIES",
}

export interface Item {
  name: string;
  quantity: number;
}

export interface addItemActionType {
  type: GeneralActionsEnum.ADD_ITEM;
  itemName: string;
  categoryName: string;
}

export interface setCategoriesActionType {
  type: GeneralActionsEnum.SET_CATEGORIES;
  categories: string[];
}

export interface State {
  items: { [category: string]: Item[] };
  categories: string[];
}

export const initialGeneralState: State = {
  items: {},
  categories: [],
};

export const reducer = (
  state = initialGeneralState,
  action: addItemActionType | setCategoriesActionType
) => {
  switch (action.type) {
    //TODO: if item already exists, add to quantity
    case GeneralActionsEnum.ADD_ITEM: {
      const item_list: Item[] = [...(state.items[action.categoryName] || [])];
      const itemIndex = item_list.findIndex(item => item.name === action.itemName);
    
      if (itemIndex !== -1) {
        // If the item already exists, create a new item with incremented quantity
        const newItem = { ...item_list[itemIndex], quantity: item_list[itemIndex].quantity + 1 };
        // Replace the existing item with the new item
        item_list[itemIndex] = newItem;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        item_list.push({ name: action.itemName, quantity: 1 });
      }
    
      return {
        ...state,
        items: { ...state.items, [action.categoryName]: item_list },
      };
    }
    case GeneralActionsEnum.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      };
    }
    default:
      return state;
  }
};

export enum GeneralActionsEnum {
  ADD_ITEM = "ADD_ITEM",
  SET_CATEGORIES = "SET_CATEGORIES",
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
  items: { [category: string]: string[] };
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
    case GeneralActionsEnum.ADD_ITEM: {
      const item_list: string[] = state.items[action.categoryName] || [];
      item_list.push(action.itemName);
      return {
        ...state,
        items: { ...state.items, [action.categoryName]: [...item_list] },
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

// import {Dispatch} from "redux";
import {GeneralActionsEnum} from "./reducer.ts";


export const addItem = (itemName: string, categoryName: string) => {
    return{
        type: GeneralActionsEnum.ADD_ITEM,
        itemName,
        categoryName
    }
};

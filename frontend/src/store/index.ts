import { combineReducers } from "redux";
import { reducer } from "./reducer.ts";
export * from "./useActions.ts";
export * from "./useTypedSelector.ts";
export const rootReducer = combineReducers({
  reducer: reducer,
});

export * from "./action";


export type RootState = ReturnType<typeof rootReducer>;

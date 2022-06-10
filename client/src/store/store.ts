import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

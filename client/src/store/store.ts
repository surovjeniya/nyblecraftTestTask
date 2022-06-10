import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/postReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;

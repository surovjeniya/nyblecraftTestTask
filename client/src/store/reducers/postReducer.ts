import { PostState,PostItem, ActionTypes, PostAction } from "../types/post";

const initState: PostState = {
  posts: [],
};

const findIdx = (arr: PostItem[], item: PostItem):number => {
  return arr.findIndex(i => i.id === item.id)
};

export const postReducer = (
  state: PostState = initState,
  action: PostAction
): PostState => {
  switch (action.type) {
	case ActionTypes.EDIT_POST:
		const idx = findIdx(state.posts,action.payload)
		return {
      ...state,
      posts: [...state.posts.slice(0, idx),action.payload,...state.posts.slice(idx+1)],
    };
    case ActionTypes.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

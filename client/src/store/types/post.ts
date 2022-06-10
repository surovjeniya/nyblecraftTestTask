export interface PostItem {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

export interface PostState {
  posts: PostItem[];
}

export enum ActionTypes {
  CREATE_POST = "CREATE_POST",
  EDIT_POST = "EDIT_POST",
  DELETE_POST = "DELETE_POST",
}

interface CreatePostAction {
  type: ActionTypes.CREATE_POST;
  payload: PostItem;
}
interface EditPostAction {
  type: ActionTypes.EDIT_POST;
  payload: PostItem;
}
interface DeletePostAction {
  type: ActionTypes.DELETE_POST;
  payload: string;
}

export type PostAction = CreatePostAction | EditPostAction | DeletePostAction;

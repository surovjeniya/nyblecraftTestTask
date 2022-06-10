import { ActionTypes, PostItem, PostAction } from "../types/post";

export const createPost = (post: PostItem): PostAction => {
  return {
    type: ActionTypes.CREATE_POST,
    payload: post,
  };
};

export const deletePost = (postId: string): PostAction => {
  return {
    type: ActionTypes.DELETE_POST,
    payload: postId,
  };
};

export const editPost = (post: PostItem): PostAction => {
  return {
    type: ActionTypes.EDIT_POST,
    payload: post,
  };
};

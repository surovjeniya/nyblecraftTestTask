import { PostItem } from "../store/types/post";

export const getTagsCollection = (posts: PostItem[]) => {
  const tags = posts.map((item) => item.tags);
  const tagsList = tags.flat();
  const uniqueTags = tagsList.reduce((q: any, i: any): string[] => {
    return q.includes(i) ? q : [...q, i];
  }, []);
  return uniqueTags;
};

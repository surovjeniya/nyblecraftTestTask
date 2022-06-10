import { TagListProps } from "./TagList.props";
import { Button } from "../index";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTagsCollection } from "../../utils/getTagsCollection";

export const TagList = ({}: TagListProps) => {
  const { posts } = useTypedSelector((state) => state.posts);
  const tagList = getTagsCollection(posts);

  return (
    <>
      <ul>
        {tagList.map((item) => (
          <li key={item}>
            <Button>{item}</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

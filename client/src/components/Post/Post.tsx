import { PostProps } from "./Post.props";
import { Button, TextField } from "../index";
import { usePostAction } from "../../hooks/useAction";
import React, { useState, useRef } from "react";
import { getPostDate } from "../../utils/getPostDate";
import { getTags } from "../../utils/getTags";

export const Post = ({ post }: PostProps) => {
  const { editPost, deletePost } = usePostAction();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <div>
      <h3 ref={ref}>{post.title}</h3>
      {edit && (
        <TextField
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      )}
      <div>
        <p>{post.date}</p>
        <div>
          {!edit && <Button onClick={() => setEdit(true)}>Edit</Button>}
          {edit && (
            <Button
              onClick={() => {
                editPost({
                  ...post,
                  date: getPostDate(),
                  tags: getTags(title)!, // Закинуть сюда Закинуть сюда ref от h3
                  title: title, // Закинуть сюда ref от h3
                });
                setEdit(false);
              }}
            >
              Save
            </Button>
          )}
          <Button onClick={() => deletePost(post.id)}>Delete</Button>
        </div>
      </div>
      <div>
        <ul>
          {post.tags.map((item) => (
            <li key={item}>
              <Button>{item}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

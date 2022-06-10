import { TextField } from "./components/TextField/TextField";
import { Button, Post, TagList } from "./components/index";
import React, { useState } from "react";
import { PostItem } from "./store/types/post";
import { getPostDate } from "./utils/getPostDate";
import { getTags } from "./utils/getTags";
import { usePostAction } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const { createPost } = usePostAction();
  const [post, setPost] = useState<PostItem>({
    date: "",
    id: "",
    tags: [],
    title: "",
  });
  const { posts } = useTypedSelector((state) => state.posts);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value, tags: getTags(e.target.value)! });
  };

  const onAddPost = () => {
    createPost({ ...post, date: getPostDate(), id: Date.now().toString() });
  };
  return (
    <div className="App">
      <TextField onChange={onChangeHandler} value={post.title} />
      <Button onClick={onAddPost}>Add POSt</Button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <TagList />
    </div>
  );
}

export default App;

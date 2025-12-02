import { useEffect, useState } from "react";

const getPostId = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const PostFetcher = () => {
  const [post, setPost] = useState({ title: "", id: "" });
  useEffect(() => {
    fetchPost();
  }, []);
  // 上のエラーはuseEffect内にset関数を直接書かれていた場合にループに入るのを教えてくてるエラー
  // 今回の場合は問題ないがReact推奨の書き方はuseCallBackらしい

  const fetchPost = async () => {
    const RANDOM_POST_URL = `https://jsonplaceholder.typicode.com/posts/${getPostId()}`;
    const response = await fetch(RANDOM_POST_URL);
    const jsonResponse = await response.json();
    const randomPost = jsonResponse;
    setPost(randomPost);
  };

  return (
    <div>
      <button onClick={fetchPost}>Postを取得</button>
      <h1>{post.title}</h1>
      <h3>{post.id}</h3>
    </div>
  );
};

export default PostFetcher;

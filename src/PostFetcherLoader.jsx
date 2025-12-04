import { useEffect, useState } from "react";

const getPostId = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const PostFetcherLoader = () => {
  const [post, setPost] = useState({ title: "", id: "" });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const RANDOM_POST_URL = `https://jsonplaceholder.typicode.com/posts/${getPostId()}`;
      const response = await fetch(RANDOM_POST_URL);
      const jsonResponse = await response.json();
      const randomPost = jsonResponse;
      setPost(randomPost);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>
      <h1>{post.title}</h1>
      <h3>{post.id}</h3>
    </div>
  );
};

export default PostFetcherLoader;

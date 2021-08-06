import { useEffect, useState } from "react";

const Api = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts, "json");
    setPosts(posts);
  };
  const createPost = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

  }
  return (
    <div>
        <button onClick={createPost}>Create Post</button>
      {posts.map((item, index) => (
        <h2 key={index}>{item.title}</h2>
      ))}
    </div>
  );
};

export default Api;

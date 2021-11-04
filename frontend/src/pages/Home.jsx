import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Cannot load page! :(</p>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="post-card">
          <div className="rating">{post.rating}</div>
          <h2>{post.title}</h2>

          <small>console list</small>

          <p>{post.body.substring(0, 200)}...</p>
          <Link to={`/details/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const POSTS = gql`
  query GetPosts {
    posts {
      title
      id
      rating
      body
      categories {
        name
        id
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Cannot load page! :(</p>;

  return (
    <div>
      {data.posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="rating">{post.rating}</div>
          <h2>{post.title}</h2>

          {post.categories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <p>{post.body.substring(0, 200)}...</p>
          <Link className="link" to={`/details/${post.id}`}>
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

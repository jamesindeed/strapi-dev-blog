import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
      posts {
        id
        title
        body
        rating
        categories {
          id
          name
        }
      }
    }
  }
`;

const Catagory = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Cannot load page! :(</p>;

  console.log(data);

  return (
    <div>
      <h2>{data.category.name} Games</h2>
      {data.category.posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="rating">{post.rating}</div>
          <h2>{post.title}</h2>

          {post.categories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <p>{post.body.substring(0, 200)}...</p>
          <Link to={`/details/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Catagory;

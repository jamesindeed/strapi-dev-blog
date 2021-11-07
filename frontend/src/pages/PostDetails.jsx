import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      title
      body
      rating
      id
      categories {
        id
        name
      }
    }
  }
`;

const PostDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(POST, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Cannot load page! :(</p>;

  return (
    <div className="post-card">
      <div className="rating">{data.post.rating}</div>
      <h2>{data.post.title}</h2>

      {data.post.categories.map((c) => (
        <small key={c.id}>{c.name}</small>
      ))}

      <p>{data.post.body}</p>
    </div>
  );
};

export default PostDetails;

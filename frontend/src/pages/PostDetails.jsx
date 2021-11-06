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

  console.log(data);

  return (
    <div className="post-card">
      <div className="rating">{data.post.rating}</div>
      <h2>{data.post.title}</h2>

      <small>Sub Heading</small>

      <p>{data.post.body}</p>
    </div>
  );
};

export default PostDetails;

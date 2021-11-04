import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PostDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "http://localhost:1337/posts/" + id
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Cannot load page! :(</p>;

  console.log(data);

  return (
    <div className="post-card">
      <div className="rating">{data.rating}</div>
      <h2>{data.title}</h2>

      <small>Sub Heading</small>

      <p>{data.body}</p>
    </div>
  );
};

export default PostDetails;

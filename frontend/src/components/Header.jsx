import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATAGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(CATAGORIES);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories</p>;

  return (
    <div className="header">
      <Link to="/">
        <h1>Dev Blog</h1>
      </Link>
      <nav className="catagories">
        <span>Filter Posts:</span>
        {data.categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;

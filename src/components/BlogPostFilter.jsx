import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const BlogPostFilter = ({ posts, onFilterChange }) => {
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    // Extract unique types from the posts
    if (posts && posts.length > 0) {
      const typesSet = new Set();
      posts.forEach((post) => {
        // Check if 'type' property exists on the post object
        if (post && post.type && Array.isArray(post.type)) {
          post.type.forEach((type) => typesSet.add(type));
        }
      });

      // Convert the Set to an array
      const typesArray = Array.from(typesSet);

      // Update state with unique types
      setUniqueTypes(typesArray);
    }
  }, [posts]);

  const handleFilterChange = (filterType) => {
    setSelectedFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <DropdownButton
      id="blogPostFilterDropdown"
      title={selectedFilter || "Filter"}
      variant="light"
    >
      <Dropdown.Item onClick={() => handleFilterChange(null)}>
        Alla
      </Dropdown.Item>
      {uniqueTypes.map((type, index) => (
        <Dropdown.Item key={index} onClick={() => handleFilterChange(type)}>
          {type}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default BlogPostFilter;

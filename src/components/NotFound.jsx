import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={styles.container}>
    <h2 style={styles.header}>404 - Not Found</h2>
    <p style={styles.message}>The page you are looking for does not exist.</p>
    <Link to="/" style={styles.link}>
      Go to Home
    </Link>
  </div>
);

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    color: "#fff", // Set text color to white for better visibility on a black background
  },
  header: {
    fontSize: "2em",
    color: "#bbb", // Light gray text color
  },
  message: {
    fontSize: "1.2em",
    color: "#999", // Slightly lighter gray text color
    marginBottom: "20px",
  },
  link: {
    fontSize: "1em",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default NotFound;

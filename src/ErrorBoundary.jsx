import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // Log the error to an error reporting service
      console.error("Error caught by error boundary:", error, errorInfo);
      setHasError(true);
    };

    // Attach the error handler
    window.addEventListener("error", errorHandler);

    // Remove the error handler on component unmount
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (hasError) {
    // You can render any custom fallback UI
    return (
      <div>
        <h1>Här verkar det som att något gick fel.</h1>
        <p>
          Vänligen försök att{" "}
          <Button onClick={handleRefresh}>ladda om sidan</Button>. Om felet
          skulle kvarstå, så vänligen kontakta mig @ david.blomberg@hotmail.com!
        </p>
        <Link to="/">Tillbaka till startsidan</Link>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;

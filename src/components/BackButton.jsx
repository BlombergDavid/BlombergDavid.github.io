import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons"; // Assuming you installed Bootstrap Icons
import { useNavigate } from "react-router-dom";

const BackButton = ({ link, text }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(link);
  };

  return (
    <Button variant="light" onClick={handleBack}>
      <ArrowLeft size={20} /> {text}
    </Button>
  );
};

export default BackButton;

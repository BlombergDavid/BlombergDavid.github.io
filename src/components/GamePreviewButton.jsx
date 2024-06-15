import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const GamePreviewButton = ({ title, backgroundImageURL, description, link, width }) => {
    const navigate = useNavigate();

  return (
    <Card bg={"light"} style={{ width: width }}>
      <Card.Img variant="top" src={backgroundImageURL} style={{ height: "225px", borderBottom: "1px solid gray" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="dark"
          onClick={() => {
            !!link && link.length > 0 && navigate(link);
          }}
        >
          Spela
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GamePreviewButton
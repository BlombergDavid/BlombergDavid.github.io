import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./JeopardyTeamCard.css";

const JeopardyTeamCard = ({
  teamName,
  score,
  deleteTeam,
  adjustScore,
  teamIndex,
  editTeamName,
}) => {
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(teamName);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNameEdit = () => {
    setEditingName(true);
  };

  const handleNameSubmit = () => {
    setEditingName(false);
    editTeamName(teamIndex, newName);
  };

  return (
    <div className="mx-5" style={{ textAlign: "center" }}>
      <Card bg="dark" text="white" className="mb-3 text-center rounded">
        <Card.Body>
          <div>
            {!editingName && (
              <Button
                variant="danger"
                className="rounded-circle border-0 teamcard-delete-button"
                onClick={() => deleteTeam(teamIndex)}
                disabled={editingName}
              >
                X
              </Button>
            )}
            {editingName ? (
              <Form.Control
                type="text"
                value={newName}
                onChange={handleNameChange}
                onBlur={handleNameSubmit}
              />
            ) : (
              <Card.Title onClick={handleNameEdit}>{teamName}</Card.Title>
            )}
          </div>
          <div className="d-flex justify-content-center align-items-center my-3">
            <Button
              variant="success"
              className="rounded-circle border-0 mx-2"
              onClick={() => adjustScore(teamIndex, 1)}
            >
              +
            </Button>
            <span
              className="bg-secondary text-dark px-4 py-2"
              style={{
                minWidth: "128px",
                borderRadius: "4px",
                fontSize: "24px",
              }}
            >
              {score}
            </span>
            <Button
              variant="danger"
              className="rounded-circle border-0 mx-2"
              onClick={() => adjustScore(teamIndex, -1)}
            >
              -
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JeopardyTeamCard;

import React, { useState, useEffect } from "react";
import "./JeopardyQuestionCard.css";
import { Button, Modal, Image } from "react-bootstrap";
import VideoPlayer from "../components/VideoPlayer.jsx";

const JeopardyQuestionCard = ({
  buttonText,
  questionTitle,
  questionText,
  questionAnswer,
  questionImage,
  answered,
  questionID,
  videoURL
}) => {
  const [show, setShow] = useState(false);
  const [isAnswered, setIsAnswered] = useState(answered);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showAnswer = () => setIsAnswered(true);

  useEffect(() => {
    // Fetch questions from localStorage
    const questionsFromLocalStorage = localStorage.getItem("questions");

    // Parse questions into an array
    const questionsArray = JSON.parse(questionsFromLocalStorage) || [];

    // Check if questionID is within range
    if (questionID - 1 >= 0 && questionID - 1 < questionsArray.length) {
      // Clone the question to avoid mutating original data
      const updatedQuestion = { ...questionsArray[questionID - 1], isAnswered };

      // Update the question in the array
      questionsArray[questionID - 1] = updatedQuestion;

      // Update localStorage with the modified array
      localStorage.setItem("questions", JSON.stringify(questionsArray));
    } else {
      console.error("Invalid questionID:", questionID);
    }
  }, [isAnswered, questionID]);
  return (
    <>
      <Button
        variant={isAnswered ? "secondary" : "primary"}
        onClick={handleShow}
        style={
          isAnswered
            ? { opacity: "0.5", fontSize: "48px" }
            : { opacity: "1", fontSize: "48px" }
        }
        className="questionButton my-4"
      >
        {buttonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        size="xl"
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "64px" }}>
            {questionTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {questionImage !== "" && !!questionImage && videoURL === "" &&
                <Image
                src={questionImage}
                fluid
                alt={"questionimage " + questionID}
                className="question-image"
                rounded
              />
            }
            {videoURL !== "" &&
              <VideoPlayer
                youtubeLink={videoURL}
                width="100%"
                height="30vh"
              />
            }

          <p style={{ fontSize: "32px" }}>{questionText}</p>

          {isAnswered && <p style={{ fontSize: "32px", fontStyle: "italic" }}>{questionAnswer}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ fontSize: "32px" }}
            onClick={handleClose}
          >
            Stäng
          </Button>
          {!isAnswered && (
            <Button
              variant="primary"
              style={{ fontSize: "32px" }}
              onClick={showAnswer}
            >
              Visa svar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JeopardyQuestionCard;

import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import JeopardyTeamCard from "../../components/JeopardyTeamCard";
import JeopardyQuestionCard from "../../components/JeopardyQuestionCard";
import "./MidsommarJeopardy.css";


const MidsommarJeopardy = () => {
  const initialQuestions = require("../../jsonFiles/jeopardyQuestions.json");

  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");
    return savedTeams ? JSON.parse(savedTeams) : [{ name: "Team 1", score: 0 }];
  });

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem('questions');
    return savedQuestions ? JSON.parse(savedQuestions) : initialQuestions;
  });

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const addTeam = () => {
    if (teams.length < 5) {
      const newTeam = { name: `Team ${teams.length + 1}`, score: 0 };
      setTeams([...teams, newTeam]);
    }
  };

  const editTeamName = (teamIndex, newName) => {
    if (newName !== "") {
      const updatedTeams = [...teams];
      updatedTeams[teamIndex].name = newName;
      setTeams(updatedTeams);
    }
  };

  const deleteTeam = (index) => {
    if (teams.length > 1) {
      const updatedTeams = [...teams];
      updatedTeams.splice(index, 1);
      setTeams(updatedTeams);
    }
  };

  const adjustScore = (index, amount) => {
    const updatedTeams = [...teams];
    updatedTeams[index].score = Math.max(updatedTeams[index].score + amount, 0);
    setTeams(updatedTeams);
  };

  const resetLocalStorage = () => {
    localStorage.removeItem('teams');
    localStorage.removeItem('questions');
    setTeams([{ name: 'Team 1', score: 0 }]);
    setQuestions(initialQuestions);
    window.location.reload();
  };

  return (
    <div className="jeopardy-container">
      <Row>
        <Col>
          <h2 className="category-title">Musik</h2>
          {questions.slice(0, 5).map((question, i) => (
            <JeopardyQuestionCard
              key={i}
              buttonText={question.buttonText}
              questionTitle={question.questionTitle}
              questionText={question.questionText}
              questionAnswer={question.questionAnswer}
              questionID={question.questionID}
              answered={question.isAnswered}
              questionImage={question.questionImage}
              videoURL={question.videoURL}
            />
          ))}
        </Col>
        <Col>
          <h2 className="category-title">Smeknamn</h2>
          {questions.slice(5, 10).map((question, i) => (
            <JeopardyQuestionCard
              key={i}
              buttonText={question.buttonText}
              questionTitle={question.questionTitle}
              questionText={question.questionText}
              questionAnswer={question.questionAnswer}
              questionID={question.questionID}
              answered={question.isAnswered}
              questionImage={question.questionImage}
              videoURL={question.videoURL}
            />
          ))}
        </Col>
        <Col>
          <h2 className="category-title">Relationer</h2>
          {questions.slice(10, 15).map((question, i) => (
            <JeopardyQuestionCard
              key={i}
              buttonText={question.buttonText}
              questionTitle={question.questionTitle}
              questionText={question.questionText}
              questionAnswer={question.questionAnswer}
              questionID={question.questionID}
              answered={question.isAnswered}
              questionImage={question.questionImage}
              videoURL={question.videoURL}
            />
          ))}
        </Col>
        <Col>
          <h2 className="category-title">Film & Serie</h2>
          {questions.slice(15, 20).map((question, i) => (
            <JeopardyQuestionCard
              key={i}
              buttonText={question.buttonText}
              questionTitle={question.questionTitle}
              questionText={question.questionText}
              questionAnswer={question.questionAnswer}
              questionID={question.questionID}
              answered={question.isAnswered}
              questionImage={question.questionImage}
              videoURL={question.videoURL}
            />
          ))}
        </Col>
        <Col>
          <h2 className="category-title">Random</h2>
          {questions.slice(20, 25).map((question, i) => (
            <JeopardyQuestionCard
              key={i}
              buttonText={question.buttonText}
              questionTitle={question.questionTitle}
              questionText={question.questionText}
              questionAnswer={question.questionAnswer}
              questionID={question.questionID}
              answered={question.isAnswered}
              questionImage={question.questionImage}
              videoURL={question.videoURL}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <div className="teams-container">
            {teams.map((team, index) => (
              <JeopardyTeamCard
                key={index}
                teamName={team.name}
                score={team.score}
                deleteTeam={deleteTeam}
                adjustScore={adjustScore}
                teamIndex={index}
                editTeamName={editTeamName}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Button
        variant="success"
        onClick={addTeam}
        style={{ position: "absolute", bottom: "16px", left: "16px" }}
      >
        Lägg till lag
      </Button>
      <Button
        variant="warning"
        onClick={resetLocalStorage}
        style={{ position: "absolute", bottom: "16px", right: "16px" }}
      >
        Återställ
      </Button>
    </div>
  );
};

export default MidsommarJeopardy;

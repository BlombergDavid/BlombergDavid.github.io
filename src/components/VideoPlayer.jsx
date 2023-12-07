// VideoPlayer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VideoPlayer = ({ youtubeLink, width, height }) => {
  // Extract video ID from YouTube link
  const videoId = youtubeLink.split("v=")[1];

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={10}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="YouTube Video"
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
              style={{
                width: `${width}`,
                height: `${height}`,  
                borderRadius: '0.375rem', //Same as Bootstraps "rounded"
              }}
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPlayer;

import React, { useState, useEffect } from "react";
import "./CommentField.css";
import { Button, Row, Col, InputGroup, Form, Modal } from "react-bootstrap";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  deleteDoc,
  //   updateDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../firebase-config";
import GoogleSignInButton from "./GoogleSignInButton";
import { UserAuth } from "../context/AuthContext";
import { isTopCategoryUrl, currentTopCategory } from "../functions";

export const CommentField = () => {
  const commentsCollectionRef = collection(db, "comments");
  const listCommentsCollectionRef = collection(db, "listComments");
  const isTopListPost = isTopCategoryUrl();

  const { user } = UserAuth();

  const [postComments, setPostComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getComments = async () => {
    if (isTopListPost === true) {
      const listNameToFilter = currentTopCategory();

      const filteredQuery = query(
        listCommentsCollectionRef,
        where("listName", "==", listNameToFilter)
      );
      const data = await getDocs(filteredQuery);

      setPostComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      const urlParts = window.location.href.split("/");
      const documentId = urlParts[urlParts.length - 1];
      const commentsQuery = query(
        commentsCollectionRef,
        where("postId", "==", documentId)
      );

      try {
        const querySnapshot = await getDocs(commentsQuery);
        const entries = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPostComments(entries);
      } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
      }
    }
  };

  const createComment = async (event) => {
    event.preventDefault();

    if (isTopListPost === true) {
      const listCommentObject = {
        text: newComment,
        username: userName,
        email: user?.email,
        listName: currentTopCategory(),
        timestamp: serverTimestamp(),
      };
      await addDoc(listCommentsCollectionRef, listCommentObject);
    } else {
      const urlParts = window.location.href.split("/");
      const documentId = urlParts[urlParts.length - 1];

      const commentObject = {
        text: newComment,
        username: userName,
        email: user?.email,
        postId: documentId,
        timestamp: serverTimestamp(),
      };
      await addDoc(commentsCollectionRef, commentObject);
    }

    setNewComment("");
    setUserName("");
    getComments();
  };

  const handleShowConfirmation = (commentId) => {
    setCommentToDelete(commentId);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setCommentToDelete(null);
    setShowConfirmation(false);
  };

  const deleteComment = async (id) => {
    handleCloseConfirmation();

    if (!commentToDelete) {
      return;
    }
    if (isTopListPost === true) {
      const listCommentRef = doc(listCommentsCollectionRef, id);
      try {
        await deleteDoc(listCommentRef);
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    } else {
      const commentRef = doc(commentsCollectionRef, id);
      try {
        await deleteDoc(commentRef);
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    }
    getComments();
  };

  return (
    <div className="comments-section">
      <div className="list-of-comments">
        {postComments.length > 0 ? (
          postComments
            .slice() // Create a shallow copy to avoid mutating the original array
            .sort((a, b) => b.timestamp.seconds - a.timestamp.seconds) // Sort by timestamp in descending order
            .map((comment, index) => (
              <div key={comment.id}>
                <Row className="mx-1">
                  <Col xs={10} md={11}>
                    <h3>{comment.username}</h3>
                  </Col>
                  <Col xs={2} md={1}>
                    {user?.email === comment.email && (
                      <Button
                        variant="outline-light" //
                        className="rounded-circle close-button"
                        onClick={() => handleShowConfirmation(comment.id)}
                      >
                        X
                      </Button>
                    )}
                  </Col>
                </Row>
                <p className="mx-3">{comment.text}</p>
                <p className="mx-1">
                  <i>
                    {comment.timestamp
                      .toDate()
                      .toLocaleString("sv-SE", {
                        timeZone: "Europe/Stockholm",
                      })
                      .substring(0, 16)}
                  </i>
                </p>
                {index < postComments.length - 1 && (
                  <hr key={`hr-${index}`} className="my-2" />
                )}
              </div>
            ))
        ) : (
          <p>
            <i>Inga kommentarer ännu, bli först med att kommentera!</i>
          </p>
        )}
      </div>
      {user?.email && user?.emailVerified ? (
        <div className="new-comment-section my-5">
          <Form onSubmit={createComment}>
            <Row>
              <Col sm={6} md={4} lg={3}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Användarnamn..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    required
                  />
                </InputGroup>
              </Col>
            </Row>
            <InputGroup className="mb-3 mt-2">
              <Form.Control
                as="textarea"
                aria-label="kommentarsfält"
                placeholder="Lägg till en kommentar..."
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                required
              />
            </InputGroup>
            <Button type="submit" variant="light">
              Kommentera
            </Button>
          </Form>
        </div>
      ) : (
        <div className="login-hint-section">
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <p className="login-hint-text">
                Du måste logga in med ett verifierat Google-konto för att kunna
                kommentera!
                <br />
                <i>(Din mailadress kommer att sparas, men din mailadress eller ditt
                riktiga namn kommer inte vara synligt för andra besökare)</i>
              </p>
              <GoogleSignInButton/>
            </Col>
          </Row>
        </div>
      )}
      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Bekräfta borttagning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Är du säker på att du vill ta bort kommentaren?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Avbryt
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteComment(commentToDelete);
            }}
          >
            Ta bort
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

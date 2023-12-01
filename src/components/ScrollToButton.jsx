import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

const ScrollToButton = (props) => {
  return (
    <Button  variant={props.variant}>
      <Link to={props.linkTo} spy={true} offset={props.offset} duration={500}>
        {props.text}
      </Link>
    </Button>
  );
};

export default ScrollToButton;

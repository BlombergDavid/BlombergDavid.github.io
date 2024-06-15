import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";


const ScrollToButton = (props) => {
  return (
    <Button variant={props.variant} onClick={props.onClick}>
      {!props.isRoutingButton ?
      <Link to={props.linkTo} spy={true} offset={props.offset} duration={500}>
        {props.text}
      </Link>
      :
      props.text
      }
    </Button>
  );
};

export default ScrollToButton;

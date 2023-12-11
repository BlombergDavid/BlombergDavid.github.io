import React from "react";
import "./Header.css";
import { SocialIcon } from "react-social-icons";
import { FaPhoneAlt } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Link = ({ id, children, title }) => (
  <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
    <span>{children}</span>
  </OverlayTrigger>
);

const Footer = () => {
  return (
    <div className="dark-theme text-white py-2 px-3">
      <div className="container">
        <div className="row text-center">
          <div className="col-6 col-md-3 mt-1 mb-1 d-flex align-items-center">
            <Link title="My LinkedIn" id="t-1">
              <SocialIcon
                className="me-2"
                url="https://www.linkedin.com/in/david-blomberg-8b4832212/"
              />{" "}
            </Link>{" "}
            LinkedIn
          </div>

          <div className="col-6 col-md-3 mt-1 mb-1 d-flex align-items-center">
            <Link title="Copy my number: +46735287832" id="t-2">
              <FaPhoneAlt
                className="me-2 custom-icon"
                style={{ cursor: "pointer", color: "green", scale: "1" }}
                onClick={() => {
                  navigator.clipboard.writeText("+46735287832");
                }}
              />
            </Link>{" "}
            Telefon
          </div>

          <div className="col-6 col-md-3 mt-1 mb-1 d-flex align-items-center">
            <Link title="My Facebook" id="t-3">
              <SocialIcon
                className="me-2"
                url="https://www.facebook.com/david.blomberg.58/"
              />{" "}
            </Link>{" "}
            Facebook
          </div>

          <div className="col-6 col-md-3 mt-1 mb-1 d-flex align-items-center">
            <Link title="My Mail" id="t-4">
              <SocialIcon
                className="me-2"
                bgColor="red"
                url="mailto:david.blomberg@hotmail.com"
              />{" "}
            </Link>{" "}
            Mail
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

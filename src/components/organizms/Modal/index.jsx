import React from "react";
import { CSSTransition } from "react-transition-group";
import Heading from "../../atoms/Heading";
import close from "../../../assets/images/close.svg";

import "./style.scss";

const Modal = ({ show, onClose }) => {


  return (
    <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
      <div className={"modal"}>
        <div className={"modal-black-window"} onClick={onClose} />
        <div className={"modal-wrapper"}>
          <img
            src={close}
            alt="close"
            className={"modal-wrapper-close-button"}
            onClick={onClose}
          />
          <Heading title={"New Education Modal"} size={"normal"} />
          <div>Modal Content</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;

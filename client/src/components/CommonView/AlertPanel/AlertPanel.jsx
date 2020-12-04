import React from "react";
import {Modal, Button} from "react-bootstrap";

function AlertPanel(props) {
    return (
        <Modal show={props.alert} onHide={() => props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => props.onClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );

}

export default AlertPanel;
import React, { useState } from "react";
import { Button } from "baseui/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from "baseui/modal";
import Menu from "baseui/icon/menu";

export default props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button style={{ marginLeft: "12px" }} onClick={() => setIsOpen(true)}>
        <Menu />
      </Button>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalHeader>Search options</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <ModalButton onClick={() => setIsOpen(false)}>Close</ModalButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

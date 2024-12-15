"use client";

import {Modal, Button} from "react-bootstrap";
import {useRegistrationContext} from "@/providers/RegistrationContextProvider";
import RegForm from "@/components/RegForm/RegForm.jsx"


export default function () {
    const {show, setShow} = useRegistrationContext();
    function handleClose () {
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RegForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary" form="regForm" onClick={handleClose}>
                    Sign Up
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
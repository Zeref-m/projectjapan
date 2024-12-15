"use client";

import {Modal, Button} from "react-bootstrap";
import {useGalleryContext} from "@/providers/GalleryContextProvider";

export default function () {
    const {show, setShow} = useGalleryContext();
    function handleClose () {
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* < /> */}
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
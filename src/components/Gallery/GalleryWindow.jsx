"use client";
import { Modal, Button } from "react-bootstrap";
import { useGalleryContext } from "@/providers/GalleryContextProvider";
import {book} from "@/actions/tourBook";
import "./GalleryWindow.css";

export default function GalleryWindow() {
    const { show, setShow } = useGalleryContext();

    function handleClose() {
      setShow(false);
    }
    return (
    <Modal
        style={{ position: 'fixed', top: '-10%', left: '50%', transform: 'translateX(-50%)' }}
        show={show}
        onHide={handleClose}
        centered
    >
        <Modal.Header closeButton>
        <Modal.Title>Tour Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="tourForm" action={book}>
                <h1 className="white-text">Join the Adventure</h1>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em' }}>
                    <div>
                        <div>
                            <input name='phonenum'
                                className="input-in-window"
                                placeholder="-- Phone Number --"
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <input name='city'
                                className="input-in-window"
                                placeholder="-- City --"
                            />
                        </div>
                    </div>
                </div>
            </form>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button className="button-red" onClick={handleClose}>
            Close
          </button>
          <button className="button-white" form="tourForm">
            Send Result
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
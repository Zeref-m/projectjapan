// "use client";
// import {Modal, Button} from "react-bootstrap";
// import {useGalleryContext} from "@/providers/GalleryContextProvider";
// import "./GalleryWindow.css";

// export default function () {
//     const {show, setShow} = useGalleryContext();
//     function handleClose () {
//         setShow(false);
//     }

//     return (
//         <Modal style={{position:'fixed', top:'10%', left:''}} show={show} onHide={handleClose}>
//             <Modal.Header style={{ backgroundColor: '#c70000', borderBottom:'3px solid white' }} closeButton>
//                 <Modal.Title></Modal.Title>
//             </Modal.Header>
//             <Modal.Body style={{ backgroundColor: 'black', borderBottom:'3px solid white', paddingTop:'2em'}}>
//                 <h1 className="white-text">Tour registration window</h1>
//                 <div style={{display: 'flex', justifyContent:'center', marginTop:'3em', marginBottom:'3em'}}>
//                     <div>
//                         <div><input className="input-in-window" placeholder={"--phone number--"}></input></div>
//                         <div style={{marginTop: '10px'}}><input className="input-in-window" placeholder={"--City--"}></input></div>
//                     </div>
//                 </div>
//             </Modal.Body>
//             <Modal.Footer style={{backgroundColor:'#c70000'}}>
//                 <div style={{display:'flex', justifyContent:'flex-start'}}>
//                 <Button className="button-red" variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//                 <Button className="button-white" type="submit" variant="primary" form="regForm" onClick={handleClose}>
//                     Send result
//                 </Button>
//                 </div>
//             </Modal.Footer>
//         </Modal>
//     );
// }
"use client";
import { Modal, Button } from "react-bootstrap";
import { useGalleryContext } from "@/providers/GalleryContextProvider";
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
        <h1 className="white-text">Join the Adventure</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em' }}>
            <div>
            <div>
                <input
                className="input-in-window"
                placeholder="-- Phone Number --"
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <input
                className="input-in-window"
                placeholder="-- City --"
                />
            </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button className="button-red" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="button-white" type="submit" variant="primary" form="regForm" onClick={handleClose}>
            Send Result
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
// "use client";

// import { signup } from '@/actions/auth.js'
// import {useFormState} from 'react-dom';
// import "./RegForm.css";

// export default function () {
//     const [state, submitAction] = useFormState(signup, {error: null});
//     return(
//         <form id="regForm" action={submitAction}>
//             <div >
//                 {/* <label htmlFor="name">Login</label> */}
//                 <input id="name" name="login" placeholder="login" />
//                 {state?.errors?.login && <span>Failed: {state.errors.login}</span>}
//             </div>
//             <div>
//                 {/* <label htmlFor="email">Email</label> */}
//                 <input id="email" name="email" type="email" placeholder="email" />
//                 {state?.errors?.email && <span>Failed: {state.errors.email}</span>}
//             </div>
//             <div>
//                 {/* <label htmlFor="password">Password</label> */}
//                 <input id="password" name="password" type="password" placeholder='password' />
//                 {state?.errors?.password && <span>Failed: {state.errors.password}</span>}
//             </div>

//         </form>
//     )
// }
"use client";
import { Modal, Button } from "react-bootstrap";
import { useFormState } from "react-dom";
import { signup } from "@/actions/auth.js";
import "./RegForm.css";

export default function RegistrationWindow() {
  const [state, submitAction] = useFormState(signup, { error: null });

  return (
    <Modal
      style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
      show={true} onHide={() => {}} centered>
      <Modal.Header closeButton>
        <Modal.Title>Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className="white-text">Join Us</h1>
        <form id="regForm" action={submitAction}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em' }}>
            <div>
              <div>
                <input
                  className="input-in-window"
                  id="name"
                  name="login"
                  placeholder="-- Login --"
                />
                {state?.errors?.login && <span className="error">Failed: {state.errors.login}</span>}
              </div>
              <div style={{ marginTop: '10px' }}>
                <input
                  className="input-in-window"
                  id="email"
                  name="email"
                  type="email" placeholder="-- Email --"/>
                {state?.errors?.email && <span className="error">Failed: {state.errors.email}</span>}
              </div>
              <div style={{ marginTop: '10px' }}>
                <input
                  className="input-in-window"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="-- Password --"
                />
                {state?.errors?.password && <span className="error">Failed: {state.errors.password}</span>}
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button className="button-red" variant="secondary" onClick={() => {}}>
            Close
          </Button>
          <Button className="button-white" type="submit" variant="primary" form="regForm">
            Send Result
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
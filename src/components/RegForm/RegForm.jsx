"use client";
import {useFormState} from "react-dom";
import {signup} from "@/actions/auth.js";
import "./RegForm.css";

export default function RegistrationWindow() {
    const [state, submitAction] = useFormState(signup, {error: null});

    return (
        <form id="regForm" action={submitAction}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em'}}>
                <div>
                    <div>
                        <input className="input-in-window" id="name" name="login" placeholder="-- Login --"/>
                        {state?.errors?.login && <span className="error">Failed: {state.errors.login}</span>}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <input className="input-in-window" id="email" name="email" type="email"
                               placeholder="-- Email --"/>
                        {state?.errors?.email && <span className="error">Failed: {state.errors.email}</span>}
                    </div>
                    <div style={{marginTop: '10px'}}>
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
    );
}
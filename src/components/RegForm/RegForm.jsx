"use client";

import { signup } from '@/actions/auth.js'
import {useFormState} from 'react-dom';

export default function () {
    const [state, submitAction] = useFormState(signup, {error: null});
    return(
        <form action={submitAction}>
            <div>
                <label htmlFor="name">Login</label>
                <input id="name" name="login" placeholder="Login" />
                {state?.errors?.login && <span>Failed: {state.errors.login}</span>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" />
                {state?.errors?.email && <span>Failed: {state.errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
                {state?.errors?.password && <span>Failed: {state.errors.password}</span>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}
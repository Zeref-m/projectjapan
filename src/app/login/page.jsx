"use client";
import { login } from '@/actions/auth';
import {useFormState} from 'react-dom';

export default function () {
    const [state, submitAction] = useFormState(login, {error: null});
    return(
        <form action={submitAction}>
            <div>
                <label htmlFor="name">Email</label>
                <input id="name" name="email" placeholder="Email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>

            <button >Sign In</button>
        </form>
    )
}
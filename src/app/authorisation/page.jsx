"use client";
import { login } from '@/actions/auth';
import {useFormState} from 'react-dom';

export default function () {
    const [state, submitAction] = useFormState(login, {error: null});
     // TODO: Добавить вывод ошибок
    return(
        <form action={submitAction}>
            <div>
                <label htmlFor="name">Login</label>
                <input id="name" name="login" placeholder="Login" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>

            <button type="submit">Sign In</button>
        </form>
    )
}
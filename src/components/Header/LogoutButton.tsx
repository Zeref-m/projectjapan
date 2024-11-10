"use client";

import {logout} from "@/actions/auth";

export default function () {
    return <button className="btn btn-warning" onClick={() => logout()}>Logout</button>
}
"use server";
import {SignUpSchema} from "../lib/definitions.js";

export async function signup(state, formData) {
    const login = formData.get("login");
    const email = formData.get("email");
    const password = formData.get("password");

    const validatedFields = SignUpSchema.safeParse({
        login,
        email,
        password,
    })
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    return {errors: {}}
}
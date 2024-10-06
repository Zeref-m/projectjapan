"use server";
import { PrismaClient } from "@prisma/client";
import {SignUpSchema} from "../lib/definitions.js";

const prisma = new PrismaClient();

export async function signup(state, formData) {

    const login = formData.get("login");
    const email = formData.get("email");
    const password = formData.get("password");

    // validation
    const validatedFields = SignUpSchema.safeParse({
        login,
        email,
        password,
    });

    // если есть ошибки
    if (!validatedFields.success) {
       // console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    // записать в базу
    const user = await prisma.user.create({
        data: {
            login: login,
            email: email,
            password: password,

        }
    })

    // redirect
    return {errors: {}}
}
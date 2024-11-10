"use server";
import {PrismaClient} from "@prisma/client";
import {SignUpSchema} from "../lib/definitions.js";
import {redirect} from 'next/navigation';
import { createSession, deleteSession } from '@/lib/session.ts'

const prisma = new PrismaClient();

export async function signup(state, formData) {

    // Получаем регистрационные данные из формы
    const login = formData.get("login");
    const email = formData.get("email");
    const password = formData.get("password");

    // 1. Проверяем полученные данные
    const validatedFields = SignUpSchema.safeParse({
        login,
        email,
        password,
    });

    // 2. Если есть ошибки
    if (!validatedFields.success) {
        // Отправляем сообщения об ошибках назад на форму
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // 3. Если ошибок нет - вносим данные пользователя в базу данных
    // TODO: Хешировать пароли перед записью в БД
    const user = await prisma.user.create({
        data: {
            login: login,
            email: email,
            password: password,

        }
    })

    // 4. Сохраняем сессию пользователя
    await createSession(user.id)

    // 5. Перенаправляем на главную
    redirect('/')
}

export async function signin(state, formData) {
    const login = formData.get("login");
    const password = formData.get("password");

    // 1. Validate form fields
    const validatedFields = SignUpSchema.safeParse({
        login,
        password,
    });

    // 2. Если есть ошибки
    if (!validatedFields.success) {
        // console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Тут проверяем что пользователь есть в базе
    const  user = await prisma.user.findUnique({where: {login, password}});
    if (!user) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // 3. Create user session
    await createSession(user.id);

    // 5. Redirect user
    redirect('/')
}

export async function logout() {
    deleteSession()
    redirect('/login')
}
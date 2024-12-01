"use server";
import {PrismaClient} from "@prisma/client";
import {SignUpSchema} from "@/lib/definitions";
import {redirect} from 'next/navigation';
import {createSession, deleteSession, verifySession} from '@/lib/session';
import bcrypt from "bcryptjs";
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
    // 3. Проверяем, что пользователя нет в БД
    // Выбрать, с помощью prisma, пользователя с именем login
    let user = await prisma.user.findUnique({
        where: {email},
    });
    // Если такой есть - отправить ошибку
    if (user) {
        return {
            errors: {
                "email": [
                    "This email is already in use"
                ]
            },
        }
    }


    // 4. Если ошибок нет - вносим данные пользователя в базу данных
    // Хешируем пароли перед записью в БД
    const hashedPassword = await bcrypt.hash(password, 10);
    // Создаем нового пользователя с хэшированным паролем
    user = await prisma.user.create({
        data: {
            login: login,
            email: email,
            password: hashedPassword,

        }
    })

    // 4. Сохраняем сессию пользователя
    await createSession(user.id)

    // 5. Перенаправляем на главную
    // TODO: закрывать модальное окно
    redirect('/')
}

export async function login(state, formData) {
    const login = formData.get("login");
    const password = formData.get("password");

    // 1. Validate form fields
    const validatedFields = SignUpSchema.safeParse({
        login,
        password,
    });

    // 2. Если есть ошибки
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Тут проверяем что пользователь есть в базе
    const user = await prisma.user.findUnique({where: {login, password}});
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
    await deleteSession()
}

export const getUser = async () => {
    const userId = await verifySession();
    if (!userId) return null;
    try {
        return await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                login: true,
                email: true,
            },
        })
    } catch (error) {
        console.log('Failed to fetch user');
        console.log(error);
        return null;
    }
}
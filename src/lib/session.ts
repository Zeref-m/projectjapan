"use server";
import {SignJWT, jwtVerify} from 'jose';
import {cookies} from 'next/headers'

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// Функция шифрует секретным ключом идентификатор пользователя в уникальный токен
export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

// Функция расшифровывает токен и возвращает идентификатор пользователя
export async function decrypt(session = '') {
    const {payload} = await jwtVerify(session, encodedKey, {algorithms: ['HS256']})
    return payload
}

// Сохранение токена в cookies
export async function createSession(userId) {
    // Устанавливаем время жизни сессии 7 дней в миллисекундах
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    // Получаем уникальный токен
    const session = await encrypt({userId, expiresAt});
    const cookieStore = await cookies();
    // Сохраняем токен в сессии
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'strict',
        path: '/',
    })
}

// Обновление сессии
export async function updateSession() {
    const userId = await verifySession();
    if (!userId) {
        return null
    }
    await createSession(userId);
}

// Удаление сессии
export async function deleteSession() {
    const key: string = "session";
    const cookieStore = await cookies()
    cookieStore.delete(key)
}

export const verifySession = async () => {
    const cookieStore = await cookies();
    const sessionJWToken = cookieStore.get('session')?.value;
    if (!sessionJWToken) return null;
    try {
        const payload =  await decrypt(sessionJWToken)
        if (!payload) {
            return null;
        }
        if (payload.expiresAt < Date.now()) {
            cookieStore.delete('session')
            return null;
        }
        return payload.userId;
    } catch (error) {
        console.log('Failed to verify session');
        console.log(error.message)
        return null;
    }
}
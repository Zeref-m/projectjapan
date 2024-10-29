import 'server-only'

import {cookies} from "next/headers";
import {decrypt} from '@/lib/session';
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const verifySession = async () => {
    const cookieStore = await cookies();
    const cookie = cookieStore.get('session')?.value;
    try {
        return await decrypt(cookie)
    } catch (error) {
        console.log('Failed to verify session');
        return null;
    }
}

export const getUser = async () => {
    const userId = verifySession();
    if (userId) {
        try {
            return await prisma.user.findUnique({
                where: {
                    user: userId
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            })
        } catch (error) {
            console.log('Failed to fetch user')
            return null;
        }
    }
    return null;
}
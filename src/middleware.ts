import { NextRequest, NextResponse } from 'next/server'
import {verifySession} from "@/lib/session";

// 1. Определяем защищенные маршруты
const protectedRoutes = ['/admin'];

export default async function middleware(req: NextRequest) {
    // 2. Проверяем доступность маршрута
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)

    // 3. Получаем идентификатор пользователя из cookie
    //console.log(req.nextUrl.pathname)
    const userId = await verifySession();

    // 4. Если пользователь не авторизован - перенаправляем на страницу входа
    if (isProtectedRoute && !userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Иначе передаем обработку следующему middleware
    return NextResponse.next()
}

// Определяем шаблон для запуска middleware
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.ico$).*)',
    ],
}
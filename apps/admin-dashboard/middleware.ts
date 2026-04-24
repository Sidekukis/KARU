import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Memproteksi kerangka dashboard page
    if (pathname.startsWith("/dashboard")) {
        // Pada BetterAuth, token standar sesi dinamakan session_token (dengan awalan untuk opsi secure saat production)
        const sessionCookie = request.cookies.get("better-auth.session_token") || request.cookies.get("__Secure-better-auth.session_token");
        
        if (!sessionCookie) {
            // Redirect pengguna tak dikenal kembali ke halaman awal (login)
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};

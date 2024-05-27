// import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// import { DASHBOARD_PAGES } from './config/pages-url.config'
// import { EnumTokens } from './services/auth-token.service';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ro', 'en', 'ru'],

  // Used when no locale matches
  defaultLocale: 'ro'
});

// export async function middleware(request: NextRequest, response: NextResponse) {
// 	const { url, cookies } = request

// 	const refreshToken = await cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

//   console.log(refreshToken, 'rrefresh token');

// 	const isAuthPage = url.includes('/login')

// 	if (isAuthPage && refreshToken) {
// 		return NextResponse.redirect(new URL('/ru', url))
// 	}

// 	if (isAuthPage) {
// 		return NextResponse.next()
// 	}

// 	if (!refreshToken) {
// 		return NextResponse.redirect(new URL('/', request.url))
// 	}

// 	return NextResponse.next()
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ro|en|ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};

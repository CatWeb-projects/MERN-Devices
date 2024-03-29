import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ro', 'en', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'ro'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ro|en|ru)/:path*']
};
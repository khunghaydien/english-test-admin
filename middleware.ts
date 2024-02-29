import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { localePrefix, locales } from './navigation';
import { ACCESS_TOKEN } from './const/api.const';
import { DEFAULT_ROUTER_WITHOUT_AUTHENTICATED, DEFAULT_ROUTER_WITH_AUTHENTICATED, ignoreRoutesAuthenticated, ignoreRoutesWithoutAuthenticated } from './const/path.const';

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';

  const handleI18nRouting = createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'en'
  });
  const response = handleI18nRouting(request);
  response.headers.set('x-your-custom-locale', defaultLocale);

  const pathname = request.nextUrl.pathname;
  const isAuthenticated = request.cookies.get(ACCESS_TOKEN);
  const defaultRouter = isAuthenticated ? DEFAULT_ROUTER_WITH_AUTHENTICATED : DEFAULT_ROUTER_WITHOUT_AUTHENTICATED;

  if ((isAuthenticated && ignoreRoutesAuthenticated.includes(pathname)) || (!isAuthenticated && !ignoreRoutesWithoutAuthenticated.includes(pathname))) {
    return NextResponse.redirect(new URL(defaultRouter, request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

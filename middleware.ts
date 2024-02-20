import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_ROUTER_WITHOUT_AUTHENTICATED, DEFAULT_ROUTER_WITH_AUTHENTICATED, ignoreRoutes } from "./const/path.const";
import Negotiator from 'negotiator'
import { i18n } from './language/i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { ACCESS_TOKEN } from "./const/api.const";

// config các đầu router k được áp dụng bởi middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

const middleWare = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Append the locale to the path
    const newPathname = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;

    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  const isAuthenticated = request.cookies.get(ACCESS_TOKEN);

  // Define routes with and without authentication
  const defaultRouter = isAuthenticated ? DEFAULT_ROUTER_WITH_AUTHENTICATED : DEFAULT_ROUTER_WITHOUT_AUTHENTICATED;

  // Redirect based on the presence of an access token and the route
  if ((isAuthenticated && ignoreRoutes.includes(pathname)) || (!isAuthenticated && !ignoreRoutes.includes(pathname))) {
    return NextResponse.redirect(new URL(defaultRouter, request.url));
  }

  return NextResponse.next();
}
export default middleWare
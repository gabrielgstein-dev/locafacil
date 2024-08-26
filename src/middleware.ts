import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.href;
  console.log(`Server-side tracking: ${url}`);

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

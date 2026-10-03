import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const OLD_HOSTS = new Set(["priyabratamondal.com", "www.priyabratamondal.com"]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (host && OLD_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "priyabrata.com";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders, "requestHeaders");

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme, "theme");

  const cookieStore = await cookies();
  cookieStore.set("resultsperpage", "20");
  console.log(cookieStore.get("resultsperpage"));

  return new Response("<h1>Profile API Data!</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

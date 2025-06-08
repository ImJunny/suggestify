import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const redirect_uri = "http://127.0.0.1:3000/callback";

export async function GET() {
  const scope = "user-read-private user-read-email";

  const params = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    show_dialog: "true",
  });

  const redirectUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  return NextResponse.redirect(redirectUrl);
}

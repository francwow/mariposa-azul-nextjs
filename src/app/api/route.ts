export async function GET() {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`
  );

  const data = await response.json();

  return Response.json(data);
}

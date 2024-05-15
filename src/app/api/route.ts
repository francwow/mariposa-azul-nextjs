export async function getData() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

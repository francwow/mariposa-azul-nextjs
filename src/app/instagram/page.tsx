import InstagramFeed from "../components/InstagramFeed";

async function getData() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const feed = res.json();

  console.log(feed);

  return feed;
}

export default async function Page() {
  const data = await getData();

  console.log(data);

  return (
    <main>
      <InstagramFeed feed={data} />
    </main>
  );
}

import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import InstagramFeed from "./components/InstagramFeedCopy";

async function getData() {
  let url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const feed = await getData();
  const images = feed.data;
  console.log(images);

  return (
    <main className="main-container">
      <Inicio />
      <InstagramFeed images={images} />
      <Footer />
    </main>
  );
}

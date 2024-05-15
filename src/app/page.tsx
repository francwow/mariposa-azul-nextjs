import Footer from "./components/Footer";
import Inicio from "./components/Inicio";

async function getData() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const feed = await res.json();

  return feed;
}

export default async function Home() {
  const data = await getData();
  const images = data.data;

  console.log(images);

  return (
    <main className="main-container">
      <Inicio images={images} />
      <Footer />
    </main>
  );
}

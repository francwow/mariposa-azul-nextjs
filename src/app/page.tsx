import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Link from "next/link";
import Image from "next/image";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

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

export default function Home() {
  return (
    <main className="main-container">
      <Inicio />
      <InstagramFeed />
      <Footer />
    </main>
  );
}

const InstagramFeed = async () => {
  const feed = await getData();
  const images = feed.data;
  console.log(images);

  return (
    <section className="instagram-feed-container">
      <div className="instagram-feed">
        {images !== null
          ? images.map((image: any) => {
              return (
                <Link
                  href={"https://www.instagram.com/somos.mariposa.azul/"}
                  target="_blank"
                  className="instagram-item"
                  key={image.id}
                >
                  <Image
                    src={image.media_url}
                    alt="instagram image"
                    width={600}
                    height={600}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </section>
  );
};

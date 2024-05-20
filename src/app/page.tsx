import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Image from "next/image";

async function getData() {
  let url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const feed = data.data;
  console.log(feed);

  return (
    <>
      {feed && (
        <main className="main-container">
          <Inicio />
          <section className="instagram-feed-container">
            <div className="instagram-feed">
              {feed.map((image: any) => {
                return (
                  <div key={image.id} className="instagram-item">
                    <Image
                      src={image.media_url}
                      alt="instagram image"
                      width={600}
                      height={600}
                      priority
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <Footer />
        </main>
      )}
    </>
  );
}

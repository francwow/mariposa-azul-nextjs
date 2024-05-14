"use server";

import Image from "next/image";
import Link from "next/link";

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

  const feed = res.json();

  return feed;
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

export default InstagramFeed;

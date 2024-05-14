import Image from "next/image";
import Link from "next/link";

const InstagramFeed = ({ images }: any) => {
  return (
    <section className="instagram-feed-container">
      <div className="instagram-feed">
        {images.map((image: any) => {
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
        })}
      </div>
    </section>
  );
};

export default InstagramFeed;

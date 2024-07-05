"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, memo } from "react";
import { useLanguage } from "../_contexts/ContextHooks";

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
};

type InstagramPaging = {
  cursors: {
    before: string;
    after: string;
  };
};

type InstagramFeedProps = {
  data: InstagramPost[];
  paging?: InstagramPaging;
};

const InstagramFeed = () => {
  const { language } = useLanguage();
  const [instagramFeed, setInstagramFeed] = useState<InstagramFeedProps | null>(
    null
  );
  // const [after, setAfter] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = async (after: string | null = null) => {
    try {
      let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
      if (after) {
        url += `&after=${after}`;
      }
      const data = await fetch(url);

      if (!data.ok) {
        throw new Error("Failed to fetch Instagram feed");
      }

      const feed = await data.json();
      console.log(feed, "fetch");

      setInstagramFeed((prevFeed) => {
        if (prevFeed && prevFeed.data.length > 0) {
          return {
            ...feed,
            data: [...feed.data],
          };
        }
        return feed;
      });
      // setAfter(feed.paging?.cursors.after);
    } catch (err: any) {
      console.error("Error fetching Instagram feed:", err.message);
      setError(err.message);
    }
  };

  // const loadMore = () => {
  //   fetchFeed(after);
  //   console.log("load more");
  // };

  // Fetch the initial feed
  useEffect(() => {
    fetchFeed();
    console.log("useEffect");
  }, []);

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}

      {instagramFeed && (
        <section className="instagram-feed-container">
          <h2>
            {language === "ES"
              ? "Síguenos en Instagram"
              : "Follow us on Instagram"}
          </h2>
          <div className="instagram-feed">
            {instagramFeed.data.map((post: InstagramPost) => (
              <div key={post.id} className="instagram-item">
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  {post.media_type === "VIDEO" ? (
                    // eslint-disable-next-line jsx-a11y/media-has-caption
                    <video
                      src={post.media_url}
                      controls={false}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={post.media_url}
                      alt="Retiro de Mariposa Azul en La Vega, Colombia"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  )}

                  <div className="instagram-caption">
                    <p className="text-white text-center text-xs truncate">
                      {post.caption}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* {after && <button onClick={loadMore}>Load More</button>} */}
        </section>
      )}
    </>
  );
};

export default memo(InstagramFeed);

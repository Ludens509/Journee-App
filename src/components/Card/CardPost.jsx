import { memo, useCallback, useState } from "react";
import OptionsMenu from "../Popover/OptionMenu";
import { HeartFilled, HeartOutline } from "./utils";



  // Memoized individual card component for better performance
  const PostCard = memo(({ item, isLiked, onLike }) => {
    return (
      <article className="group relative bg-white/80  backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/20 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out w-full p-6 my-4">
        {/* Header Section */}
        <header className="mb-4">
          <h2 className="text-2xl sm:text-xl font-bold tracking-tight text-gray-900  mb-2">
            {item.title}
          </h2>
          <p className="font-normal text-gray-900 dark:text-gray-400 text-sm leading-relaxed  sm:block line-clamp-3">
            {item.content}
          </p>
        </header>

        {/* Footer Section */}
        <footer className="flex items-center justify-between py-3 border-t border-gray-200/50 dark:border-gray-700/50">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {item.createdAt.slice(0, 10)}
          </time>

          <div className="flex items-center gap-4">
            {/* Like Button */}
            <button
              type="button"
              onClick={onLike}
              className="transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:bg-gray-100 rounded-full p-1"
              aria-label={isLiked ? "Unlike post" : "Like post"}
            >
              {isLiked ? (
                <HeartFilled size={24} className="drop-shadow-sm" />
              ) : (
                <HeartOutline
                  size={24}
                  className="text-gray-600 dark:text-gray-400"
                />
              )}
            </button>

            {/* Options Menu */}
            <OptionsMenu />
          </div>
        </footer>

        {/* Image Section */}
        {/* {item.image && (
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title || "Post image"}
              className="w-full h-auto object-cover max-h-96"
              loading="lazy"
            />
          </div>
        )} */}
      </article>
    );
  });

  // Main component
  const CardPost = ({ data }) => {
    
    const [likedPosts, setLikedPosts] = useState({});

    const handleLike = useCallback((id) => { //useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
        //prev is the previous like post state(current liked posts object)
      setLikedPosts((prev) => ({
        ...prev, //spread operator ,copy all existing liked posts
        [id]: !prev[id], //Toggle this specific post
      }));
    }, []);

    if (!data.length) {
      return (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No posts to display
        </div>
      );
    }
    //   const handleLike = (id) => {
    //     setLikedPosts((prev) => ({
    //       ...prev,
    //       [id]: !prev[id],
    //     }));
    //     console.log(`Post ${id} liked status:`, !likedPosts[id]);
    //   };

    return (
      <>
        <section className="space-y-4">
          {data.map((item) => (
            <PostCard
              key={item.id}
              item={item}
              isLiked={!!likedPosts[item.id]}
              onLike={() => handleLike(item.id)}
            />
          ))}
        </section>
      </>
    );
  };


export default CardPost;

import { format } from "date-fns";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-md border">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pb-0">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={thumbnail_url} alt={title} className="rounded-lg w-full" />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-gray-600">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1 hover:underline">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 border-t pt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

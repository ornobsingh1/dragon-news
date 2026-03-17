import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details, category_id } = news;

  return (
    <div className="space-y-5">
      <img className="w-full h-100 object-cover" src={image_url} alt={title} />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-accent">{details}</p>
      <Link
        to={`/category/${category_id}`}
        className="btn bg-secondary hover:bg-pink-700 text-white mb-5"
      >
        <ArrowLeft />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;

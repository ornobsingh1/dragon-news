import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div>
      <div className="flex items-center gap-5 bg-base-200 p-3">
        <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
        <Marquee className="flex gap-4" pauseOnHover={true} speed={60}>
          <p className="font-semibold">
            Match Highlights: Germany vs Spain — as it happened!
          </p>
          <p className="font-semibold">
            Match Highlights: Germany vs Spain — as it happened!
          </p>
          <p className="font-semibold">
            Match Highlights: Germany vs Spain — as it happened!
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;

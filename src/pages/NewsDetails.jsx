import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const myNews = data.find((singleNews) => singleNews.id == id);
    setNews(myNews);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h2 className="text-2xl font-semibold mb-4">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-2">
          <LatestNews />
        </section>
      </header>
      <main>
        <section className="left_side"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right_side"></section>
      </main>
    </div>
  );
};

export default HomeLayout;

import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-2">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-2">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-4">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit ">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;

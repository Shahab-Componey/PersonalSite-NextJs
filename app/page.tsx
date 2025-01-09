import AboutMe from "./components/organisms/AboutMe";
import Header from "./components/organisms/Header";
import Landing from "./components/organisms/Landing";
import Skills from "./components/organisms/Skills";
import Portofolio from "./components/organisms/Portofolio";
import Footter from "./components/organisms/Footer";

export default function Home() {
  return (
    <section className="containers">
      <section className="  flex flex-col section">
        <Header></Header>
        <Landing></Landing>
      </section>
      <section className="flex flex-col  section">
        <AboutMe></AboutMe>
      </section>
      <section className="flex flex-col  section">
        <Skills></Skills>
      </section>
      <section className="flex flex-col  section sm:mt-96">
        <Portofolio></Portofolio>
        <Footter></Footter>
      </section>
    </section>
  );
}

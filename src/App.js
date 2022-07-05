import { useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Sans&display=swap";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  }, [])
  return (
    <div className="">
      <header>
        <Header />
      </header>

      <section>
        <Content />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

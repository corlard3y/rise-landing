import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
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

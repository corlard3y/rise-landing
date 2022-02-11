import "./App.css";
import Content from "./components/Content";
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
    </div>
  );
}

export default App;

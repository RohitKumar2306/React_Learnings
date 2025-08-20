import CoreConcepts from "./components/CoreConcepts.jsx";
import Footer from "./components/Footer/Footer";
import Examples from "./components/Examples";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <main>
          <Header />
          <CoreConcepts />
          <Examples />
          <Footer />
      </main>
    </>
  );
}

export default App;
import "./App.css";
import Footer2 from "./ReusableComponents/Footer2";
import Footer1 from "./ReusableComponents/Footer";
import Header from "./ReusableComponents/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;

import "./App.css";
import Footer2 from "./ReusableComponents/Footer/Footer2";
import Footer1 from "./ReusableComponents/Footer/Footer1";
import Header from "./ReusableComponents/Header/Header";
import AllRoutes from "./Routing/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <AllRoutes />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;

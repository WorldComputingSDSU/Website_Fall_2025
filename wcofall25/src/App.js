import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Upcoming from "./components/upcomingEvents/Upcoming";
import Connect from "./components/connect/Connect";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Upcoming />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;

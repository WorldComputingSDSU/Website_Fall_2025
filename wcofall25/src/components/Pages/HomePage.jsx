import React from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import Upcoming from "../upcomingEvents/Upcoming";
import Connect from "../connect/Connect";
import Footer from "../footer/Footer";
import "/Users/darielgutierrez/Desktop/Website_Fall_2025/wcofall25/src/index.css";

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Upcoming />
      <Connect />
      <Footer />
    </div>
  );
};

export default HomePage;

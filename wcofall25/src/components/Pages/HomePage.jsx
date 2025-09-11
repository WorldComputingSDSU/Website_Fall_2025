import React from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import Upcoming from "../upcomingEvents/Upcoming";
import Connect from "../connect/Connect";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import "../../index.css";

const HomePage = () => {
  return (
    <div className="App">
      <Header />

      {/* Home Section - Hero Animation */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}>
        <Home />
      </motion.div>

      {/* Upcoming Events Section - Slide in from left */}
      <motion.div
        initial={{ opacity: 0, x: -80, rotateY: -15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}>
        <Upcoming />
      </motion.div>

      {/* Connect Section - Slide in from right */}
      <motion.div
        initial={{ opacity: 0, x: 80, rotateY: 15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}>
        <Connect />
      </motion.div>

      {/* Footer - Fade up with scale */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default HomePage;

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Hackathon.css";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScO3Vx6TK6-mR5Ye-1cuGS0Qbr_BvUk8JbTutPjbuYX83EbBw/viewform";

const detailCards = [
  {
    label: "When",
    value: "TBD",
    note: "We're aiming for sometime in Fall 2026. The exact date and time are still being worked out.",
  },
  {
    label: "Where",
    value: "TBD",
    note: "We're planning to host it on campus at San Diego State University.",
  },
  {
    label: "Who",
    value: "All Majors",
    note: "Students of all skill levels are welcome, no prior hackathon experience is required!",
  },
];

const expectations = [
  "A weekend of building projects alongside other SDSU students",
  "Workshops and mentorship from WCO Exec board members and industry professionals",
  "Help finding a team if you don't have one yet",
  "Food, prizes, and a space to work in all weekend",
  "Final demos in front of judges from the tech industry",
];

const Hackathon = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container sx={{ px: 2 }}>
        <Header />

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>
          <Box
            sx={{
              mt: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "18px",
            }}>
            <span className="hackathon-badge">
              <span className="hackathon-badge-dot" />
              In the Works
            </span>
            <Typography
              sx={{
                fontSize: { xs: "2.2rem", md: "3.2rem" },
                fontWeight: 900,
                color: "#162852",
                lineHeight: 1.1,
              }}>
              WCO Fall 2026 Hackathon
            </Typography>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: 900,
                color: "#162852",
                maxWidth: "760px",
              }}>
              We're planning a hackathon for Fall 2026, updates will be shared soon! Fill out the form so we can gage interest. 
            </Typography>
            <Typography
              sx={{
                fontSize: "1.05rem",
                color: "#6b7280",
                maxWidth: "680px",
                lineHeight: 1.6,
              }}>
              Nothing is official yet, so we don't have a date, time, or
              location to share. Fill out the interest form below and we'll let
              you know as soon as we do. Students of all skill levels are
              welcome!
            </Typography>
            <Box sx={{ mt: 1 }}>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}>
                <button className="hackathon-cta">Fill Out the Form</button>
              </a>
            </Box>
          </Box>
        </motion.div>

        {/* Detail cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}>
          <Box
            sx={{
              mt: 8,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: "20px",
            }}>
            {detailCards.map((card) => (
              <div className="hackathon-card" key={card.label}>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6b7280",
                    mb: "6px",
                  }}>
                  {card.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#162852",
                    mb: "8px",
                  }}>
                  {card.value}
                </Typography>
                <Typography
                  sx={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.6 }}>
                  {card.note}
                </Typography>
              </div>
            ))}
          </Box>
        </motion.div>

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>
          <Box sx={{ mt: 10, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "#162852",
                mb: "8px",
                lineHeight: 1.1,
              }}>
              What We're Planning
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "#6b7280", mb: "20px" }}>
              Nothing here is final, but this is what we're hoping to put
              together for you.
            </Typography>
            <Box>
              {expectations.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: "1.05rem",
                    color: "#6b7280",
                    mb: "10px",
                    lineHeight: 1.6,
                  }}>
                  • {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Interest form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}>
          <Box
            sx={{
              mt: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "12px",
            }}>
            <Typography
              sx={{
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "#162852",
                lineHeight: 1.1,
              }}>
              Interest Form
            </Typography>
            <Typography
              sx={{
                fontSize: "1.05rem",
                color: "#6b7280",
                maxWidth: "640px",
                lineHeight: 1.6,
                mb: "12px",
              }}>
              The form only takes about a minute, and filling it out isn't a
              commitment to attend. It just helps us plan the right size event
              and figure out what you'd like to see.
            </Typography>
            <iframe
              src={`${FORM_URL}?embedded=true`}
              height="1100"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="hackathon-iframe"
              title="WCO Fall 2026 Hackathon Interest Form">
              Loading…
            </iframe>
            <Typography sx={{ fontSize: "0.95rem", color: "#6b7280", mt: 1 }}>
              Form not loading?{" "}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#162852", fontWeight: 700 }}>
                Open it in a new tab
              </a>
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}>
          <Footer />
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hackathon;

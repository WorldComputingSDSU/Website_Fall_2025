import React from "react";
import Header from "../header/Header";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import "./Membership.css";

const MemberShipForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container sx={{ px: 2 }}>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>
          <Box
            className="membership-row"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: "20px", lg: "60px" },
              mt: 12,
              alignItems: "flex-start",
              minHeight: "800px",
            }}>
            {/* Left side - Content */}
            <motion.div
              className="membership-left"
              initial={{ opacity: 0, x: -60, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "24px",
                flex: "0 0 500px",
                maxWidth: "500px",
              }}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "#162852",
                    mb: "18px",
                    lineHeight: 1.1,
                    marginTop: "10px",
                    textAlign: { xs: "center", lg: "left" },
                  }}>
                  Join the World Computing Organization!
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "900",
                    color: "#162852",
                    textAlign: { xs: "center", lg: "left" },
                  }}>
                  Join the World Computing Organization and be part of our team!
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    color: "#6b7280",
                    textAlign: { xs: "center", lg: "left" },
                    lineHeight: 1.6,
                  }}>
                  Fill out the form on the right to become a member of WCO. We
                  welcome students of all skill levels!
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    textAlign: { xs: "center", lg: "left" },
                    lineHeight: 1.6,
                  }}>
                  As a member, you'll have access to:
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}>
                <Box
                  sx={{
                    pl: { xs: 0, lg: 2 },
                    textAlign: { xs: "center", lg: "left" },
                  }}>
                  <Typography
                    sx={{ fontSize: "0.95rem", color: "#6b7280", mb: 1 }}>
                    • Hands-on development projects
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.95rem", color: "#6b7280", mb: 1 }}>
                    • Networking opportunities with industry professionals
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.95rem", color: "#6b7280", mb: 1 }}>
                    • Guest Speakers from within the tech industry
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.95rem", color: "#6b7280", mb: 1 }}>
                    • Resume review and career guidance
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.95rem", color: "#6b7280", mb: 1 }}>
                    • Weekly meetings and workshops
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.95rem", color: "#6b7280", mb: 1 }}>
                    • A community of like-minded, friendly individuals
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>

            {/* Right side - Google Form */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                flex: "0 0 640px",
                width: "640px",
                display: "flex",
                justifyContent: "center",
              }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotateX: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfqb9YMJvKk5xndeUM6NpKmzShYeH6pg-jTo_Njry-WPV5MNA/viewform?embedded=true"
                  width="640"
                  height="1360"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  title="WCO Membership Form">
                  Loading…
                </iframe>
              </motion.div>
            </motion.div>
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

export default MemberShipForm;

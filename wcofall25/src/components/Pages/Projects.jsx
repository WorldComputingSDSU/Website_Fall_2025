import React from "react";
import Header from "../header/Header";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../footer/Footer";
import ProjectShowcase from "../ProjectShowcase/ProjectShowcase";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}>
          <Box sx={{ mt: 12 }}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "#162852",
                mb: "18px",
                lineHeight: 1.1,
                textAlign: "center",
              }}>
              Our Recent Projects
            </Typography>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: "900",
                color: "#162852",
                textAlign: "center",
              }}>
              The WCO Development Team is open to all students, no prior
              experience is required!
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}>
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}>
              <ProjectShowcase
                title="SDSU Basketball Scouting Report"
                description="The SDSU Basketball scouting report is a WCO project that gathers relevant player and team data to assist the SDSU Men's basketball team create scouting reports for opposing teams."
                stack="Python, FastAPI, Pandas, Beautiful Soup"
                image="https://media.cbs8.com/assets/KFMB/images/7722b931-59fb-4e6b-aa46-56bc9325d260/7722b931-59fb-4e6b-aa46-56bc9325d260_1140x641.jpg"
                link="https://github.com/WorldComputingSDSU/AztecBBallScouting/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}>
              <ProjectShowcase
                title="WCO Personal Website"
                description="This exact website was made by WCO members! It supports project applications, resume review tools, and the clubs live schedule"
                stack="Express, Node, React"
                image="https://www.guidestar.org/ViewEdoc.aspx?eDocId=9477149&approved=True"
                link="https://github.com/WorldComputingSDSU/Website_Fall_2025/"
              />
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

export default Projects;

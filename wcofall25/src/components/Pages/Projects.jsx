import React from "react";
import Header from "../header/Header";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../footer/Footer";
import ProjectShowcase from "../ProjectShowcase/ProjectShowcase";
const Projects = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container>
        <Header />
        <Box sx={{ mt: 12 }}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "#162852",
              mb: "18px",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Our Recent Projects
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: "900",
              color: "#162852",
              textAlign: "center",
            }}
          >
            The WCO Development Team is open to all students, no prior
            experience is required!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <ProjectShowcase
            title="SDSU Basketball Scouting Report"
            description="The SDSU Basketball scouting report is a WCO project that gathers relevant player and team data to assist the SDSU Men's basketball team create scouting reports for opposing teams."
            stack="Python, FastAPI, Pandas, Beautiful Soup"
            image="https://media.cbs8.com/assets/KFMB/images/7722b931-59fb-4e6b-aa46-56bc9325d260/7722b931-59fb-4e6b-aa46-56bc9325d260_1140x641.jpg"
            link="https://github.com/WorldComputingSDSU/AztecBBallScouting/"
          />
          <ProjectShowcase
            title="WCO Personal Website"
            description="This exact website was made by WCO members! It supports project applications, resume review tools, and the clubs live schedule"
            stack="Express, Node, React"
            image="https://www.guidestar.org/ViewEdoc.aspx?eDocId=9477149&approved=True"
            link="https://github.com/WorldComputingSDSU/Website_Fall_2025/"
          />
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Projects;

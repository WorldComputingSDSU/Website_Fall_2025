import React from "react";
import Header from "../header/Header";
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Divider,
} from "@mui/material";
import Footer from "../footer/Footer";

const ExecMembers = () => {
  const execMembers = [
    {
      name: "Enzo Weiss",
      position: "President",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGwXAlHhYAJhw/profile-displayphoto-shrink_200_200/B4EZZmE7k0HYAg-/0/1745469291462?e=1760572800&v=beta&t=Gcyw2PLuQbTz2KcEuJfcN1EBIZ9aIz_Ss2QWLkO8pJY",
      bio: "Computer Science major with a passion for technology and leadership. Leading WCO to new heights through strategic vision and collaborative excellence.",
      year: "Junior",
      email: "eweiss5244@sdsu.edu",
    },
    {
      name: "Caleb Dickson",
      position: "Vice President",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHmBMt1Fe8y8A/profile-displayphoto-shrink_200_200/B56ZQoKTztGQAY-/0/1735840579562?e=1760572800&v=beta&t=PFB_XHcTmelH6BjnqMW0rYs39o2H2FDSnls5yIk7ngI",
      bio: "Computer Science student focused on building innovative solutions and fostering community growth. Dedicated to advancing our mission through technology.",
      year: "Junior",
      email: "cdickson9858@sdsu.edu",
    },
    {
      name: "Deriel Gutierrez",
      position: "Director of Technology",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFq17E8o7NgpA/profile-displayphoto-scale_200_200/B56ZeD3mXeHQAY-/0/1750264086048?e=1760572800&v=beta&t=FMljm0rqoh263eUUg8BmntVEHbZ3-oUQpDght0RyEZ0",
      bio: "Computer Science student focused on helping members learn and grow through different projects, workshops, and events. Previously @ SalesForce.",
      year: "Senior",
      email: "dgutierrez4085@sdsu.edu",
    },
    {
      name: "Adam Macfarlane",
      position: "Project Manager",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEabVDJk4TsMw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714589141629?e=1760572800&v=beta&t=lVVEaUA690OEUTz1cA2Wj1hGEsMd_i6DVkgo6Qlq9nE",
      bio: "Computer Science student orchestrating professional workshops, and collaborative projects.",
      year: "Junior",
      email: "amacfarlane2840@sdsu.edu",
    },
    {
      name: "Luke files",
      position: "Secretary",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFbq8nct1cP6w/profile-displayphoto-shrink_200_200/B56ZUkoksiHsAY-/0/1740076371005?e=1760572800&v=beta&t=g_I8NhyFx904hDOYWgzc1MXQeoHbjHP4bS11TwIoGdI",
      bio: "Computer Science student specializing in organizational communications, documentation, and member engagement initiatives.",
      year: "Junior",
      email: "lfiles9197@sdsu.edu",
    },
    {
      name: "Victoria Napoleon",
      position: "Treasurer",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFpWLGhgqu1Wg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724917967863?e=1760572800&v=beta&t=9L1VybaE7AEwCgxYl1N7h-A6ZXqshTgpPRdICvxtxFs",
      bio: "Business major with expertise in financial management and strategic resource allocation for organizational growth.",
      year: "Junior",
      email: "vnapoleon9930@sdsu.edu",
    },
    {
      name: "Jacob Silva",
      position: "VP of Proffesional Development",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHTiNbMeARQhw/profile-displayphoto-shrink_200_200/B56ZPGemPcGsAY-/0/1734201730582?e=1760572800&v=beta&t=eazXBMh-qhBIxFV0EpxYpRCR2po2RnwHfvKtCVbbUeE",
      bio: "Computer Science student orchestrating professional workshops, networking events, and community outreach programs to enhance member experience.",
      year: "Senior",
      email: "jsilva8771@sdsu.edu",
    } /*,
    {
      name: "UnKnown",
      position: "VP of Outreach",
      image: "https://via.placeholder.com/200x200/162852/ffffff?text=ER",
      bio: "Computer Science student orchestrating professional workshops, networking events, and community outreach programs to enhance member experience.",
      year: "Junior",
      email: "@sdsu.edu",
    },*/,
  ];

  const leadership = execMembers.slice(0, 2);
  const executiveTeam = execMembers.slice(2);

  const MemberCard = ({ member, isLeadership = false }) => (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: isLeadership
          ? "0 8px 32px rgba(22, 40, 82, 0.12)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        border: isLeadership ? "2px solid #162852" : "1px solid #e5e7eb",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: isLeadership
            ? "0 16px 40px rgba(22, 40, 82, 0.2)"
            : "0 12px 32px rgba(0,0,0,0.15)",
        },
      }}>
      <Box sx={{ p: 2, textAlign: "center", flexGrow: 1 }}>
        <Avatar
          src={member.image}
          alt={member.name}
          sx={{
            width: isLeadership ? 96 : 80,
            height: isLeadership ? 96 : 80,
            mx: "auto",
            mb: 1.5,
            fontSize: isLeadership ? "1.6rem" : "1.4rem",
            fontWeight: "bold",
            border: "3px solid #f8fafc",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#162852",
            mb: 0.5,
            fontSize: isLeadership ? "1.1rem" : "1rem",
          }}>
          {member.name}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            color: "#162852",
            fontWeight: 600,
            mb: 0.5,
            fontSize: isLeadership ? "0.95rem" : "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}>
          {member.position}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#9ca3af",
            mb: 1,
            fontWeight: 500,
            fontSize: "0.8rem",
          }}>
          Class of{" "}
          {member.year === "Senior"
            ? "2026"
            : member.year === "Junior"
            ? "2027"
            : "2028"}
        </Typography>

        <Divider sx={{ my: 1, mx: 1 }} />

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            lineHeight: 1.5,
            mb: 1,
            fontStyle: "italic",
            fontSize: "0.85rem",
          }}>
          {member.bio}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#162852",
            fontWeight: 500,
            fontSize: "0.8rem",
          }}>
          {member.email}
        </Typography>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Header />

        {/* Hero Section */}
        <Box sx={{ mt: 12, mb: 10, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 900,
              color: "#162852",
              mb: 2,
              lineHeight: 1.1,
            }}>
            Executive Board
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "#6b7280",
              maxWidth: "700px",
              mx: "auto",
              mb: 3,
              lineHeight: 1.6,
            }}>
            Meet the dedicated leaders driving innovation and excellence at the
            World Computing Organization
          </Typography>
          <Box
            sx={{
              width: "80px",
              height: "4px",
              backgroundColor: "#162852",
              mx: "auto",
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Leadership Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "#162852",
              mb: 6,
              textAlign: "center",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                backgroundColor: "#162852",
                borderRadius: "2px",
              },
            }}>
            Leadership Team
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              maxWidth: 1200,
              mx: "auto",
            }}>
            {leadership.map((member, index) => (
              <MemberCard key={index} member={member} isLeadership={true} />
            ))}
          </Box>
        </Box>

        {/* Executive Team Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "#162852",
              mb: 6,
              textAlign: "center",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                backgroundColor: "#162852",
                borderRadius: "2px",
              },
            }}>
            Executive Directors
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              },
            }}>
            {executiveTeam.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </Box>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            mb: 8,
            p: 6,
            backgroundColor: "#f8fafc",
            borderRadius: "16px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#162852",
              mb: 2,
            }}>
            Get in Touch
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#6b7280",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}>
            Have questions or want to get involved? Our executive board is here
            to help. Reach out to any of our team members using the contact
            information above.
          </Typography>
        </Box>

        <Footer />
      </Container>
    </Box>
  );
};

export default ExecMembers;

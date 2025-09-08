import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectShowcase({
  image,
  title,
  description,
  stack,
  link,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        whileHover={{
          scale: 1.04,
          boxShadow: "0 8px 32px rgba(30,41,59,0.18)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ borderRadius: 12 }}
      >
        <Card
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#162852",
            color: "white",
            borderRadius: 3,
            p: 2,
            mb: 3,
            border: "1.7px, solid, silver",
          }}
        >
          {/* Project Screenshot */}
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: { xs: "100%", md: "30%" },
              borderRadius: 2,
            }}
          />

          {/* Project Content */}
          <CardContent
            sx={{ flex: 1, ml: { xs: 0, md: 3 }, mt: { xs: 2, md: 0 } }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {title}
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              {description}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "gray.400", mb: 2 }}
            >
              {stack}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href={link}
              target="_blank"
              startIcon={<GitHubIcon />}
              sx={{
                mt: 1,
                fontWeight: 450,
                textTransform: "none",
                boxShadow: "none",
                backgroundColor: "#254576ff",
              }}
            >
              GitHub Repo
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

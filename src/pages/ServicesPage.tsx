"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import { AccessTime, AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

export default function ServicesPage() {
  const services = {
    facials: [
      {
        name: "Luxury Facial",
        duration: "55 min",
        price: "£65",
        description:
          "A comprehensive facial treatment using premium products for deep cleansing, exfoliation, and hydration.",
      },
      {
        name: "Dermaplaning",
        duration: "30 min",
        price: "£25",
        description:
          "Gentle exfoliation technique to remove dead skin cells and peach fuzz (female only).",
      },
    ],
    scalp: [
      {
        name: "Japanese-Inspired Luxury HeadSpa",
        duration: "1 hr",
        price: "£105",
        description:
          "Traditional Japanese scalp treatment for ultimate relaxation and hair health.",
      },
      {
        name: "HeadSpa + Luxury Facial",
        duration: "1 hr 40 min",
        price: "£145",
        description:
          "Combined treatment for complete head-to-face rejuvenation.",
      },
    ],
    body: [
      {
        name: "Body Sculpting",
        duration: "Duration varies",
        price: "From £80",
        description:
          "Advanced body contouring treatments for skin tightening and sculpting.",
      },
      {
        name: "Wood Therapy",
        duration: "60 min",
        price: "£90",
        description:
          "Natural wood tools used for lymphatic drainage and body sculpting.",
      },
    ],
    massage: [
      {
        name: "ASMR Head Massage",
        duration: "45 min",
        price: "£55",
        description:
          "Relaxing head massage designed to trigger ASMR responses for deep relaxation.",
      },
    ],
  };

  const addOns = [
    { name: "Vitamin C / L-Ascorbic Acid Serum Boost", price: "+£12" },
    { name: "Collagen Booster", price: "+£15" },
    { name: "LED Light Therapy", price: "+£15" },
    { name: "Aromatherapy Upgrade", price: "+£10" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  const ServiceSection = ({
    title,
    tagline,
    services,
  }: {
    title: string;
    tagline: string;
    services: any[];
  }) => (
    <Box sx={{ mb: 8 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Typography variant="h4" sx={{ color: "#2c3e50", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: "#7f8c8d", mb: 4 }}>
          {tagline}
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeIn}
          >
            <Card
              sx={{
                p: 3,
                boxShadow: 4,
                borderRadius: 3,
                background: "linear-gradient(to right, #fff, #fdf7f1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#2c3e50", fontWeight: "bold" }}
                  >
                    {service.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Chip
                      icon={<AccessTime />}
                      label={service.duration}
                      variant="outlined"
                      sx={{ borderColor: "#a67c5b", color: "#a67c5b" }}
                    />
                    <Chip
                      icon={<AttachMoney />}
                      label={service.price}
                      sx={{ backgroundColor: "#a67c5b", color: "white" }}
                    />
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 3 }}>
                  {service.description}
                </Typography>
                <Button
                  component={Link}
                  to="/booking"
                  variant="contained"
                  sx={{
                    backgroundColor: "#a67c5b",
                    "&:hover": { backgroundColor: "#8b6f4e" },
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ py: 8, background: "#fff8f3" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ color: "#2c3e50", mb: 6, fontWeight: 600 }}
          >
            Our Services
          </Typography>
        </motion.div>

        <ServiceSection
          title="Facials"
          tagline="Rejuvenating treatments for radiant, healthy skin"
          services={services.facials}
        />
        <ServiceSection
          title="Scalp & Head Spa"
          tagline="Japanese-inspired treatments for ultimate relaxation"
          services={services.scalp}
        />
        <ServiceSection
          title="Body Treatments"
          tagline="Advanced therapies for body sculpting and skin tightening"
          services={services.body}
        />
        <ServiceSection
          title="Massage"
          tagline="Therapeutic massage for deep relaxation"
          services={services.massage}
        />

        {/* Add-ons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              backgroundColor: "#f0e6db",
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Typography variant="h4" sx={{ color: "#2c3e50", mb: 4 }}>
              Treatment Add-Ons
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {addOns.map((addon, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 250,
                    p: 2,
                    background: "#fff",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" sx={{ color: "#2c3e50" }}>
                      {addon.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#a67c5b", fontWeight: "bold" }}
                    >
                      {addon.price}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Free Consultation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              textAlign: "center",
              background: "#2c3e50",
              color: "white",
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Free Consultation
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              15-minute skin consultation for new clients – Complimentary
            </Typography>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#a67c5b",
                "&:hover": { backgroundColor: "#8b6f4e" },
              }}
            >
              Book Your Free Consultation
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

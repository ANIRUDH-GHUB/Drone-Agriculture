import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useState } from "react";
import "./CreateProfile.scss";
import farmerLogo from "./../../../assets/images/farmer.svg";
import droneLogo from "./../../../assets/images/drone.svg";
import Button from "../../../common/Button/Button";
import { useNavigate } from "react-router";

const CreateProfile = () => {
  const [role, setRole] = useState<"farmer" | "pilot" | "">("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const changeRole = (r: "farmer" | "pilot" | "") => {
    setRole(r);
  };
  const onNext = () => {
    console.log("clicked");
    navigate("/farmer-profile");
  };
  return (
    <Box
      sx={{
        textAlign: "start",
        padding: "2rem 3rem",
      }}
      id="create-profile"
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "600", mb: "2rem", fontSize: "36px" }}
      >
        Welcome! Let’s finish your registration.
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "600", my: "2rem", fontSize: "33px" }}
        >
          Select Role to Register As
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "2rem",
            maxWidth: "1400px",
            margin: "auto",
          }}
        >
          <ImageListItem>
            <img
              src={farmerLogo}
              srcSet={farmerLogo}
              className={role === "farmer" ? "active" : ""}
              alt="farmer logo"
              loading="lazy"
              onClick={() => changeRole("farmer")}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "600", my: "2rem", fontSize: "30px" }}
            >
              Farmer
            </Typography>
          </ImageListItem>
          <Typography variant="h5" gutterBottom sx={{ fontSize: "25px" }}>
            or
          </Typography>
          <ImageListItem>
            <img
              src={droneLogo}
              srcSet={droneLogo}
              className={role === "pilot" ? "active" : ""}
              alt="drone logo"
              loading="lazy"
              onClick={() => changeRole("pilot")}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "600", my: "2rem", fontSize: "30px" }}
            >
              Drone Pilot
            </Typography>
          </ImageListItem>
        </Box>
        <Button onClick={onNext} loading={isLoading} disabled={!role}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CreateProfile;

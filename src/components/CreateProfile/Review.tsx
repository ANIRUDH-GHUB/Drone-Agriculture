import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { LandOwnerType, STATE } from "../../model/interfaces";
import React from "react";
import { useSelector } from "react-redux";

interface ReviewProps {
  role?: "farmer" | "pilot" | "";
}

const Review: React.FC<ReviewProps> = (props) => {
  const { profile } = useSelector((state: STATE) => state);
  console.log(profile);
  const [values, setValues] = useState<LandOwnerType>({
    name: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    totalArea: 0,
    date: null,
  });

  const { userDetails, farms, landOwner, drivingLicence, billing } = profile;

  // const userDetails =

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  return (
    <Box
      sx={{
        textAlign: "start",
        padding: "2rem 3rem",
        marginTop: "50px",
      }}
      id="create-profile"
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontWeight: "600", mb: "2rem", fontSize: "36px" }}
      >
        Review Registration Information
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
      ></Typography>
      <Box className="form-details">
        <Box id="user-details">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "600", fontSize: "20px" }}
          >
            User Information
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {userDetails.name}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {userDetails.phone}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {userDetails.email}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {userDetails.birthday}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {userDetails.gender === "M"
              ? "Male"
                ? "F"
                : "Female"
              : "Non-Binary"}
          </Typography>
        </Box>

        {props.role === "farmer" && (
          <Box id="farm-details">
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "600", fontSize: "20px" }}
            >
              Farm Information and Map Boundaries
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
              {farms?.[0]?.name}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
              {farms?.[0]?.address}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
              {farms?.[0]?.city}, {farms?.[0]?.country}, {farms?.[0]?.zip}
            </Typography>
          </Box>
        )}
        <Box id="verify-details">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "600", fontSize: "20px" }}
          >
            Verification
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            Land Owner Certificate
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            Business License
          </Typography>
        </Box>
        <Box id="billing-details">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "600", fontSize: "20px" }}
          >
            Billing
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {billing.name}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {billing.cardNumber}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontSize: "14px" }}>
            {billing.expiration}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;

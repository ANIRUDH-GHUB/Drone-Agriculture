import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ImageUpload from "../../../common/ImageUpload/ImageUpload";
import { FarmUtilityType } from "../../../model/interfaces";

const VerifyFarmOps: React.FC = (props) => {
  const [values, setValues] = useState<FarmUtilityType>({
    agreementId: "",
    date: "",
    image: "",
  });

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
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "600", mb: "2rem", fontSize: "36px" }}
      >
        Let’s verify your farm.
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
      >
        Please submit a copy of your farm’s utliliy bill. This can be an
        electric bill, or alternatively a water bill.
      </Typography>
      <Box className="form-details">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "600", fontSize: "28px" }}
        >
          Farm Utility Bill
        </Typography>
        <Box component="form" sx={{ width: "100%" }}>
          <TextField
            sx={{ m: 1, width: "33ch", float: "left" }}
            id="standard-error"
            label="Statement Agreement ID"
            variant="standard"
            onChange={(e) => handleChange(e, "agreementId")}
          />
          <TextField
            sx={{ m: 1, width: "33ch", float: "right" }}
            id="standard-error"
            label="Date of bill statement"
            variant="standard"
            onChange={(e) => handleChange(e, "date")}
          />
        </Box>
      </Box>
      <Box sx={{ my: 4 }}>
        <ImageUpload />
      </Box>
      <Box className="form-details" sx={{ my: 3 }}>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontWeight: "600", fontSize: "20px" }}
        >
          Add Another Utility Bill
        </Typography>
        <Box
          className="form-details"
          sx={{
            my: 3,
            position: "absolute",
            padding: "20px",
            transform: "translate(-149px, -40px);",
            color: "#367BF5",
          }}
        >
          <AddIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default VerifyFarmOps;

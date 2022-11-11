import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Typography from "@mui/material/Typography";

const ImageUpload = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        background: " #F3F3F3",
        border: "1px dashed #787878",
        height: "100px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9px",
      }}
    >
      <IconButton>
        <AddAPhotoIcon />
      </IconButton>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ fontWeight: "500", fontSize: "17px" }}
      >
        Upload pdf/image of certificate
      </Typography>
    </Box>
  );
};

export default ImageUpload;

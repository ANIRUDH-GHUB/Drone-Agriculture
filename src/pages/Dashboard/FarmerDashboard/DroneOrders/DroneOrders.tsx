import React from "react";
import FarmerHeader from "../FarmerHeader";
import Box from "@mui/material/Box";
import BookingTable from "../BookingTable/BookingTable";
import profileImage from "./../../../../assets/images/profileImage.svg";

const DroneOrders = () => {
  return (
    <Box>
      <FarmerHeader
        header="Welcome, Andy!"
        description="Check the status of your drone service bookings here."
        profileIcon={profileImage}
      />
      <BookingTable />
    </Box>
  );
};

export default DroneOrders;

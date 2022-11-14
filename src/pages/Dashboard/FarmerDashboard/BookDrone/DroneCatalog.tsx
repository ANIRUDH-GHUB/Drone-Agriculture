import { Box, ListItem } from "@material-ui/core";
import React from "react";
import { mockDrones } from "../../../../model/drones.model";
import { DroneType } from "../../../../model/interfaces";
import DroneItem from "./DroneItem";
// import { getAllDrones } from "../../../../services/droneService";
import Backdrop from "@mui/material/Backdrop";
// import DateRangeButton from "../../../../common/DateRange/DateRange";
import DroneSchedule from "./DroneSchedule";

const DroneCatalog = () => {
  const [drones, setDrones] = React.useState<DroneType[]>();
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedDrone, setDroneSelection] = React.useState<any>(new Set());

  const handleSelect = (item: DroneType) => {
    console.log("handled", item);
    selectedDrone.add(item?.drone_id);
    setDroneSelection(selectedDrone);
    setOpen(true);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      // const res = await getAllDrones();
      const res = await mockDrones;
      setDrones(res);
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {drones?.slice(0, 10)?.map((item) => (
        <ListItem
          key={item.drone_id}
          sx={{ p: 3, width: "unset" }}
          className={selectedDrone?.has(item.drone_id) ? "selected" : ""}
        >
          <DroneItem item={item} onSelect={handleSelect} />
        </ListItem>
      ))}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <DroneSchedule callback={setOpen} />
      </Backdrop>
    </Box>
  );
};

export default DroneCatalog;

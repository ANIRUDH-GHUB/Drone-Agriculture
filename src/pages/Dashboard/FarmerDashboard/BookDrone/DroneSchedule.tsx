import React from "react";
import DateRangeButton from "../../../../common/DateRange/DateRange";
import { DateRangePicker, DateRange } from "mui-daterange-picker";
import Button from "../../../../common/Button/Button";
import { Box } from "@mui/material";

const DroneSchedule = (props: any) => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  // React.useEffect(())

  const handleSubmit = () => {
    setDateRange({});
    props.callback(false);
  };
  return (
    <div>
      <DateRangePicker
        open={true}
        initialDateRange={{}}
        toggle={() => setOpen(!open)}
        closeOnClickOutside={false}
        onChange={(range) => setDateRange(range)}
      />
      <Box>
        <Button onClick={handleSubmit}>Cancel</Button>
        <Button onClick={handleSubmit}>Close</Button>
      </Box>
    </div>
  );
};

export default DroneSchedule;

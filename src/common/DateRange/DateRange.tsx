import React from "react";
import { DateRangePicker, DateRange } from "mui-daterange-picker";

type Props = {
  setDateRange: Function;
};

const DateRangeButton: React.FunctionComponent<Props> = (props) => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  const toggle = () => setOpen(!open);

  return (
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
  );
};

export default DateRangeButton;

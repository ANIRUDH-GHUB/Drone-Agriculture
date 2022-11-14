import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { mockBookedDrones } from "../../../../model/bookings.model";
import "./BookingTable.scss";
import Typography from "@mui/material/Typography";

interface Column {
  id:
    | "serviceId"
    | "farmlandName"
    | "landType"
    | "service"
    | "serviceTime"
    | "startTime"
    | "endTime"
    | "status";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "serviceId", label: "Service ID", minWidth: 170 },
  { id: "farmlandName", label: "Farmland", minWidth: 100 },
  {
    id: "landType",
    label: "Land Type",
    minWidth: 170,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "service",
    label: "Service",
    minWidth: 170,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "serviceTime",
    label: "Service Time",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  serviceId: string;
  farmlandName: string;
  landType: string;
  service: string;
  startTime: string;
  endTime: string;
  serviceTime: string;
  status: string;
}

function createData(
  serviceId: string,
  farmlandName: string,
  landType: string,
  service: string,
  startTime: string,
  endTime: string,
  status: string
): Data {
  const serviceTime = startTime + "-" + endTime;
  return {
    serviceId,
    farmlandName,
    landType,
    service,
    startTime,
    endTime,
    status,
    serviceTime,
  };
}

const rows = mockBookedDrones.map((item) => ({
  ...item,
  serviceId: "ID# " + item.serviceId,
  serviceTime: item.startTime + "-" + item.endTime,
}));

export default function BookingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        sx={{ flex: "1 1 100%", p: 4, fontSize: "22px" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        All Bookings
      </Typography>
      <TableContainer sx={{ maxHeight: 440, px: 4 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.serviceId}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "status" ? (
                            <div className={`box-status box-${value}`}>
                              {value}
                            </div>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

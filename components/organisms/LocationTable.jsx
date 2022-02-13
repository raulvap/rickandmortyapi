import Link from "next/link";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import useWindowSize from "../../hooks/useWindowSize";
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "#D6EAF8",
  },
}));

const LocationTable = (listInfo) => {
  const { width } = useWindowSize();

  return (
    <TableContainer style={{ width: width * 0.85, overflowX: "auto" }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Locations</StyledTableCell>
            <StyledTableCell>Dimension</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Residents</StyledTableCell>
            <StyledTableCell>Created</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listInfo.listInfo.map((row) => {
            return (
              <Link
                href={`/location/${row.id}`}
                key={row.id + row.name}
                style={{ cursor: "pointer" }}
              >
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>

                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.dimension}</StyledTableCell>
                  <StyledTableCell align="center">{row.type}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.residents.length}
                  </StyledTableCell>
                  <StyledTableCell>
                    {moment(row.created).format("LL")}
                  </StyledTableCell>
                </StyledTableRow>
              </Link>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LocationTable;

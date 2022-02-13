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

const EpisodeTable = (data) => {
  const { listInfo } = data;

  const { width } = useWindowSize();

  return (
    <TableContainer style={{ width: width * 0.85, overflowX: "auto" }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Episode</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Air Date</StyledTableCell>
            <StyledTableCell>Characters</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listInfo.map((row) => {
            return (
              <Link
                href={`/episode/${row.id}`}
                key={row.id}
                style={{ cursor: "pointer" }}
              >
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell>{row.episode}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>
                    {moment(row.air_date).format("LL")}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {row.characters.length}
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

export default EpisodeTable;

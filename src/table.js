import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables({
  tableData,
  filterData,
  setTableData,
  setFilteredData,
  inputValues,
  setInputValues,
  setType,
  setSelectedIndex
}) {
  const handleDelete = (index) => {
    let temArr = [...filterData];
    temArr.splice(index, 1);
    setTableData(temArr);
    setFilteredData(temArr)
  };

  const handleEdit = (row, index) => {
    console.log(index);
    setInputValues(row)
    setType("edit")
    setSelectedIndex(index)
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">Course</StyledTableCell>
            <StyledTableCell align="right">Course Fees</StyledTableCell>
            <StyledTableCell align="right">Paid Fees</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell sx={{textTransform:"capitalize"}} component="th" scope="row">
                {row.studentName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.course}</StyledTableCell>
              <StyledTableCell align="right">{row.fees}</StyledTableCell>
              <StyledTableCell align="right">{row.feespaid}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleEdit(row, index)}>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;

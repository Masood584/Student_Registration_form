import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./App.css";
import styleTodo from "./style";
import CustomizedTables from "./table";
import swal from "sweetalert";

const TodoApp = () => {
  const classes = styleTodo();
  const [filterData, setFilteredData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [type, setType] = useState("add");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [inputValues, setInputValues] = useState({
    studentName: "",
    course: "",
    fees: "",
    feespaid: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const addTableData = () => {
    const { studentName, course, fees, feespaid } = inputValues;
    console.log("type", typeof feespaid);
    if (studentName === "" || course === "" || fees === "" || feespaid === "") {
      console.log("............................", fees, feespaid);
      swal({
        title: "Fill all the inputs",
        text: "All inputs fields should be filled",
        icon: "warning",
        confirmButtonText: "ok",
      });
    } else if (Number(fees) < Number(feespaid)) {
      swal({
        title: "",
        text: "Paid Fees is not equal to Total Fees",
        icon: "warning",
        confirmButtonText: "ok",
      });
    } else {
      let temArr = [...filterData];
      temArr.push(inputValues);
      setFilteredData(temArr);
      setTableData(temArr);
      setInputValues({
        studentName: "",
        course: "",
        fees: "",
        feespaid: "",
      });
    }
  };

  const handleEdit = () => {
    const { studentName, course, fees, feespaid } = inputValues;
    if (studentName != "" && course != "" && fees != "" && feespaid != "") {
      let temArr = [...filterData];
      temArr[selectedIndex] = inputValues;
      setFilteredData(temArr);
      setTableData(temArr);
      setInputValues({
        studentName: "",
        course: "",
        fees: "",
        feespaid: "",
      });
      setSelectedIndex(null);
      setType("add");
    } else {
      swal({
        title: "Fill all the inputs",
        text: "All inputs fields should be filled",
        icon: "warning",
        confirmButtonText: "ok",
      });
    }
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const filterItem = tableData.filter((item) => {
      return item.studentName.toLowerCase().includes(value.toLowerCase());
    });
    console.log("filterItem", filterItem);
    console.log("tabbbbleeeeeeee", tableData);
    setFilteredData(filterItem);
  };

  return (
    <div className="main_component">
      <Box className={classes.heading} textAlign="center">
        <Typography variant="h3" color="primary">
          Course Registration
          <Typography variant="subtitle1">(Todo App)</Typography>
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Name"
              fullWidth
              onChange={handleOnChange}
              value={inputValues.studentName}
              name="studentName"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Course"
              fullWidth
              onChange={handleOnChange}
              value={inputValues.course}
              name="course"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Fees"
              fullWidth
              onChange={handleOnChange}
              value={inputValues.fees}
              name="fees"
              type={"number"}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Paid Fees"
              fullWidth
              onChange={handleOnChange}
              value={inputValues.feespaid}
              name="feespaid"
              type={"number"}
            />
          </Grid>
        </Grid>
        <Box sx={{ margin: "10px 0px" }} textAlign="right">
          {type === "add" ? (
            <Button variant="contained" onClick={addTableData}>
              Add Item
            </Button>
          ) : (
            <Button variant="contained" onClick={handleEdit}>
              Update item
            </Button>
          )}
        </Box>
      </Box>
      <Box>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search Student Name"
              fullWidth
              onChange={handleFilterChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <CustomizedTables
          tableData={tableData}
          filterData={filterData}
          setTableData={setTableData}
          setFilteredData={setFilteredData}
          inputValues={inputValues}
          setInputValues={setInputValues}
          type={type}
          setType={setType}
          setSelectedIndex={setSelectedIndex}
        />
      </Box>
    </div>
  );
};

export default TodoApp;

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./index.css";

const App = () => {
  const [principal, setPrincipal] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [simpleInterest, setSimpleInterst] = useState(0);

  const calcInterest = () => {
      setSimpleInterst(principal * time * rate / 100)
  }

  return (
    <div className="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        onChange={(event) => setPrincipal(event.target.value)}
        id="outlined-basic"
        label="Enter Principal"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(event) => setTime(event.target.value)}
        id="outlined-basic"
        label="Enter Time"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(event) => setRate(event.target.value)}
        id="outlined-basic"
        label="Enter Rate"
        variant="outlined"
      />
      <br />
      <br />
      <Button
        onClick={() => calcInterest()}
        variant="contained"
      >
        Calculate
      </Button>
      <br />
      <br />
      <Typography variant="h6" gutterBottom component="div">
        The result is: {simpleInterest}
      </Typography>
    </div>
  );
};

export default App;

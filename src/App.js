import "./App.css";
import Profile from "./assets/Arvind.jpg";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="App">
      <h2>Oops... The page ran into some issue</h2>
      <p>As a CEO, I feel the developer has worked against their integrity</p>
      <p>Do you think I should Fire him?</p>
      <h2>Developer:</h2>
      <img src={Profile} alt="arvind" height={300} />
      <div style={{ marginTop: 10 }}>
        <b>
          Name : ArvindSuriya
          <div style={{ marginTop: 20 }}>
            Fire Him? He will be punished in accordance to Garuda puranam..!
            <div style={{ marginTop: 20 }}>
              <button onClick={() => setOpen(true)}>Yes</button>&nbsp;&nbsp;
              <button onClick={() => setOpen(true)}>No</button>
            </div>
          </div>
        </b>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Amaa.. Nee romba Olungu. Poi Net connection check pannu po.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;

import {
  AppBar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Editor } from "@tinymce/tinymce-react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles((theme) => ({
  div_form: {
    marginTop: "200px",
    width: "80%",
    margin: "40px auto",
  },
  appbarstyle: {
    padding: "10px ",
  },
  form_style: {
    width: "70%",
    padding: "30px",
    margin: "0 auto",
  },
}));
export default function Form() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To post to this website, please enter your email address and
            password here. We will provide access .
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.div_form}>
        <Grid>
          <AppBar position="static" className={classes.appbarstyle}>
            <Typography variant="h5">Post News Article</Typography>
          </AppBar>
          <Paper>
            <Grid className={classes.form_style}>
              <TextField
                id="outlined-full-width"
                label="Title"
                placeholder="Enter the title here"
                helperText="Title should be less than 20 words"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-select-currency-native"
                select
                fullWidth
                label="Category"
                // value={currency}
                // onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select news Category"
                variant="outlined"
              >
                {/* {currencies.map((option) => ( */}
                <option value={1}>Option 1</option>
                {/* ))} */}
              </TextField>
              <Editor
                apiKey="065r7qgzgw1rwcrsnpowhmi5pvbclci9uz4tnkzs0paw4rfp"
                initialValue="<p>Initial content</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "a11ychecker advcode casechange export formatpainter linkchecker",
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic |alignleft aligncenter alignright | bullist numlist outdent indent | code |image| a11ycheck | export | formatpainter | pageembed | permanentpen |table| help ",
                }}
                // onChange={this.handleEditorChange}
              />
              <TextField
                id="outlined-full-width"
                label="Refernce"
                placeholder="Enter the refernce link here"
                helperText="If any * "
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
              </Button>{" "}
              (Upload images of good qulaity **)
              <Grid
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </>
  );
}

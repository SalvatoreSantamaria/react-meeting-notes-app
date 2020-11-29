import React from "react";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles({
  root: {
    height: "auto",
    padding: "2em",
    margin: "1em"
  },
  paper: {
    padding: "2em",
    margin: "1em",
    textAlign: "justify"
  },
  notes: {
    padding: "1em"
  },
  deleteButton: {
    padding: "1em"
  }
})

export default function MeetingItem(props) {
  const classes = useStyles();
  function handleDelete() {
    props.deleteItem(props.item)
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Paper elevation={3} className={classes.paper}>
          {props.item.subject}
          <hr />
          <br />
          <div className={classes.notes}>
            {props.item.notes}
          </div>
          <hr />
          <br />
          <div className={classes.deleteButton}>
            <p>Action Items:</p> 
            {props.item.action_items}
            </div>

          <br />
          <Button 
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Delete
          </Button>

        </Paper>
      </Grid>
    </Grid>
  )
}
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
  }
})

export default function MeetingItem(props) {
  const classes = useStyles();
  function handleDelete() {
    props.deleteItem(props.item)
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <Paper elevation={3} className={classes.root}>
          {props.item.subject}
          <hr />
          <br></br>
          {props.item.notes}
          <br></br>
          {props.item.action_items}
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
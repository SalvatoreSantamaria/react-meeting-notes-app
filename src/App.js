import './App.css';
import MeetingList from './MeetingList/MeetingList'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  app_title: {
    textAlign: "center"
  }
})

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={classes.app_title}>Meeting Notetaker</h1>
        <hr></hr>
        <MeetingList />
      </header>
    </div>
  );
}

export default App;

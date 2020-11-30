import React, {Component} from "react"
import MeetingForm from "./MeetingForm"
import MeetingItem from "./MeetingItem"
import Grid from "@material-ui/core/Grid"

//const api_url = `http://localhost:3001/api/v1/meetings`
const api_url = `https://rails-meeting-notes-api.herokuapp.com/api/v1/meetings/`

class MeetingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
    this.updateMeetingList = this.updateMeetingList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch(api_url)
    .then(res => res.json())
    .then(response_items => {
      this.setState({
        items: response_items
      })
    })
  }

  //grabbing items in the state and adding them to beginning of the state array, which causes state to rerender
  updateMeetingList(item) {
    console.log('updateMeetingList Ran')
    let _items = this.state.items
    _items.unshift(item)
    this.setState({
      items: _items
    })
  }

  deleteItem(item) {
    //delete the item remotely then delete here.
    //localhost:3001/api/v1/todos/ + id
    let deleteUrl = api_url + `/${item.id}`
    fetch(deleteUrl, {method: "DELETE"})
    .then(() => {
      let _items = this.state.items //get copy of state items
      let index = _items.indexOf(item) //getting index of the items array, NOT the db index
      _items.splice(index, 1); //grab element id and remove it with splice
      //reset state with the modified copy of the state items, which will cause rerender
      this.setState({
        items: _items
      })
    })
  }

  render() {
    console.log('this.state.items ')
    console.log(this.state.items)
    return (
      <Grid container spacing={3}>
        {/* passing in updateMeetingList function which allows the meeting form to access it */}
        {/* //Reminder: React needs a unique key <li key={item.id}>{item.subject}</li> */}
        <Grid item xs={12}>
          <MeetingForm api_url={api_url} updateMeetingList={this.updateMeetingList}/>
        </Grid>

        <Grid item xs={12} id="meeting_list">
          {this.state.items.map((item) => (
            <MeetingItem 
            key={item.id} 
            item={item}
            deleteItem={this.deleteItem}
            />
          ))}
        </Grid>
      </Grid>
    )
  }
}
export default MeetingList;
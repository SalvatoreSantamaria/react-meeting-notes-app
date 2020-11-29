import React, {Component} from "react"
import MeetingForm from "./MeetingForm"
import MeetingItem from "./MeetingItem"

const api_url = `http://localhost:3001/api/v1/meetings`

class MeetingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
    this.updateMeetingList = this.updateMeetingList.bind(this)
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch(api_url).then(res => res.json()).then(response_items => {
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

  render() {
    console.log('this.state.items ')
    console.log(this.state.items)
    return (
      <div>
        {/* passing in updateMeetingList function which allows the meeting form to access it */}
        {/* //Reminder: React needs a unique key <li key={item.id}>{item.subject}</li> */}

        <MeetingForm api_url={api_url} updateMeetingList={this.updateMeetingList}/>
        <ul id="meeting_list">
          {this.state.items.map((item) => (
            <MeetingItem key={item.id} item={item}/>
          ))}
        </ul>
      </div>
    )
  }
}
export default MeetingList;
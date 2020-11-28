import React, {Component} from "react"
import MeetingForm from "./MeetingFrom"

const api_url = `http://localhost:3001/api/v1/meetings`

class MeetingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
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

  render() {
    console.log(this.state.items)
    return (
      <div>
        <MeetingForm />
        <ul>
          <li>Meeting 1</li>
          <li>Meeting 2</li>
        </ul>
      </div>
    )
  }
}
export default MeetingList;
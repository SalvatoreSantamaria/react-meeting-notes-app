import React, {Component} from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class MeetingForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      api_url: props.api_url,
      subject: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target)
  }
  

  //Format data to JSON, POST to api, then go to the parent of the form (MeetingList.js) and in MeetingList.js, update the list of the items, so that state rerenders
  async formSubmit(formData) {
    let data = new FormData(formData)
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data
    }).then(response => response.json()).then(response => this.props.updateMeetingList(response))
  }

  handleSubjectChange(event) {
    this.setState({
      subject: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          id="meeting_form"
          autoComplete="off">
            <TextField 
            id="subject_input"
            label="Meeting Subject"
            variant="outlined"
            type="text"
            name="meeting[subject]"
            onChange={this.handleSubjectChange}
            />
            <Button variant="contained"
            color="primary"
            type="submit"
            >Add Meeting</Button>
        </form>
      </div>
    )
  }
}
export default MeetingForm;
import React, {Component} from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

class MeetingForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      api_url: props.api_url,
      subject: "",
      notes: "",
      action_items: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleActionItemsChange = this.handleActionItemsChange.bind(this);
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
    //reset form fields to empty strings
    this.setState ({
      subject: "",
      notes: "",
      action_items: ""
    })
  }

  //These change the state of the form:
  handleSubjectChange(event) {
    this.setState({
      subject: event.target.value
    })
  }

  handleNotesChange(event) {
    this.setState({
      notes: event.target.value
    })
  }
  handleActionItemsChange(event) {
    this.setState({
      action_items: event.target.value
    })
  }

  render() {
    return (
      <Grid container>
        <Grid item xs></Grid>
          <Grid item xs={10}>
            <form
              onSubmit={this.handleSubmit}
              id="meeting_form"
              autoComplete="off">
                <Grid container>
                    <Grid item xs={12}>
                      <TextField 
                        id="subject_input"
                        label="Meeting Subject"
                        type="text"
                        name="meeting[subject]"
                        value={this.state.subject}
                        onChange={this.handleSubjectChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextareaAutosize
                        id="notes_input"
                        label="Notes"
                        type="text"
                        name="meeting[notes]"
                        value={this.state.notes}
                        onChange={this.handleNotesChange}
                        style={{ width: "99.5%", borderRadius: "2px"}}
                        rowsMin={30}
                        placeholder="Notes"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextareaAutosize
                        id="action_items_input"
                        label="Action Items"
                        variant="filled"
                        type="text"
                        name="meeting[action_items]"
                        value={this.state.action_items}
                        onChange={this.handleActionItemsChange}
                        style={{ width: "99.5%", borderRadius: "2px"}}
                        rowsMin={3}
                        placeholder="Action Items"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained"
                        color="primary"
                        type="submit"
                        style={{height: "100%"}}
                        >Save
                      </Button>
                    </Grid>
                </Grid>
            </form>
          </Grid>
        <Grid item xs></Grid>
      </Grid>
    )
  }
}
export default MeetingForm;
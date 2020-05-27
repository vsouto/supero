import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import Tasks from '../components/Tasks'
import { getAllTasks } from '../selectors'
import fetch from 'cross-fetch'
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from '../components/spinner'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class TasksContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      searchTerm: ''
    };
    this.tasks = []
  }

  handleChange(event){
    const term = event.target.value

    this.setState({ searchTerm: term });
    this.tasks = this.state.tasks.filter(h => h.title.includes(term))
  };

  componentDidMount() {
    this.retrieveTasks()
  }

  async retrieveTasks() {

    return trackPromise(
      fetch(`http://localhost:3001/task`)
        .then(function(response){
          if (!response.ok) {
            console.log('error on api request')
          }
          return response.json();
        })
        .then(response => {

          console.log('resp ', response); //eslint-disable-line
          this.defineTasks(response)
          return response;
        })
        .catch(error => {
          console.log('error on api fetch', error); //eslint-disable-line
        })
    );
  }

  defineTasks(data) {
    this.tasks = data
    this.setState({tasks: data});
  }

  render() {
    const tasks = this.tasks

    return (
      <div>
        <Spinner />
        <FormControl fullWidth style={{backgroundColor: "#8080800d"}}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            style={{margin: '2em'}}
            value={this.state.searchTerm}
            onChange={(e) => this.handleChange(e)}
          />
        </FormControl>
        <Tasks tasks={tasks}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: getAllTasks(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer)

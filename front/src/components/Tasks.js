import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

class Tasks extends React.Component {

  getTasks() {
    return this.props.tasks || []
  }

  render() {

    return (
      <div style={{margin: 2+'em'}}>
        <h4>List of Tasks</h4>
        <ul className="todo-list">
          {this.getTasks().map(task =>
            <Task key={task._id} task={task} />
          )}
        </ul>
      </div>
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired)
}

export default Tasks

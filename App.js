import './App.css';
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Task from './components/task'

class App extends Component {
  state = {
    tasks: []
  }

  addTask = event => {
    event.preventDefault();
    const txt=event.target.value;
    const newTask = {
      id: uuid(),
      text: txt,
      isCompleted: false
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }))
  }
  render() {
    const { tasks, inp } = this.state
    return (
      <div className="TaskManager">
        <h1 className="head1">Task Tracker</h1>
        <form onSubmit={this.addTask} className="cont1">
          <input value={inp} type="text" required placeholder="Add a new task..." />
          <button type="submit" className="addbtn" >Add Task</button>
        </form>
        <ul>
          {tasks.map(each =>(
            <Task key={each.id} task={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App;

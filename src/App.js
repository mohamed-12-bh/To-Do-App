import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      list: [
        {
          desc: "ichri ay aja",
          complete: false
        }
      ]
    };
  }
  handleChange = event => {
    this.setState({ item: event.target.value.toUpperCase() });
  };
  handleClick = event => {
    event.preventDefault();
    if (!this.state.item) {
      alert("must you write a message");
    } else {
      this.setState({
        list: [...this.state.list, { desc: this.state.item, complete: false }],
        item: ""
      });
    }
  };

  removeHandle = index => {
    this.setState({ list: this.state.list.filter((e, i) => i !== index) });
  };
  changeComplete = index => {
    let newState = this.state.list;
    newState[index].complete = true;
    this.setState({ list: newState });
  };

  render() {
    return (
      <div className="todo-List">
        <h1 className="title-todo">To-Do-App</h1>
        <p className="title">Add New To-Do</p>
        <form onSubmit={this.handleClick}>
          <input
            className="add-todo"
            type="text"
            placeholder="Enter new task"
            value={this.state.item}
            onChange={this.handleChange}
            onSubmit={this.handleclick}
          ></input>
          <button className="btn-todo">Add</button>
        </form>

        <ul className='list'>
          {this.state.list.map((el, i) => (
            <li key={i}>
              <button onClick={() => this.changeComplete(i)}>
                {el.complete ? "Undo" : "Complete"}
              </button>
              <button onClick={() => this.removeHandle(i)}>Delete</button>
              <span className={el.complete ? "complete" : ""}>{el.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

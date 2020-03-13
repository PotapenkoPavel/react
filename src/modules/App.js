import React from "react"
import Search from "./Search/search.js"
import Main from "./Main/main.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usersList: []
    }
    this.updateUsers = this.updateUsers.bind(this)
  }

  updateUsers(list) {
    this.setState({ usersList: list })
  }

  render() {
    return (
      <div id="app" className="app">
        <h1 className="title">Github Search Users</h1>
        <Search getUsersList={this.updateUsers} />
        <Main usersList={this.state.usersList} />
      </div>
    )
  }
}

export default App

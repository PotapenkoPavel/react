import React from "react"
import Search from "./Search/search.js"
import Main from "./Main/main.js"
import { Api } from "../modules/Api/api.js"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.api = new Api()

    this.info = {
      usersList: [],
      total_count: 0,
      showCounterUsers: false,
      showLoadMoreButton: false,
      showUserInformation: false
    }

    this.state = {
      queryValue: "",
      currentPage: 1
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.handleLoadMoreButtonClick = this.handleLoadMoreButtonClick.bind(this)
  }

  handleSearchInputChange(
    list = [],
    usersAmout = 0,
    query = "",
    showCounter = false,
    showButton = false,
    showInfo = false
  ) {
    this.info.usersList = list
    this.info.total_count = usersAmout
    this.info.showCounterUsers = showCounter
    this.info.showLoadMoreButton = showButton
    this.info.showUserInformation = showInfo

    this.setState({
      queryValue: query
    })
  }

  handleLoadMoreButtonClick(list, page, showButton) {
    this.info.usersList = list
    this.info.showLoadMoreButton = showButton

    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div id="app" className="app">
        <h1 className="title">Github Search Users</h1>
        <Search
          loadUsers={this.handleSearchInputChange}
          counter={this.info.total_count}
          showCounter={this.info.showCounterUsers}
        />
        <Main
          users={this.info.usersList}
          query={this.state.queryValue}
          page={this.state.currentPage}
          showLoadMoreButton={this.info.showLoadMoreButton}
          loadMoreUsers={this.handleLoadMoreButtonClick}
          showUserInfo={this.info.showUserInformation}
        />
      </div>
    )
  }
}

export default App

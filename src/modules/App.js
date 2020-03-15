import React from "react"
import Search from "./Search/search.js"
import Main from "./Main/main.js"
import { Api } from "../modules/Api/api.js"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.api = new Api()

    this.state = {
      usersList: [],
      total_count: 0,
      currentPage: 1,
      queryValue: "",
      showCounterUsers: false,
      showLoadMoreButton: false,
      showUserInformation: false
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.handleLoadMoreButtonClick = this.handleLoadMoreButtonClick.bind(this)
  }

  handleSearchInputChange(
    list,
    usersAmout,
    query,
    showCounter,
    showButton,
    showInfo
  ) {
    this.setState({
      usersList: list,
      total_count: usersAmout,
      queryValue: query,
      showCounterUsers: showCounter,
      showLoadMoreButton: showButton,
      showUserInformation: showInfo
    })
  }

  handleLoadMoreButtonClick(list, page, showButton) {
    this.setState({
      usersList: list,
      currentPage: page,
      showLoadMoreButton: showButton
    })
  }

  render() {
    return (
      <div id="app" className="app">
        <h1 className="title">Github Search Users</h1>
        <Search
          loadUsers={this.handleSearchInputChange}
          counter={this.state.total_count}
          showCounter={this.state.showCounterUsers}
        />
        <Main
          users={this.state.usersList}
          query={this.state.queryValue}
          page={this.state.currentPage}
          showLoadMoreButton={this.state.showLoadMoreButton}
          loadMoreUsers={this.handleLoadMoreButtonClick}
          showUserInformation={this.state.showUserInformation}
        />
      </div>
    )
  }
}

export default App

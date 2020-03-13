import React from "react"
import { Api } from "../Api/api.js"

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.api = new Api()
    this.searchUsers = this.searchUsers.bind(this)
    this.counter = ""
    this.state = { counter: 0, showCounter: false }
  }

  searchUsers() {
    let value = document.querySelector(".search-input").value
    if (value.length > 0) {
      this.api.searchUsers(value, 1).then(res => {
        this.props.getUsersList(res.items)
        this.setState({ counter: res.total_count, showCounter: true })
      })
    } else {
      this.props.getUsersList([], true)
      this.setState({ counter: 0, showCounter: false })
    }
  }

  showCounter() {}

  render() {
    this.counter = this.state.counter
      ? `По вашему запросу найдено ${this.state.counter} пользователей`
      : `По вашему запросу ничего не найдено`
    const span = <span className="counter">{this.counter}</span>
    return (
      <div className="search">
        <input
          className="search-input"
          placeholder="Write user name..."
          onChange={debounce(this.searchUsers, 500)}
        ></input>
        {this.state.showCounter ? span : null}
      </div>
    )
  }
}

function debounce(func, wait, immediate) {
  let timeout
  return function() {
    let context = this,
      args = arguments
    let later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default Search

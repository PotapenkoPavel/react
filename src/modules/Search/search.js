import React from "react"
import { Api } from "../Api/api.js"

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.api = new Api()

    this.searchUsers = this.searchUsers.bind(this)
  }

  searchUsers() {
    let value = document.querySelector(".search__input").value

    if (value.length > 0) {
      this.api.searchUsers(value, 1).then(res => {
        this.props.loadUsers(
          res.items,
          res.total_count,
          value,
          true,
          res.total_count > 20,
          true
        )
      })
    } else {
      this.props.loadUsers()
    }
  }

  render() {
    let counterUsers = this.props.counter
      ? `По вашему запросу найдено ${this.props.counter} пользователей`
      : `По вашему запросу ничего не найдено`
    const span = <span className="search__counter">{counterUsers}</span>

    return (
      <div className="search">
        <input
          className="search__input"
          placeholder="Write user name..."
          onChange={debounce(this.searchUsers, 500)}
        ></input>
        {this.props.showCounter ? span : null}
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

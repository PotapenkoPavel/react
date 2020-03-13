import React from "react"
import LoadMoreButton from "./load-more-btn.js"

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main">
        <div className="users-wrapper">
          <ul className="users">
            {this.props.usersList.map(item => {
              return (
                <li className="user-prev" key={item.id}>
                  <img
                    className="user-prev-photo"
                    src={item.avatar_url}
                    alt={item.login}
                  ></img>
                  <span className="user-prev-name">{item.login}</span>
                </li>
              )
            })}
          </ul>
          <LoadMoreButton warn={false} />
        </div>
        <div className="user-info"></div>
      </div>
    )
  }
}

export default Main

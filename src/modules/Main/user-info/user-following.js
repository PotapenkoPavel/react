import React from "react"

function UserFollowing(props) {
  return props.warn ? (
    <div className="user-info__block following">
      <h2 className="user-info__title">Following</h2>
      <ul className="user-info__list">
        {props.userFollowing.map(user => {
          return (
            <li className="user-info__item" key={user.id}>
              <a className="user-info__link" href={user.html_url}>
                {user.login}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  ) : null
}

export default UserFollowing

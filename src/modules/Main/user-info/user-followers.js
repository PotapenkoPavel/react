import React from "react"

function UserFollowers(props) {
  return props.warn ? (
    <div className="user-info__block user-info__block_followers">
      <h2 className="user-info__title">Followers</h2>
      <ul className="user-info__list">
        {props.userFollowers.map(follower => {
          return (
            <li className="user-info__item" key={follower.id}>
              <a className="user-info__link" href={follower.html_url}>
                {follower.login}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  ) : null
}

export default UserFollowers

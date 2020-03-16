import React from "react"

function UserRepos(props) {
  return props.warn ? (
    <div className="user-info__block user-info__block_repositories">
      <h2 className="user-info__title">Repositories</h2>
      <ul className="user-info__list">
        {props.userRepos.map(repository => {
          return (
            <li className="user-info__item" key={repository.id}>
              <a className="user-info__link" href={repository.html_url}>
                {repository.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  ) : null
}

export default UserRepos

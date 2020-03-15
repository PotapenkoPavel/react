import React from "react"

function UserPrev(props) {
  return (
    <li className="users__preview user-preview" onClick={props.startEvent}>
      <img
        className="user-preview__photo"
        src={props.info.avatar_url}
        alt={props.info.login}
      ></img>
      <span className="user-preview__name">{props.info.login}</span>
    </li>
  )
}

export default UserPrev

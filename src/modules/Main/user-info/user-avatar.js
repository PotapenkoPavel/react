import React from "react"

function UserAvatar(props) {
  const urlImg = props.user.querySelector("img").src
  const userName = props.user.querySelector("span").innerHTML

  return (
    <div className="user-info__block user-info__block_avatar">
      <img src={urlImg} className="user-info__avatar" alt={userName} />
      <span className="user-info__name">{userName}</span>
    </div>
  )
}

export default UserAvatar

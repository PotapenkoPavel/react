import React from "react"

function LoadMoreButton(props) {
  return props.warn ? (
    <button className="users__btn" onClick={props.loadMore}>
      Load More
    </button>
  ) : null
}

export default LoadMoreButton

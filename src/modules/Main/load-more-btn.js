import React from "react"

function LoadMoreButton(props) {
  return props.warn ? <button className="btn">Load More</button> : null
}

export default LoadMoreButton

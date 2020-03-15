import React from "react"

class LoadMoreButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.warn ? (
      <button className="users__btn" onClick={this.props.loadMore}>
        Load More
      </button>
    ) : null
  }
}

export default LoadMoreButton

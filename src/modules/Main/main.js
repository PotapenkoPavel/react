import React from "react"
import UserPrev from "./users/user-prev.js"
import LoadMoreButton from "./load-more-btn.js"
import Api from "../Api/api.js"
import UserAvatar from "./user-info/user-avatar.js"
import UserFollowers from "./user-info/user-followers.js"
import UserFollowing from "./user-info/user-following.js"
import UserRepos from "./user-info/user-repos.js"

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.api = new Api()
    this.user = null
    this.followers = []
    this.following = []
    this.repos = []

    this.state = { currentUser: "" }

    this.searchUsersMore = this.searchUsersMore.bind(this)
    this.showUserInformation = this.showUserInformation.bind(this)
  }

  searchUsersMore() {
    this.api.searchUsers(this.props.query, this.props.page + 1).then(res => {
      this.props.loadMoreUsers(
        this.props.users.concat(res.items),
        this.props.page + 1,
        (this.props.page + 1) * 20 < res.total_count
      )
    })
  }

  async showUserInformation(event) {
    this.user = event.target.closest(".user-preview")
    const userName = event.target
      .closest(".user-preview")
      .querySelector(".user-preview__name").innerHTML

    await this.api.searchUserData(userName).then(res => {
      ;[this.followers, this.following, this.repos] = res
    })

    this.setState({ currentUser: userName })
  }

  render() {
    return (
      <div className="main">
        <div className="users">
          <ul className="users__list">
            {this.props.users.map(item => (
              <UserPrev
                info={item}
                key={item.id}
                startEvent={this.showUserInformation}
              />
            ))}
          </ul>
          <LoadMoreButton
            warn={this.props.showLoadMoreButton}
            loadMore={this.searchUsersMore}
          />
        </div>

        {this.props.showUserInfo && this.user ? (
          <div className="user__info">
            <UserAvatar user={this.user} />
            <UserFollowers
              userFollowers={this.followers}
              warn={Boolean(this.followers.length)}
            />
            <UserFollowing
              userFollowing={this.following}
              warn={Boolean(this.following.length)}
            />
            <UserRepos
              userRepos={this.repos}
              warn={Boolean(this.repos.length)}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Main

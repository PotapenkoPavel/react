const URL = "https://api.github.com"
const USERS_PER_PAGE = 20

export class Api {
  async searchUsers(value, currentPage) {
    return await fetch(
      `${URL}/search/users?q=${value}&per_page=${USERS_PER_PAGE}&page=${currentPage}`
    ).then(res => res.json())
  }

  searchUserData(user) {
    const urls = [
      `${URL}/users/${user}/followers`,
      `${URL}/users/${user}/following`,
      `${URL}/users/${user}/repos`
    ]

    const requests = urls.map(url => fetch(url))

    return Promise.all(requests).then(responses => {
      return Promise.all(responses.map(res => res.json()))
    })
  }
}

export default Api

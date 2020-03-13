const URL = "https://api.github.com"
const USERS_PER_PAGE = 20

export class Api {
  async searchUsers(value, currentPage) {
    return await fetch(
      `${URL}/search/users?q=${value}&per_page=${USERS_PER_PAGE}&page=${currentPage}`
    ).then(res => res.json())
  }
}

export default Api

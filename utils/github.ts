import type { BaseUser } from '@utils/types'

const getFollowersUrl = (url: string, page: number) =>
  `${url}?per_page=100&page=${page}`

const pollFollowers = async (
  followersUrl: string,
  page = 1,
  followers: BaseUser[] = []
): Promise<BaseUser[]> => {
  const followersResponse = await fetch(getFollowersUrl(followersUrl, page))
  const newFollowers = await followersResponse.json()

  if (newFollowers.length === 100) {
    return pollFollowers(followersUrl, page + 1, [
      ...followers,
      ...newFollowers,
    ])
  }

  return [...followers, ...newFollowers]
}

export { pollFollowers }

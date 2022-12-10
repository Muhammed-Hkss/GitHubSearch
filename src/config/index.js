import instanse from "./api";

export const SerachUserQueri = (username) => instanse.get(`search/users?q=${username}`)

export const UserMoreData = (username) => instanse.get(`/users/${username}`)

export const GetUserRepository = (username) => instanse.get(`/users/${username}/repos`)

export const GetUserFollowers = (username) => instanse.get(`/users/${username}/followers`)

export const GetUserFollowing = (username) => instanse.get(`/users/${username}/following`)

export const GetUserStarred = (username) => instanse.get(`/users/${username}/starred`)
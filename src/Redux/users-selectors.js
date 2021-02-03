export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const totalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const currentPage = (state) => {
    return state.usersPage.currentPage
}

export const isFetching = (state) => {
    return state.usersPage.isFetching
}
export function saveToken(token) {
    localStorage.setItem('authorization', token)

}
export function getToken() {
    const token = localStorage.getItem('authorization')
    if (token) {
        return token
    }
    return null
}

export function deleteToken() {
    localStorage.removeItem('authorization')
}
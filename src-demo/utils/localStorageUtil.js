export default {
    putListValue(key, value) {
        window.localStorage.setItem(key, value)
    },
    getListValue(key) {
        return JSON.parse(window.localStorage.getItem(key) || '[]')
    }
}

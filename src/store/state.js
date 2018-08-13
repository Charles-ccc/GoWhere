// 为了防止用户浏览器清除了缓存或者隐身模式而报错
let defaultCity = '深圳'
try {
    if (localStorage.city) {
        localStorage.city = defaultCity
    }
} catch (e) {
    console.log(e)
}
export default {
    city: defaultCity
}
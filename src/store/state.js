// 为了防止用户关闭浏览器储存或者隐身模式而报错，使用try catch
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
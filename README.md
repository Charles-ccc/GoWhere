# GoWhere-APP

> 重启Vue学习和开发之路
> <去哪儿网app>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
一些需要注意的点
1. `reset.css`中将`html`的`font-size`设置成了`50px`，
所以 1rem = html font-size = 50px，
可以将设计稿的标记尺寸除以100就可以换算成rem使用了。
2. 在`webpack.base.conf.js`中的`resolve`下配置了针对路径的别名
3. 移动端滑动时间总是出现无法监听被动事件，“Unable to preventDefault inside passive event listener due to target being treated as passive”，一般在css中加入`* { touch-action: none; }`就可以啦
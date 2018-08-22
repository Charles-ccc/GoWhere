# GoWhere-APP

> 重启Vue学习和开发之路
> <去哪儿网app>

## 一些需要注意的点
1. `reset.css`中将`html`的`font-size`设置成了`50px`，
所以 1rem = html font-size = 50px，
可以将设计稿的标记尺寸除以100就可以换算成rem使用了。
2. 在`webpack.base.conf.js`中的`resolve`下配置了针对路径的别名
3. 移动端滑动时间总是出现无法监听被动事件，“Unable to preventDefault inside passive event listener due to target being treated as passive”，一般在css中加入`* { touch-action: none; }`就可以啦
4. 递归组件，要使用递归组件时，就需要该组件有name属性，例如detail文件下的`List.vue`，它的数据一般是从父级DOM中拿到，这样就可以简单的排列为树形结构。
5. 原本每次页面加载，都会重新执行mounted钩子中的数据请求，如果不再需要多次请求数据，可以使用`<keep-alive>`来进行缓存。另外使用了`<keep-alive>`后，就会有`activated`和`deactivated`两个新的钩子。
6. name属性还要一个作用就是，在`<keep-alive>`上新增`exclude='name'`属性来规定排除name所属的组件不缓存。
7. 详情页的图片画廊`Gallary.vue`是使用的`vue-awesome-swiper`插件，注意需要加上`observer: true, observeParents: true`，它的作用是当DOM结构改变之后，会自我刷新一次。
8. 详情页的图片画廊的渐隐渐现的动画效果是单独的一个组件`FadeAnimation.html`，然后在`Banner.vue`中使用插槽的方式，来调用动画效果。
9. 全局使用Vuex来进行数据的存取和派发，写在`store`文件夹下的`index.js`中。
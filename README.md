## Readme
基于 `React` 开发的个人博客。

### 0. 碎碎念
1. 注释：虽然不太寻常……但我的注释确实并不是写给其他人看的（我甚至怀疑永远不会有人看我的代码），个人项目难免会因为工作或者一些其它的事情耽搁，所以注释是我找回思路的一种方式。

### 1. `AntD` 主题色与组件自定义样式
单独使用 `Less` 修改了 `AntD` 部分主题色（鬼能想到 `create-react-app` 居然不支持 `Less`……）。
组件样式编写依然使用 `Sass` （毕竟我还是 `Rubyer`）。

### 2. `restful` 风格的 `API` 在前端如何实践？
遇到的第一个问题就是index方法与show方法到底如何划分界限，`Android` 客户端不会出现直接访问详情页的情况，但浏览器的 `URL` 栏却可以，因此首先就不应该出现index方法把数据拉去下来，show方法直接加载的做法。其次index方法的数据量较多，因此应该尽可能精简数据量。

### 3. `uesEffect` 应该申明依赖，不管它是状态还是 `url` 还是方法
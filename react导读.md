# react

#### 1.webpack中webpack.config.js中的resolve和alias

alias用于  别名     e：`alias{'@':path.join(_dirname,'./src')}`

而resolve用于省略文件路径最后的.js .jsx等

#### 2.动态改变js对象类型的库

###### `import PropTypes from 'prop-types'`

#### 3.线上模拟环境www.netlify.com

#### 4.react-router 中的属性     

exact   精确匹配到该路由  才会显示 只需要包含该路由

strict    精确匹配到该路由  才会显示   包含任何其他都不显示

404page  ： 定义一个没有路径的组件即可如 `<Route component={NoMatch}/>`

Switch组件: 迭代当中的 `<Route>` 组件，并选出第一个匹配的 `<Route>` 来渲染 用法只需要把`<Route>`组件用`<Switch> <Switch/>`包裹起来即可 

`render func `方法：`<Route path="/new_home" render={ (props) => <Home { ...props } name={ "rails365" } /> } />`

`NavLink`用于添加样式的`Link`

动态路由:`<Route path="/users/:id" component={ User } />`

`<Redirect>`用于路由重定向` <Route path="/users/profile/:id" component={ User } />              <Redirect from="/users/:id" to="/users/profile/:id" />`

空组件使用`WithRouter ` 来定义后props 便不为空 可以使用`props.history.push('/about')`来跳转到别的路由

解析路由：`URLSearchParams()`或者`query-string`

在组件中定义`getChildContext(){}`就可以有子组件直接`context.xxx`取出

#### 5.React中的一些组件

`PureComponent`用于解决`componentDIdMount`问题

`Fragment`解决渲染中由于不能存在同级的元素而报错exm`

return (    <Fragment>      <li>list 1</li>      <li>list 1</li>    </Fragment>`

#### 我碰到的一些问题

在react中使用es6写法的函数的时候得注意  exm：`onClick={()=>{console.log('exm')}}`

在使用循环读取数组的值得时候 如果循环数量大过了数组的长度，会报错

react 中不能for return 只会返回一个 return的值

react只能往数组里添加div 而不是li这些   要解决这个问题使用上面的`Fragment`


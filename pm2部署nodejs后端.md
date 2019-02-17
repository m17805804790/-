### 部署`nodejs`后端时

1.如果说代码是es6，需要转es5，那么首先

```javascript
npm i babel-cli -g//或者yarn add babel-cli 如果没有安装babel-cli
```

2.在项目目录下使用

```javascript
babel dirname --out-dir outdirname//exm:babel server --out-dir dist
```

转换成功

3.把代码放到服务器上（不管你是`http`还是`git`还是`ssh`总之放上去就是了）//注意点就是请不要把项目放在要权限的目录，建议`ssh`连接上服务器后

```
cd ..;
mkdir var;
cd var;
```

创建一个名为`var`的目录，然后把代码扔上去。

4.安装pm2

```javascript
npm i/yarn add pm2 -g
```

5.进入项目目录

```
pm2 start dist/index.js //后面的目录看自己情况
pm2 list //查看是否启动成功，如果失败项目会重启，看restart次数和status就能知道项目有没有部署成功了
```

6.附属功能

https://link.jianshu.com/?t=https%3A%2F%2Fapp.keymetrics.io%2F%23%2F

`github`登录后按照他说的来就行，一个网页的`gui`。
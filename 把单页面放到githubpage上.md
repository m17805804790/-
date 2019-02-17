1.`npm install gh-pages --save-dev`

2.在`package.json`中加入`"homepage": "https://m17805804790.github.io/my-redux-blog" `

3.在`script`下加入`"predeploy":"yarn run build" ,"deploy": "gh-pages -d build" `

4.执行`yarn run deploy`
### `redux`使用中间件可以直接使用

```javascript
$ yarn add redux-logger
```

```javascript
const store = createStore(rootReducer, {}, applyMiddleware(logger));
```


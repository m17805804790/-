**查找被占用的端口** 

1. `netstat -tln`
2. `netstat -tln | grep 8080`

```
lsof -i :port，使用lsof -i :port就能看见所指定端口运行的程序，同时还有当前连接。
```
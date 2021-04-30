# VuePress Ftp

VuePress Ftp 部署插件

## 配置

- 在根目录创建`.env`文件

```shell
SERVER_HOST=[ip]
SERVER_PORT=[port]
SERVER_USER=[user]
SERVER_PASS=[password]
SERVER_REMOTE_ROOT=[dir]
```

- 在package.json 的 scripts添加 `vuepress deploy docs` 命令

```shell
"scripts": {
  "deploy": "vuepress deploy docs"
},
```

## 参数

- SERVER_HOST：Ftp ip 地址
- SERVER_PORT：Ftp 端口
- SERVER_USER：Ftp 用户名
- SERVER_PASS：Ftp 密码
- SERVER_REMOTE_ROOT： Ftp 远程目录地址

# vue-code

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### git 
#### git查询全部配置
git config --list

#### 关联远程仓库
git remote add origin git@github.com:Airuiya/vue-code.git

#### 查看当前仓库地址
git remote show origin

#### 设置新的仓库地址
git remote set-url origin "新的仓库地址"

#### 分支
- 查看本地分支
git branch

- 查看远程端的分支
git branch -a

- 新建分支 
git checkout -b <创建的分支名>

- 删除  branch1  分支
git branch -d branch1

- 将新分支推送到远程仓库
git push origin <新分支名称>

- 删除远程端 branch1 分支 
git branch -r -d origin/branch1

- 切换分支
git checkout <其他分支名称>

### vue-route
1、路由就是一组key-value的对应关系 2、多个路由需要经过路由器的管理。
SPA应用——单页面应用
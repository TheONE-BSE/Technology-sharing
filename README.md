# The ONE前端团队技术分享资料存放库

## 存放规则

1. 按照技术分享名称在库中创建目录
2. 目录中资源存放规则：
    * 相关文章或ppt放在外层
    * 相关示例代码建立code目录存放
    * 其他资源（如多媒体资源等）建立相应目录存放
    * 如有相关资料、介绍、链接可在资源目录下建立readme.md markdown进行链接或说明

## 提交方法

1. 将本git库fork到自己的地盘下。
2. 将自己fork来的git库clone到你的本地硬盘上。
3. 进入Technology-sharing文件夹，按照存放规则操作。
4. **在每次push以前，请首先同步最新的改动，否则可能会在pull request的时候出现冲突。所有冲突请在本地解决，有冲突的pull request将被打回。**
5. 同步父git库的方法：

	  1. 在自己的本地，执行`git remote add upstream git@github.com:TheONE-BSE/Technology-sharing.git`。(在你的git库中引入主git库的源，`upstream`是给这个源取的名字)
	  2. 每次要同步的时候，执行`git fetch upstream`，`git merge upstream/master`，有冲突解决冲突。（也可以直接用git pull upstream master）
6. 将改动push到你的远程仓库。
7. 在自己地盘的此git库中，点击new pull request，说明分享内容，提交，等待内容审核。没有意义的更新内容将被废弃！

## 分享列表

1. [Node.js入门](https://github.com/TheONE-BSE/Technology-sharing/tree/master/Node.js%E5%85%A5%E9%97%A8) 孙兆鹏
2. [小程序入门](https://github.com/TheONE-BSE/Technology-sharing/tree/master/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%85%A5%E9%97%A8) 苏雪枫
3. [算法与数据结构入门](https://github.com/TheONE-BSE/Technology-sharing/tree/master/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%85%A5%E9%97%A8) 李忠帅
4. [前端笔试题2.0](https://github.com/TheONE-BSE/Technology-sharing/tree/master/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AF%95%E9%A2%982.0) 孙兆鹏 & All（感谢大家）
5. [实现自己的简单版vue-proxy](https://github.com/TheONE-BSE/Technology-sharing/tree/master/%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%AE%80%E5%8D%95%E7%89%88vue-proxy) 崔健军


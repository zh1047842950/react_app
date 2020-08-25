import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.sass'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className={'title'}>DaoCloud 自动化部署攻略</div>
                <div className={'progress'}>
                    1 首先在 github 创建一个项目<br />
                    2 接着在本地电脑上 clone 刚才创建的 git 库<br />
                    并创建一个初始的 nuxt 项目<br />
                    3 修改 package.json 文件，使项目部署到 0.0.0.0 上<br />
                    然后 push 到 github<br />
                    4 接下来我们开始利用 DaoCloud 来实现刚才创建项目的自动化部署<br />
                    登录 DaoCloud https://account.daocloud.io/signin<br />
                    可以选择以 githhub 账户登录<br />
                    5 在 “项目” 菜单中创建新项目<br />
                    6 设置代码源为之前创建的 github 库<br />
                    开始创建<br />
                    7 创建后可以去设置项目流程<br />
                    这里就先用默认的 “测试” 和 “构建” 流程，不作任何改动<br />
                    然后点击手动触发，开始第一次执行这个项目<br />
                    8 在项目列表页面，可以看到项目的当前状态<br />
                    9 等待项目执行完成，会发现页面上提示执行失败了<br />
                    点击失败的小红点查看错误详情<br />
                    发现错误原因是 “没有找到 Dockerfile 文件”<br />
                    10 需要在 git 项目的根目录下创建一个 Dockerfile 文件<br />
                    Dockerfile 用来定义这个项目运行环境的构建过程<br />
                    添加好后再次提交 push<br />
                    11 push 后发现 DaoCloud 上的项目立刻开始自动执行了<br />
                    这次执行的结果为成功<br />
                    12 进入 “镜像仓库” ，如果发现有一个新生成的镜像<br />
                    说明到目前为止已经成功地将一个 git 项目，构建为一个镜像了。<br />
                    记下这里的镜像名称和路径。<br />
                    13 接下来要做的是将镜像部署到自己的服务器，使之正常工作<br />
                    进入 “集群管理” 菜单点击 “添加主机”<br />
                    14 根据页面的提示信息，将第 3 步中给出的命令复制到自己的服务器上执行<br />
                    关于安装 docker 总结了一些经验 http://www.jianshu.com/p/9733c8482173<br />
                    15 完成后如果查看新添加的主机状态，是否一切正常<br />
                    16 进入 “stack” 菜单，创建一个 stack<br />
                    YML 内容填写<br />
                    dao:<br />
                    image: caocloud.io/xxx/dao:master-zzz<br />
                    ports:<br />
                    - 3000:3000<br />
                    其中 image 的值为之前记下的镜像路径<br />
                    然后在下面选择我们刚添加的集群主机<br />
                    完成创建<br />
                    17 创建后自动进入 stack 详情页面<br />
                    可以看到项目当前状态和实时刷新的部署和执行日志<br />
                    18 在浏览器中打开服务器地址 3000 端口<br />
                    可以看到默认的 nuxt 项目首页<br />
                    19 接下来需要实现自动部署更新项目的功能<br />
                    回到项目管理中的流程定义页面<br />
                    在 “发布阶段” 中点击 “添加并行任务”<br />
                    20 选择任务 “发布到只有主机”<br />
                    然后选择应用，完成创建发布阶段<br />
                    21 至此已经完成了整个自动化项目的构建<br />
                    接下可以测试一下，每次 push 后是否会自动更新生效<br />
                    在 nuxt 项目 的 pages 目录中添加一个 test.vue 文件，并提交 push<br />
                    22 可以看到项目开始自动执行<br />
                    这次执行过程有 3 个阶段<br />
                    23 成功执行后 在浏览器访问网站的 /test 路由<br />
                    可以看到出现了新添加的 test 页面
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

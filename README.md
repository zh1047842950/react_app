项目根目录先新建环境变量文件 .env.development，添加以下内容
            HOST=0.0.0.0
            PORT=3000  // 端口视容器运行绑定端口而定
            DANGEROUSLY_DISABLE_HOST_CHECK=true
        修改 /node_modules/react-scripts/config/webpackDServer.config.js    
            host: "0.0.0.0", //指定wds服务ip为0.0.0.0用于监听整个网络  -->已通过.env.development配置
            disableHostCheck:true, //禁用host检查以解决Invalid Host header错误  -->已通过.env.development配置
            watchOptions：{
                ...,
                poll: true //开启watch主动轮询模式
            }

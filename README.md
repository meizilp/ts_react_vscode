# 使用Typescript、React、VsCode的前端工程框架

1. 使用方法
    - 安装typescript  
        如果typescript未安装过，执行 ```npm install typescript -g```  
        安装typescript后，执行 ```npm link typescript```
    - 下载安装依赖的模块(会根据package.json中的信息下载)  
        ```npm install```   
    - 下载需要的.d.ts头文件（会根据tsd.json中的信息下载）  
        ```tsd install```
    - 启动VsCode  
        ```code .```
    - 编译代码  
        在VsCode界面，按下 ```F1```，输入task，选择run task，选择bulid production version
    - 通过浏览器访问(需要已经安装了browser-sync）          
        执行 ```./server.bat``` 会有一个浏览器窗口打开显示内容。     
2. 文件目录说明  
    - .vscode/tasks.json  
        配置Visual Code的任务，通过参数控制webpack的行为。
    - build  
        编译后的文件输出目录。  
        vendor 第三方库的保存目录。  
        css、jpg、js等文件都会有hash值作为文件名的一部分。
    - node_modules  
        依赖的库。包括运行和开发时所需要的。  
        babel-core：babel的核心库；    
        babel-loader：用于webpack的loader  
        babel-preset-react：编译jsx的babel库  
        clean-webpack-plugin：清理目录的webpack插件  
        copy-webpack-plugin：复制文件的webpack插件  
        其他等等  
    - src  
        代码目录。
        components：组件目录。如果组件较大每个组件还可以建子目录来包含完整的本组件需要的js、css等。  
        css：css代码  
        img：图片存储目录  
        mock:假数据存储目录  
        views:不同view的代码  
        index.tsx：入口文件
    - webpack.config.js  
        webpack的配置文件。根据启动时的参数会做一些不同的处理。          
3. VsCode快捷键配置(File->Preferences->Keyboard Shortcuts)(Ctrl+R触发执行任务选择)  
    ```json
    [
        {
            "key": "ctrl+shift+q",
            "command": "editor.action.triggerParameterHints",
            "when": "editorTextFocus"
        },
        {
            "key": "ctrl+q",
            "command": "editor.action.triggerSuggest",
            "when": "editorTextFocus"
        },
        {
            "key": "ctrl+r",
            "command": "workbench.action.tasks.runTask"
        }
    ]
    ```

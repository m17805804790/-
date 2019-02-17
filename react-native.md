使用 adb devices 命令前需要把安装目录下的 C:\XXXXX\Android\Sdk\platform-tools 这个路径加入环境变量的Path里，否则会获得“adb不是内部或外部命令”的错误。  运行 react-native run-android 需要添加名为JAVA_HOME，值为JAVA安装路径的变量到环境变量里，否则会提示找不到JAVA。 

#### React Native 修改代码后，调出 Reload 等选项的代码

adb shell input keyevent 82 
# SVG 文件 生成 iconfont 的工具

## 使用方法

1. 在本地建立 fonts 和 icon 两个目录
2. 把Svg文件复制到icon里这个目录（注意，Svg文件名，只能由 英文/数字/下划线/点号 构成，如果有减号或中文等字符，会导致在特写场景（如微信小程序）下出现奇怪问题（宽度丢失））
3. 执行如下命令
```bash
make gen
```
4. 然后会在 fonts 目录里生成对应的字体文件，和使用方式

## 依赖

采用 docker 命令，本地需要安装docker

## 连接

https://github.com/jaywcjlove/svgtofont

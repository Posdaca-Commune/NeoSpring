---
title: 入门
description: 创建 HOI4 模组、打开工程、覆盖规则与 debug
---
## 一些杂谈
- 开发时建议对各部分做有效分类，大部分情况下游戏会尝试读取每一个文件夹中的文件，不必担心文件夹过多导致读不到。
- 对于原版的修改、替换和Mod新增的内容，建议分开存放，新增内容建议加前缀以区别原版（如`<MODID>_`）。
- 用 Git 托管到 GitHub 一类平台以便于管理和备份。
- 编写代码时随手写注释有助于帮助自己后期看懂自己的屎山。
## 制作Mod前的准备工作
### 下载编辑器
文档采用[Intellij IDEA](https://www.jetbrains.com/zh-cn/idea "点击前往官网")（以下简称IDEA）作为教程，当然代码部分同样适用于[VS code](https://code.visualstudio.com "点击前往官网")（以下简称VSC）。
### 安装插件
#### 必备插件：
- [Paradox Chronicle](https://plugins.jetbrains.com/plugin/16825-paradox-chronicle "点击前往插件页面")（P社语言解析工具，旧称Paradox Language Support）
## 创建Mod
### 官方启动器：
1. 打开启动器，单击左侧**Mod 库**。
2. 单击**上传 MOD**按钮，点击**创建 MOD**。
3. **名称**输入Mod名称，**版本**输入Mod版本号，**路径**输入想让Mod所处文件夹名称，**标签**勾选符合Mod的标签。
4. 完成后单击**创建 MOD**按钮，一个空白Mod便创建完毕。
## 打开Mod项目
新创建的Mod文件夹保存于路径`%userprofile%\Documents\Paradox Interactive\Hearts of Iron IV\mod`中，Mod文件夹名称为此前输入的路径。
1. 使用IDEA打开文件夹，并在插件中设置游戏本体文件夹路径。
2. 按下快捷键**Ctrl+Alt+M**，在**游戏目录**栏目输入游戏本地文件夹路径，或点击**快速选择游戏目录**自动寻找。
3. 在**模组依赖**栏目添加其他Mod以同时建立索引（可选，通常用于制作附属Mod时使用）。
## Mod结构
### descriptor.mod文件
descriptor.mod文件即模组定义文件，其中包含有Mod的各种信息。详细内容参考[descriptor.md](folder/descriptor/)文件。
### thumbnail.png/thumbnail.gif文件
Mod封面文件，同时也是上传至Steam创意工坊的封面文件。
### 文件夹
Mod文件夹结构与原版游戏基本相同。
## Mod读取
Mod中文件读取遵从下列条件：
- 当Mod文件与游戏本体文件不重复时，同时读取。
- 当Mod中部分文件与游戏本体文件重复，优先读取Mod中的文件。
- 当读取至`descriptor.mod`文件中`replace_path`的文件夹时，跳过游戏本体中此文件夹，直接替换为Mod中此文件夹。
- 当子Mod与主Mod文件重复时，优先读取子Mod中的文件。
## Debug模式
debug模式是为了便于对游戏内数据进行各项测试的模式，可通过下列方式开启：
### Steam端开启
1. 在Steam库中找到游戏`Hearts of Iron IV`，右键单击**属性**。
2. 在**通用**中找到高级启动选项，输入`-debug`。
### 本地端开启
1. 找到游戏根目录，为`dowser.exe`文件创建一个快捷方式。
2. 右键单击快捷方式，打开**属性**。
3. 在**目标**路径后面添加` -debug`。
:::tip
注意此处是`" -debug"`而非`"-debug"`，**短横前方有空格！**
:::

debug模式与正常模式略有区别：
- 游戏主界面加载完成后将会自动使用记事本弹出`error.log`文件。
- 在主界面按下`~`键将会显示gui边框以及信息，游戏中需通过控制台输入`gui`来打开。
- 显示gui边框时按住`Ctrl+Alt+鼠标右键`可以对gui进行**打开文件**、**查看路径**以及**刷新**操作。
- 本地化等修改可热更新（新建文件除外）。
- 多人模式将**禁用**。
## 日志
日志文件位于`%userprofile%\Documents\Paradox Interactive\Hearts of Iron IV\logs`中，其中`error.log`与`game.log`两个文件最为常用。<br>
通常情况下，当游戏出现错误时，错误信息会被记录在`error.log`文件中；`game.log`一般记录的是游戏运行时的日志（如`log = xxx`此类效果的记录）。<br>
当游戏出现严重错误甚至崩溃时，查看日志能够更有效地排查出错误原因。
:::tip
*某些错误可能在崩溃前来不及被记录，**甚至根本不会被记录**。*
:::
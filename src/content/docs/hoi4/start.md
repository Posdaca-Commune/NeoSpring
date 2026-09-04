---
title: 入门
description: 创建 HOI4 模组、打开工程、覆盖规则与 debug
---

## 杂谈

- 开发时建议对各部分做有效分类。游戏会尝试读取每一个文件夹中的文件，不必担心文件夹过多导致读不到。
- 对原版的修改、替换和 Mod 新增内容，建议分开存放。新增内容建议加前缀以区别原版（如 `<MODID>_`）。
- 用 Git 托管到 GitHub 一类平台。编辑器选择见 [核心 / 工具](/core/tools/)。
- 编写脚本时随手写注释，后期会感谢自己。

## 创建 Mod

### 官方启动器

1. 打开启动器，单击左侧 **Mod 库**。
2. 单击 **上传 MOD**，再点 **创建 MOD**。
3. **名称**填 Mod 名称，**版本**填版本号，**路径**填文件夹名称，**标签**勾选符合的项。
4. 完成后单击 **创建 MOD**，一个空白 Mod 就建好了。

## 打开工程

新创建的文件夹在 `%userprofile%\Documents\Paradox Interactive\Hearts of Iron IV\mod`，名称是创建时填的路径。

1. 用 IDEA 打开该文件夹，并在插件中设置游戏本体路径。
2. 按 **Ctrl+Alt+M**，在 **游戏目录** 填入游戏安装路径，或点 **快速选择游戏目录**。
3. 在 **模组依赖** 里可添加其他 Mod 以便同时建索引（做附属 Mod 时常用）。

插件安装见 [IDEA 与 Chronicle](/core/tools/idea/)。

## Mod 结构

### descriptor.mod

模组定义文件，创建后自动生成。字段说明见 [descriptor.mod](/hoi4/descriptor/)。

### thumbnail.png / thumbnail.gif

Mod 封面，也是 Steam 创意工坊封面。

### 文件夹

结构与原版基本相同。完整树见 [本体目录](/hoi4/folders/)。

## 读取规则

- Mod 文件与本体不重复时，两边都读。
- 部分文件与本体重名时，优先读 Mod。
- 读到 `descriptor.mod` 里 `replace_path` 指定的文件夹时，跳过本体该文件夹，整夹换成 Mod 里的。
- 子 Mod 与主 Mod 文件重复时，优先读子 Mod。

## Debug 模式

用来测游戏内数据。

### Steam 端

1. 在 Steam 库中找到 `Hearts of Iron IV`，右键 **属性**。
2. 在 **通用** 的启动选项里输入 `-debug`。

### 本地端

1. 在游戏根目录为 `dowser.exe` 建快捷方式。
2. 右键快捷方式打开 **属性**。
3. 在 **目标** 路径后面加上 ` -debug`。

:::tip
注意是 `" -debug"` 而不是 `"-debug"`，短横前面有空格。
:::

debug 与正常模式的区别：

- 主界面加载完后会用记事本弹出 `error.log`。
- 主界面按 `~` 会显示 GUI 边框和信息；游戏中需在控制台输入 `gui`。
- 显示 GUI 边框时，按住 `Ctrl+Alt+鼠标右键` 可以打开文件、查看路径、刷新。
- 本地化等修改可热更新（新建文件除外）。
- 多人模式禁用。

## 日志

日志在 `%userprofile%\Documents\Paradox Interactive\Hearts of Iron IV\logs`。最常用的是 `error.log` 和 `game.log`。

游戏出错时，错误信息通常进 `error.log`；`game.log` 记录运行时日志（例如 `log = xxx` 这类效果）。崩溃时先翻这两份。

:::tip
有些错误在崩溃前来不及写入，甚至根本不会被记录。
:::
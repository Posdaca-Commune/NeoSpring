---
title: 事件
---

事件包括普通事件和国际新闻，是游戏中重要的组成部分之一。
## 文件夹结构格式
事件文件位于`events`中。
## 内容格式
以下是一个事件文件的示例：
```paradox_script
add_namespace = TEST # 添加事件命名空间

country_event = {
    id = TEST.1 # 事件id
    title = TEST.1.t # 事件标题
    desc = TEST.1.d # 事件内容
    # 事件选项
    option = {
        name = TEST.1.o1 # 事件选项名称
        # 事件选项效果
        set_country_flag = TEST1
    }
    option = {
        name = TEST.1.o2
        set_country_flag = TEST2
    }
}


```
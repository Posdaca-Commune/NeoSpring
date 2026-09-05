---
title: states
---

省份文件负责定义每一个省份的基本信息，以及在不同时间剧本下的信息。
## 文件夹结构格式
省份文件位于`history/states`文件夹中
## 内容格式
以下是一个省份文件的示例：
```paradox_script
state = {
	id = 114514 # 省份id
	name = "STATE_114514" # 省份本地化键
	manpower = 131000 # 人口数量
	state_category = city # 地区类型
	local_supplies = 0.0 # 地区补给
    buildings_max_level_factor = 0.1 # 最大建筑等级修正（百分比）
    # 归属于省份的地块
	provinces = { 
		528 2246 2333 3322 
	}

	
	impassable = <bool> #布尔值，yes/no，是否可以通过，默认是no

	resources = {
		oil = 0 #石油
        aluminium = 0 #铝
        rubber = 0 #橡胶
        tungsten = 0 #钨
        steel = 0 #钢
        chromium = 0 #铬
        coal = 0 #煤
	}

	history={ #历史文件夹，包括该省份的控制者，核心，建筑.....
		owner = LYU #拥有者，后跟国家代码tag
		add_core_of = LYU #核心
		controller = TAG #控制者，国家TAG，可选，仅当控制者和拥有者相区别时使用
		victory_points = { 2246 1 } #胜利点，第一个2246是胜利点位置，第二个1是分数
		buildings = { #建筑，具体看维基百科
			infrastructure = 5
			industrial_complex = 3
			arms_factory = 1
			2246 = { #某省份建筑
				bunker = 3
				dockyard = 5
			}
		}
		219.1.1 = { #第二个剧本的省份归属
            owner = WUU
			add_core_of = WUU
		}
	}
	
}

```
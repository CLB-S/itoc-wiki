# 世界生成过程
世界生成是一次性的，在世界创建时完成，将会得到确定的世界数据

世界生成器 (WorldGenerator) 用于生成世界，构建区块时可以从它获取世界数据(高度信息等)(后续可能有世界数据保存机制)

世界生成器都继承自WorldGeneratorBase(提供 生成步骤管理 等功能)

下面列出已有的世界生成器

## 普通世界生成器 (VanillaWorldGenerator)

基于Voronoi图，结合了板块构造、流体侵蚀、气候模拟和生物群系分配

相比传统的噪声地形生成，能够更好地模拟真实世界的地质和气候过程，创造出更加真实，丰富的游戏世界。

~~生成的世界有香草味~~

### 生成管线
- 初始化资源 initialize_resources
- 生成采样点 generate_sample_points
- 初始化单元格 initialize_cell_datas
- 初始化板块 initialize_tectonics
- 计算地形隆起 calculate_uplifts
- 寻找河口 find_river_mouths
- 模拟河流侵蚀 process_fluvial_erosion
- 获取温度 adjust_temperature"
- 设定生物群系 set_biomes

### CellData

存储单元格数据
- 空间信息：位置、面积、法线向量
- 地形信息：高度、抬升值
- 气候信息：温度、降水量
- 生态信息：生物群系
- 水文信息：河流、湖泊状态

## 无限?世界生成器(InfiniteWorldGenerator)

//待完善
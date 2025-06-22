# 区块构建过程

区块构造器(ChunkGenerator)用于构建世界中的区块，每个 世界生成器 对应一个 区块构造器 和多个 区块构造阶段(ChunkColumnGenerationPass)

ChunkColumnGenerationPassN 都继承自IPass，用于创建该阶段的 构造任务(VanillaChunkGenerationTask)

## MultiPassGenerationController
区块构造器使用它管理构造阶段(pass0,pass1...)的异步运行

pass1 的 构造任务 可能依赖一定范围(Expansion)的pass0 区块数据：
- 当Expansion=0时，构造一个区块的pass1仅仅依赖它自己的pass0数据
- Expansion=1时，启动这个区块的pass1构造任务前会先构造其周围3x3区域的pass0数据

使用Marker跟踪pass何时可以开始

//待完善
# Multipass 生成

类似于 [godot-voxel-tools 中实现的 VoxelGeneratorMultipassCB](https://voxel-tools.readthedocs.io/en/latest/generators/#multi-pass-generation-with-voxelgeneratormultipasscb)，ITOC 实现了一个多通道区块生成控制器，用于跨区块结构如树木。

![](../../public/content/chunks/multipass/multipass_tree_inter_dependency.webp)

这种多层（多通道）生成过程非常灵活和通用。但是，不建议用于大型结构（半径超过 60 方块）。
大型结构可以与[原版世界生成器](../world-generation/vanilla)的采样点一起生成。

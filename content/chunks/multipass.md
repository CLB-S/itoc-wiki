# Multipass Generation

Simalar to [VoxelGeneratorMultipassCB implemented in godot-voxel-tools](https://voxel-tools.readthedocs.io/en/latest/generators/#multi-pass-generation-with-voxelgeneratormultipasscb), ITOC implemented a multipass chunk generation controller for cross-chunk structures like trees.

![](/content/chunks/multipass/multipass_tree_inter_dependency.webp)

Such multi-layer (multi-pass) generation process is pretty flexible and versatile. However, it is not recommended for large structures (more than 60x60x60 blocks).
Large structures can be generated together with [vanilla world generator](../world-generation/vanilla)'s sample points.

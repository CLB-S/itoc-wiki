# 区块渲染

## Vertex Pulling

Godot 不支持 SSBO 或 VBO 或任何类似的东西。所以 ITOC 必须使用 `ImageTexture` 作为缓冲区对象。
参见 [itoc.core/Utils/TextureBuffer.cs](https://github.com/CLB-S/itoc/blob/main/itoc.core/Utils/TextureBuffer.cs)。

## 参考资料

- [cgerikj/binary-greedy-meshing](https://github.com/cgerikj/binary-greedy-meshing)
- [Vertex Pulling - Voxel.Wiki](https://voxel.wiki/wiki/vertex-pulling/)
- [I Optimised My Game Engine Up To 12000 FPS - YouTube](https://www.youtube.com/watch?v=40JzyaOYJeY)
- [Greedy Meshing Voxels Fast - Optimism in Design Handmade Seattle 2022 - YouTube](https://www.youtube.com/watch?v=4xs66m1Of4A)
- [Blazingly Fast Greedy Mesher - Voxel Engine Optimizations - YouTube](https://www.youtube.com/watch?v=qnGoGq7DWMc)
- [Incredible voxel mesh optimisations! (Daydream pt. 7) - YouTube](https://www.youtube.com/watch?v=LxVLqCiDqd8)

# 准备 Godot 引擎

ITOC 使用自编译的 [Godot 引擎](https://godotengine.org/)进行开发和构建，以提供**双精度浮点**和 **.NET** 支持。因此，无法直接使用官方版本的 Godot 进行开发。
采用自编译的 Godot 的主要目的是为了启用[大世界坐标](https://docs.godotengine.org/zh-cn/4.x/tutorials/physics/large_world_coordinates.html)。

## 获取 ITOC 预构建版本

::: warning  
待补充  
:::

## 自行构建

可以参考[使用 .NET 编译 — Godot Engine (4.x) 简体中文文档](https://docs.godotengine.org/zh-cn/4.x/contributing/development/compiling/compiling_with_dotnet.html)进行编译。注意还需同时启用双精度支持。

#### 配置本地 NuGet 源

::: tip  
此步骤只需执行一次，后续重新编译引擎时无需重复操作。  
:::

首先选择本地 NuGet 源的存储位置。若无特别偏好，可在以下推荐路径创建空目录：

- Windows 系统：`C:\Users\<用户名>\MyLocalNugetSource`
- Linux/\*BSD 等系统：`~/MyLocalNugetSource`

该路径后文以 `<my_local_source>` 代指。  
选定目录后，执行以下 .NET CLI 命令配置 NuGet 使用本地源：

```shell
dotnet nuget add source <my_local_source> --name MyLocalNugetSource
```

#### 获取源代码

::: tip  
此步骤只需执行一次，后续重新编译引擎时无需重复操作。  
:::

安装[Git](https://git-scm.com/)后运行：

```shell
git clone https://github.com/godotengine/godot.git
```

#### 构建引擎

**Windows 示例**

`build.bat`：

```bat
:: 进入源码目录
cd godot

:: 更新代码
git pull

:: 构建编辑器二进制文件
scons platform=windows target=editor module_mono_enabled=yes precision=double

:: 使用mingw编译
:: scons platform=windows use_mingw=yes target=editor module_mono_enabled=yes precision=double

:: 构建导出模板
:: 若无需构建游戏可注释以下两行
scons platform=windows target=template_release module_mono_enabled=yes precision=double
scons platform=windows target=template_debug module_mono_enabled=yes precision=double

:: 生成胶水代码
"./bin/godot.windows.editor.double.x86_64.mono.exe" --headless --generate-mono-glue modules/mono/glue
:: 构建.NET程序集
python ./modules/mono/build_scripts/build_assemblies.py --godot-output-dir=./bin --push-nupkgs-local <my_local_source> --precision=double

pause
```

**Linux 示例**

`build.sh`：

```sh
#!/bin/sh

# 进入源码目录
cd godot

# 更新代码
git pull

# 构建编辑器二进制文件
scons platform=linuxbsd target=editor module_mono_enabled=yes precision=double

# 构建导出模板
# 若无需构建游戏可注释以下两行
scons platform=linuxbsd target=template_release module_mono_enabled=yes precision=double
scons platform=linuxbsd target=template_debug module_mono_enabled=yes precision=double

# 生成胶水代码
./bin/godot.linuxbsd.editor.double.x86_64.mono --headless --generate-mono-glue modules/mono/glue
# 构建.NET程序集
python ./modules/mono/build_scripts/build_assemblies.py --godot-output-dir=./bin --push-nupkgs-local <my_local_source> --precision=double
```

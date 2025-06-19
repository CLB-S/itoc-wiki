# Development Guide

ITOC is developed and built on a custom build of [Godot Engine](https://godotengine.org/) with **double precision** and **.NET support**.
The main reason for using a custom build of Godot is to enable [large world coordinates](https://docs.godotengine.org/en/stable/tutorials/physics/large_world_coordinates.html).

## Prepare Your Godot Engine

### Build It Yourself

See [Compiling with .NET — Godot Engine (stable) documentation in English](https://docs.godotengine.org/en/stable/contributing/development/compiling/compiling_with_dotnet.html). Notice that you need to enable double precition as well.

#### Prepare Local NuGet Source

::: tip
This step only needs to be performed once. It does not need to be repeated when recompiling the engine later.
:::

First, pick a location for the local NuGet source. If you don't have a preference, create an empty directory at one of these recommended locations:

- On Windows, `C:\Users\<username>\MyLocalNugetSource`
- On Linux, *BSD, etc., `~/MyLocalNugetSource`

This path is referred to later as `<my_local_source>`.
After picking a directory, run this .NET CLI command to configure NuGet to use your local source:

```shell
dotnet nuget add source <my_local_source> --name MyLocalNugetSource
```

#### Get the Source

::: tip
This step only needs to be performed once. It does not need to be repeated when recompiling the engine later.
:::

Install [Git](https://git-scm.com/) and run:

```shell
git clone https://github.com/godotengine/godot.git
```

#### Build the Engine

**Windows example**

`build.bat`:
```bat
:: Enter the source directory
cd godot

:: Update
git pull

:: Build editor binary
scons platform=windows target=editor module_mono_enabled=yes precision=double

:: Use mingw
:: scons platform=windows use_mingw=yes target=editor module_mono_enabled=yes precision=double

:: Build export templates
:: Comment these two lines if you don't need building the game.
scons platform=windows target=template_release module_mono_enabled=yes precision=double
scons platform=windows target=template_debug module_mono_enabled=yes precision=double

:: Generate glue sources
"./bin/godot.windows.editor.double.x86_64.mono.exe" --headless --generate-mono-glue modules/mono/glue
:: Build .NET assemblies
python ./modules/mono/build_scripts/build_assemblies.py --godot-output-dir=./bin --push-nupkgs-local <my_local_source> --precision=double

pause
```

**Linux example**

`build.sh`:
```sh
#!/bin/sh

# Enter the source directory
cd godot

# Update
git pull

# Build editor binary
scons platform=linuxbsd target=editor module_mono_enabled=yes precision=double

# Build export templates
# Comment these two lines if you don't need building the game.
scons platform=linuxbsd target=template_release module_mono_enabled=yes precision=double
scons platform=linuxbsd target=template_debug module_mono_enabled=yes precision=double

# Generate glue sources
./bin/godot.linuxbsd.editor.double.x86_64.mono --headless --generate-mono-glue modules/mono/glue
# Build .NET assemblies
python ./modules/mono/build_scripts/build_assemblies.py --godot-output-dir=./bin --push-nupkgs-local <my_local_source> --precision=double
```

### Get ITOC Built Version

::: warning
TODO
:::

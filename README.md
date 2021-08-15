xlab是一款可视化web计算平台，用react hooks、typescript、webassembly等实现，目标是兼容matlab、支持m语言、javascript、python等多语言的在线科学计算工具，提供一个免费的web科学计算工具。

# Demo
- 演示视频
- <video src="./example/demo.mp4" width="800px" height="600px" controls="controls"></video>

# Features
 - 实现了约100个matlab标准函数
    - ceil
    - floor
    - rand
    - cumsum
    - cumprod
    - pow2
    - exp
    - log
    - log10
    - log2
    - sqrt
    - sin
    - sind
    - sinpi
    - asin
    - asind
    - sinh
    - asinh
    - cos
    - cosd
    - cospi
    - acos
    - acosd
    - cosh
    - acosh
    - tan
    - tand
    - atan
    - atand
    - atan2
    - atan2d
    - tanh
    - atanh
    - csc
    - cscd
    - acsc
    - acscd
    - csch
    - acsch
    - sec
    - secd
    - asec
    - asecd
    - sech
    - asech
    - cot
    - cotd
    - acot
    - acotd
    - coth
    - acoth
    - zeros
    - ones
    - eye
    - diag
    - linspace
    - logspace
    - meshgrid
    - length
    - size
    - ndims
    - numel
    - isscalar
    - issorted
    - issortedrows
    - isvector
    - ismatrix
    - isrow
    - iscolumn
    - isempty
    - cat
    - horzcat
    - vertcat
    - transpose
    - dot
    - cross
    - normalize
    - plot
    - scatter
    - bubblechart
    - histogram
    - area
    - plot3
    - scatter3
    - mesh
    - surf
    - figure
    - title
    - legend
    - xlabel
    - ylabel
    - zlabel
    - colormap
    - subplot

 - 支持**matlab**终端语法，支持多维数组操作
 - 支持近十种基本绘图操作
    - plot
    - scatter
    - bubblechart
    - histogram
    - area
    - plot3
    - scatter3
    - mesh
    - surf

# Dependence
- 安装 **python3.7+**,具体安装参见<https://www.python.org/downloads/>

# Dev
- 运行  **yarn** 安装依赖包
- 运行 **yarn dev** 运行
- 在浏览器中输入**localhost:3000**查看运行界面

# Build
- **yarn**安装依赖
- **yarn build**在**build**目录生成静态文件
- 运行**python ./build.py** 预处理

# TODOs
-  接入jupyter lab
-  实现M文件的解析，能完整运行M文件
-  接入webassembly，能调用c++或者python数值算法库
-  完整实现绘图函数库
-  完整实现matlab基础函数库
-  支持其他python等语言

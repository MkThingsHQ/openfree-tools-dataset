# OpenFree 开源工具数据集

[English](README.md) · [简体中文](README.zh-CN.md) · [访问 OpenFree](https://openfree.tools/zh)

按分类发现开源软件。本仓库保存 **[OpenFree](https://openfree.tools/zh)**
公开项目目录的每日数据快照，同步维护英文和中文项目信息。

{{STATS}}

点击下方分类即可跳转到项目表格，点击项目名称可阅读完整介绍。
也可以下载[结构化 JSON 数据](data/dataset.json)，用于自己的工具。
一个项目可能属于多个分类，项目总数按唯一项目计算。

{{CATALOG}}

## 关于数据

数据包含全部已发布的目录项目、公开分类和标签、项目与分类及标签的关联、
中英文介绍，以及已有的仓库信息。不会导出草稿、私人提交或用户账户信息。
缺失信息显示为 **—**，不会推测补全。Stars 和仓库信息采用 OpenFree
最近保存的数据，不代表 GitHub 实时数值。缺少中文字段时使用英文内容。

[每日同步工作流](.github/workflows/sync.yml)通过经过鉴权的 OpenFree 只读接口，
同时生成两个 README 和 JSON 快照。计划每天 **北京时间 09:17（UTC 01:17）**
执行，GitHub 可能延迟调度。数据没有变化时不会创建提交，同步失败时保留上一版。
最近一次成功运行可查看 [Actions](https://github.com/MkThingsHQ/openfree-tools-dataset/actions/workflows/sync.yml)，
历史数据变化可查看 Git 提交记录。

## 参与贡献

如需提交项目或修正项目信息，请访问 [OpenFree](https://openfree.tools/zh)。
如发现同步脚本问题，请[提交 Issue](https://github.com/MkThingsHQ/openfree-tools-dataset/issues)。
修改生成器或模板前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
README 中的目录和 JSON 快照均由脚本生成，请勿直接编辑。

## 许可与来源

各项目保留各自的许可证，具体使用条件以项目源码仓库为准。
收录不代表背书，也不改变项目的许可证。
介绍文字与元数据来自 [OpenFree](https://openfree.tools/zh)。
自动化代码使用 [MIT 许可证](LICENSE)，该代码许可证不适用于项目内容、标志或目录介绍文字。

分类导航形式参考了
[open-source-alternatives](https://github.com/piotrkulpinski/open-source-alternatives)。
如果这个目录对你有帮助，欢迎为仓库点亮 Star，也欢迎支持各项目的维护者。

[返回分类目录](#分类目录)

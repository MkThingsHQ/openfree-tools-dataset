# 开源免费工具数据集

[English](README.md) · [简体中文](README.zh-CN.md) · [访问 OpenFree](https://openfree.tools/zh)

发现真正值得用的开源免费 AI 工具。

本仓库保存 **[OpenFree](https://openfree.tools/zh)**
公开项目目录的每日数据快照，同步维护英文和中文项目信息。

**131 个项目 · 80 个二级分类 · 每日同步**

点击下方分类即可跳转到项目表格，点击项目名称可阅读完整介绍。
也可以下载[结构化 JSON 数据](data/dataset.json)，用于自己的工具。
一个项目可能属于多个分类，项目总数按唯一项目计算。

## 赞助商

暂无赞助商。

[成为赞助商](https://openfree.tools/zh/advertise)

## 分类目录

- [助手与生产力](#category-assistants-productivity)
  - [聊天界面](#category-chat-interfaces)
  - [个人与桌面助手](#category-personal-desktop-assistants)
  - [会议助手与纪要](#category-meeting-assistants-notes)
  - [转录与听写](#category-transcription-dictation)
  - [搜索与答案引擎](#category-search-answer-engines)
  - [深度研究](#category-deep-research)
  - [写作与知识工作](#category-writing-knowledge)
- [生成式媒体与设计](#category-generative-media-design)
  - [图像生成与工作流](#category-image-generation-workflows)
  - [图像编辑与增强](#category-image-editing-enhancement)
  - [视频生成](#category-video-generation)
  - [视频编辑与动画](#category-video-editing-animation)
  - [语音与声音生成](#category-speech-voice-generation)
  - [音乐与音频生成](#category-music-audio-generation)
  - [3D 生成与设计](#category-3d-generation-design)
  - [虚拟人与数字分身](#category-avatars-digital-humans)
- [编程与开发工具](#category-ai-coding-developer-tools)
  - [编程助手与编辑器](#category-code-assistants-editors)
  - [编程智能体](#category-coding-agents)
  - [应用与界面生成](#category-app-ui-generation)
  - [代码审查](#category-code-review)
  - [测试生成与质量保障](#category-test-generation-qa)
  - [调试与程序修复](#category-debugging-program-repair)
  - [代码搜索与理解](#category-code-search-understanding)
  - [编程 Harness 与命令行运行时](#category-coding-harnesses-cli-runtimes)
- [智能体与自动化](#category-agents-automation)
  - [智能体框架](#category-agent-frameworks)
  - [多智能体系统](#category-multi-agent-systems)
  - [智能体构建器](#category-agent-builders-studios)
  - [浏览器智能体](#category-browser-agents)
  - [计算机操作与 GUI 智能体](#category-computer-use-gui-agents)
  - [工作流自动化](#category-workflow-automation)
  - [语音智能体](#category-voice-agents)
- [智能体基础设施](#category-agent-infrastructure-protocols)
  - [MCP 服务与工具连接器](#category-mcp-servers-tool-connectors)
  - [智能体记忆](#category-agent-memory)
  - [上下文管理](#category-context-management)
  - [智能体 SDK 与运行时](#category-agent-sdks-runtimes)
  - [沙箱与代码执行](#category-sandboxes-code-execution)
  - [智能体技能与工具库](#category-agent-skills-tool-libraries)
  - [智能体通信协议](#category-agent-communication-protocols)
- [模型与推理](#category-models-inference)
  - [语言模型](#category-language-models)
  - [多模态模型](#category-multimodal-models)
  - [嵌入模型](#category-embedding-models)
  - [重排模型](#category-rerankers)
  - [本地模型运行器](#category-local-model-runners)
  - [推理服务与 API](#category-inference-servers-apis)
  - [量化与加速](#category-quantization-acceleration)
- [框架与 RAG](#category-frameworks-rag)
  - [应用框架](#category-application-frameworks)
  - [RAG 框架](#category-rag-frameworks)
  - [知识库应用](#category-knowledge-applications)
  - [应用界面与 SDK](#category-app-ui-sdks)
  - [模型网关与路由](#category-model-gateways-routing)
  - [提示词与结构化生成](#category-prompting-structured-generation)
- [数据与检索](#category-data-retrieval)
  - [向量数据库](#category-vector-databases)
  - [检索与搜索引擎](#category-retrieval-search-engines)
  - [文档解析与 OCR](#category-document-parsing-ocr)
  - [网页抓取与提取](#category-web-scraping-extraction)
  - [知识图谱与 GraphRAG](#category-knowledge-graphs-graphrag)
  - [数据集、标注与数据质量](#category-datasets-labeling-data-quality)
- [训练与 MLOps](#category-training-mlops)
  - [训练与微调](#category-training-fine-tuning)
  - [分布式训练](#category-distributed-training)
  - [强化学习与偏好优化](#category-rl-preference-optimization)
  - [评测与基准](#category-evaluation-benchmarks)
  - [可观测性与追踪](#category-observability-tracing)
  - [实验跟踪与模型注册](#category-experiment-tracking-model-registry)
  - [流水线、部署与计算](#category-pipelines-deployment-compute)
- [商业与行业](#category-business-industry)
  - [数据分析与商业智能](#category-data-analysis-business-intelligence)
  - [客户支持与服务](#category-customer-support-service)
  - [销售与营销自动化](#category-sales-marketing-automation)
  - [金融与投资](#category-finance-investing)
  - [法律与合规](#category-legal-compliance)
  - [医疗与健康](#category-healthcare-medical)
  - [教育与学习](#category-education-learning)
- [视觉与机器人](#category-vision-robotics-edge)
  - [目标检测与跟踪](#category-object-detection-tracking)
  - [分割与图像理解](#category-segmentation-image-understanding)
  - [视频理解](#category-video-understanding)
  - [机器人与具身智能](#category-robotics-embodied-intelligence)
  - [边缘与端侧推理](#category-edge-on-device-inference)
- [安全与隐私](#category-security-privacy)
  - [安全测试与红队](#category-security-testing-red-teaming)
  - [护栏与内容审核](#category-guardrails-content-moderation)
  - [隐私保护学习](#category-privacy-preserving-learning)
  - [检测与内容溯源](#category-detection-content-provenance)
  - [负责任 AI 与治理](#category-responsible-ai-governance)

<a id="category-assistants-productivity"></a>

## 助手与生产力

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [VidBee](https://openfree.tools/zh/vidbee) | 下载视频并在本机生成可搜索的转录文本。 | 10.8K | MIT | [官网](https://vidbee.org/) · [GitHub](https://github.com/nexmoe/VidBee) |

<a id="category-chat-interfaces"></a>

### 聊天界面

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Open WebUI](https://openfree.tools/zh/open-webui) | 用户友好的 AI 界面，支持 Ollama 和 OpenAI API | 153.2K | Other | [官网](https://openwebui.com/) · [GitHub](https://github.com/open-webui/open-webui) |
| [Cherry Studio](https://openfree.tools/zh/cherry-studio) | 一体化 AI 工作站 | 52.2K | AGPL-3.0 | [官网](https://cherryai.com/) · [GitHub](https://github.com/CherryHQ/cherry-studio) |
| [OpenBot](https://openfree.tools/zh/openbot) | 企业真正能够拥有的 AI 助手。 | 5.6K | MIT | [官网](https://www.copilotkit.ai/openbot) · [GitHub](https://github.com/CopilotKit/OpenBot) |

<a id="category-personal-desktop-assistants"></a>

### 个人与桌面助手

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [OpenClaw](https://openfree.tools/zh/openclaw) | 真正能做事的AI | 390.5K | Other | [官网](https://openclaw.ai/) · [GitHub](https://github.com/openclaw/openclaw) |
| [Inbox Zero](https://openfree.tools/zh/inbox-zero) | 开源 AI 邮件助手，快速实现收件箱清零 | 12.6K | Other | [官网](https://getinboxzero.com/) · [GitHub](https://github.com/elie222/inbox-zero) |

<a id="category-meeting-assistants-notes"></a>

### 会议助手与纪要

暂无已发布项目。

<a id="category-transcription-dictation"></a>

### 转录与听写

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Whisper](https://openfree.tools/zh/whisper) | 通用语音识别模型 | 109.6K | MIT | [官网](https://github.com/openai/whisper) · [GitHub](https://github.com/openai/whisper) |
| [VideoLingo](https://openfree.tools/zh/videolingo) | Netflix 级字幕切割、翻译、对齐与配音，一键全自动视频本地化 AI 字幕组 | 18.7K | Apache-2.0 | [官网](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |
| [VidBee](https://openfree.tools/zh/vidbee) | 下载视频并在本机生成可搜索的转录文本。 | 10.8K | MIT | [官网](https://vidbee.org/) · [GitHub](https://github.com/nexmoe/VidBee) |

<a id="category-search-answer-engines"></a>

### 搜索与答案引擎

暂无已发布项目。

<a id="category-deep-research"></a>

### 深度研究

暂无已发布项目。

<a id="category-writing-knowledge"></a>

### 写作与知识工作

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [WordCraft](https://openfree.tools/zh/wordcraft) | 用纯 Rust 重构的快速开源文字处理器 | 13.8K | Apache-2.0 | [官网](https://github.com/storytold/wordcraft) · [GitHub](https://github.com/storytold/wordcraft) |

<a id="category-generative-media-design"></a>

## 生成式媒体与设计

<a id="category-image-generation-workflows"></a>

### 图像生成与工作流

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [OpenDesign](https://openfree.tools/zh/opendesign) | 开源、本地优先的 Claude Design 替代方案 | 98.3K | Apache-2.0 | [官网](https://open-design.ai/) · [GitHub](https://github.com/nexu-io/open-design) |
| [ArtCraft](https://openfree.tools/zh/artcraft) | 可控 AI 图像与视频的开源工作室 | 28.9K | Apache-2.0 | [官网](https://github.com/storytold/artcraft) · [GitHub](https://github.com/storytold/artcraft) |
| [Ian Xiaohei Illustrations](https://openfree.tools/zh/ian-xiaohei-illustrations) | 为中文文章生成 16:9 小黑怪诞正文配图 | 12.4K | MIT | [官网](https://www.ianneo.xyz/) · [GitHub](https://github.com/helloianneo/ian-xiaohei-illustrations) |

<a id="category-image-editing-enhancement"></a>

### 图像编辑与增强

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [PhotoCraft](https://openfree.tools/zh/photocraft) | 你早已熟悉的开源图像编辑器 | 62.7K | Apache-2.0 | [官网](https://github.com/storytold/photocraft) · [GitHub](https://github.com/storytold/photocraft) |

<a id="category-video-generation"></a>

### 视频生成

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [HyperFrames](https://openfree.tools/zh/hyperframes) | 为智能体打造的视频编辑器：编写 HTML、渲染视频 | 59.2K | Apache-2.0 | [官网](https://hyperframes.dev/) · [GitHub](https://github.com/heygen-com/hyperframes) |

<a id="category-video-editing-animation"></a>

### 视频编辑与动画

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Recordly](https://openfree.tools/zh/recordly) | 开源屏幕录制与编辑工具，制作精美演示 | 33.9K | Other | [官网](https://github.com/webadderallorg/Recordly) · [GitHub](https://github.com/webadderallorg/Recordly) |
| [VideoLingo](https://openfree.tools/zh/videolingo) | Netflix 级字幕切割、翻译、对齐与配音，一键全自动视频本地化 AI 字幕组 | 18.7K | Apache-2.0 | [官网](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |

<a id="category-speech-voice-generation"></a>

### 语音与声音生成

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [VideoLingo](https://openfree.tools/zh/videolingo) | Netflix 级字幕切割、翻译、对齐与配音，一键全自动视频本地化 AI 字幕组 | 18.7K | Apache-2.0 | [官网](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |

<a id="category-music-audio-generation"></a>

### 音乐与音频生成

暂无已发布项目。

<a id="category-3d-generation-design"></a>

### 3D 生成与设计

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [腾讯混元3D](https://openfree.tools/zh/hunyuan3d) | 一站式3D内容AI创作平台 | 15.0K | Other | [官网](https://3d.hunyuan.tencent.com/) · [GitHub](https://github.com/Tencent-Hunyuan/Hunyuan3D-2) |

<a id="category-avatars-digital-humans"></a>

### 虚拟人与数字分身

暂无已发布项目。

<a id="category-ai-coding-developer-tools"></a>

## 编程与开发工具

<a id="category-code-assistants-editors"></a>

### 编程助手与编辑器

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Claude Code](https://openfree.tools/zh/claude-code) | 智能体编程工具，支持终端、IDE、桌面应用与浏览器。 | 148.3K | — | [官网](https://code.claude.com/docs/en/overview) · [GitHub](https://github.com/anthropics/claude-code) |
| [Zed](https://openfree.tools/zh/zed) | 你的最后一款下一代编辑器 | 90.9K | Other | [官网](https://zed.dev/) · [GitHub](https://github.com/zed-industries/zed) |
| [Screenshot to Code](https://openfree.tools/zh/screenshot-to-code) | 将任意截图或设计转换为整洁代码 | 79.8K | MIT | [官网](https://screenshottocode.com/) · [GitHub](https://github.com/abi/screenshot-to-code) |
| [Cline](https://openfree.tools/zh/cline) | 开源编码代理 | 69.3K | Apache-2.0 | [官网](https://cline.bot/) · [GitHub](https://github.com/cline/cline) |
| [Claude Code Plugins](https://openfree.tools/zh/claude-plugins-official) | Anthropic 官方维护的 Claude Code 插件目录 | 41.0K | Apache-2.0 | [官网](https://github.com/anthropics/claude-plugins-official) · [GitHub](https://github.com/anthropics/claude-plugins-official) |
| [omp](https://openfree.tools/zh/omp) | 内置 IDE 的编码智能体。 | 33.5K | MIT | [官网](https://omp.sh/) · [GitHub](https://github.com/can1357/oh-my-pi) |
| [Kilo Code](https://openfree.tools/zh/kilo-code) | 为每个开发者工作流打造的开放智能体 | 27.6K | MIT | [官网](https://kilo.ai/) · [GitHub](https://github.com/Kilo-Org/kilocode) |

<a id="category-coding-agents"></a>

### 编程智能体

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [ECC](https://openfree.tools/zh/ecc) | 面向编码智能体的开源技能与工作流工具 | 281.5K | MIT | [官网](https://github.com/affaan-m/ECC) · [GitHub](https://github.com/affaan-m/ECC) |
| [OpenCode](https://openfree.tools/zh/opencode) | 开源 AI 编程代理 | 210.1K | MIT | [官网](https://opencode.ai/) · [GitHub](https://github.com/anomalyco/opencode) |
| [Codex](https://openfree.tools/zh/codex) | 在终端中运行的轻量级编程智能体 | 126.5K | Apache-2.0 | [官网](https://github.com/openai/codex) · [GitHub](https://github.com/openai/codex) |
| [Caveman](https://openfree.tools/zh/caveman) | 让 AI 代理少说、少读。 | 113.1K | Apache-2.0 | [官网](https://github.com/JuliusBrussee/caveman) · [GitHub](https://github.com/JuliusBrussee/caveman) |
| [Orca](https://openfree.tools/zh/orca) | 用智能体IDE实现100倍交付 | 78.5K | MIT | [官网](https://onorca.dev/) · [GitHub](https://github.com/stablyai/orca) |
| [Warp](https://openfree.tools/zh/warp) | 面向云软件工厂的开放基础设施 | 65.2K | AGPL-3.0 | [官网](https://warp.dev/) · [GitHub](https://github.com/warpdotdev/warp) |
| [Open Code Review](https://openfree.tools/zh/open-code-review) | 行级精准的 AI 代码审查命令行工具 | 47.5K | Apache-2.0 | [官网](https://github.com/alibaba/open-code-review) · [GitHub](https://github.com/alibaba/open-code-review) |
| [Codewhale](https://openfree.tools/zh/codewhale) | 支持任意模型的开源编码智能体 | 41.1K | MIT | [官网](https://github.com/codewhale-hq/Codewhale) · [GitHub](https://github.com/codewhale-hq/Codewhale) |
| [Grok Build](https://openfree.tools/zh/grok-build) | SpaceXAI 的编码代理框架与 TUI | 27.1K | Apache-2.0 | [官网](https://github.com/xai-org/grok-build) · [GitHub](https://github.com/xai-org/grok-build) |
| [Happy](https://openfree.tools/zh/happy) | Claude Code 与 Codex 的远程控制 | 23.9K | MIT | [官网](https://happy.engineering/) · [GitHub](https://github.com/slopus/happy) |
| [T3 Code](https://openfree.tools/zh/t3-code) | 面向编码代理的开源控制平面 | 23.6K | MIT | [官网](https://t3.codes/) · [GitHub](https://github.com/pingdotgg/t3code) |
| [Paseo](https://openfree.tools/zh/paseo) | 编码代理的控制平面 | 18.6K | Other | [官网](https://paseo.sh/) · [GitHub](https://github.com/getpaseo/paseo) |
| [magpie](https://openfree.tools/zh/magpie) | 所有 agent 的模型，集中一处 | 3.9K | MIT | [官网](https://usemagpie.ai/) · [GitHub](https://github.com/yetone/magpie) |
| [Plannotator](https://openfree.tools/zh/plannotator-2) | 为你的智能体提供计划与代码审查。 | 3.6K | MIT | [官网](https://plannotator.ai/) · [GitHub](https://github.com/plannotator/effective-html) |

<a id="category-app-ui-generation"></a>

### 应用与界面生成

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [OpenUI](https://openfree.tools/zh/openui) | 面向生成式 UI 的开放标准 | 11.4K | MIT | [官网](https://github.com/thesysdev/openui) · [GitHub](https://github.com/thesysdev/openui) |
| [Anatomy](https://openfree.tools/zh/anatomy) | 面向 Claude Code 的实时等距机械图技能 | 1.5K | MIT | [官网](https://skills.wheresryan.sh/anatomy) · [GitHub](https://github.com/wheresryan22/anatomy) |

<a id="category-code-review"></a>

### 代码审查

暂无已发布项目。

<a id="category-test-generation-qa"></a>

### 测试生成与质量保障

暂无已发布项目。

<a id="category-debugging-program-repair"></a>

### 调试与程序修复

暂无已发布项目。

<a id="category-code-search-understanding"></a>

### 代码搜索与理解

暂无已发布项目。

<a id="category-coding-harnesses-cli-runtimes"></a>

### 编程 Harness 与命令行运行时

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [cf](https://openfree.tools/zh/cf) | 面向整个 Cloudflare API 的智能体 CLI | 0.6K | Apache-2.0 | [官网](https://github.com/cloudflare/cf) · [GitHub](https://github.com/cloudflare/cf) |

<a id="category-agents-automation"></a>

## 智能体与自动化

<a id="category-agent-frameworks"></a>

### 智能体框架

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Superpowers](https://openfree.tools/zh/superpowers) | 面向编码智能体的技能框架与开发方法论 | 299.6K | MIT | [官网](https://github.com/obra/superpowers) · [GitHub](https://github.com/obra/superpowers) |
| [Hermes Agent](https://openfree.tools/zh/hermes-agent) | 与你一同成长的智能体 | 249.0K | MIT | [官网](https://hermes-agent.nousresearch.com/) · [GitHub](https://github.com/NousResearch/hermes-agent) |
| [DeepSeek Harness](https://openfree.tools/zh/deepseek-harness) | 一切皆插件。 | 237.5K | MIT | [官网](https://deepseek.com/harness) · [GitHub](https://github.com/deepseek-ai/deepseek-harness) |
| [Dify](https://openfree.tools/zh/dify) | 开源LLM应用开发平台 | 157.2K | Other | [官网](https://dify.ai/) · [GitHub](https://github.com/langgenius/dify) |
| [LangChain](https://openfree.tools/zh/langchain) | 智能体工程平台。 | 147.1K | MIT | [官网](https://docs.langchain.com/langchain/) · [GitHub](https://github.com/langchain-ai/langchain) |
| [pi](https://openfree.tools/zh/pi) | AI 智能体工具包 | 109.4K | MIT | [官网](https://github.com/earendil-works/pi) · [GitHub](https://github.com/earendil-works/pi) |
| [OpenHands](https://openfree.tools/zh/openhands) | 面向智能体软件开发的开放平台 | 89.2K | MIT | [官网](https://openhands.dev/) · [GitHub](https://github.com/OpenHands/OpenHands) |
| [Paperclip](https://openfree.tools/zh/paperclip) | 管理AI代理团队，运营你的业务。 | 85.4K | MIT | [官网](https://paperclip.ing/) · [GitHub](https://github.com/paperclipai/paperclip) |
| [Ruflo](https://openfree.tools/zh/ruflo) | 面向 Claude Code 和 Codex 的智能体元框架。 | 75.6K | MIT | [官网](https://github.com/ruvnet/ruflo) · [GitHub](https://github.com/ruvnet/ruflo) |
| [Multica](https://openfree.tools/zh/multica) | 让智能体像队友一样出现在看板上。 | 51.4K | Other | [官网](https://multica.ai/) · [GitHub](https://github.com/multica-ai/multica) |
| [AI Job Search](https://openfree.tools/zh/ai-job-search) | 在你的机器上运行的求职流程。 | 48.6K | MIT | [官网](https://github.com/MadsLorentzen/ai-job-search) · [GitHub](https://github.com/MadsLorentzen/ai-job-search) |
| [OpenHuman](https://openfree.tools/zh/openhuman) | 运行在笔记本电脑上的开源个人 AI | 40.1K | GPL-3.0 | [官网](https://tinyhumans.ai/openhuman) · [GitHub](https://github.com/tinyhumansai/openhuman) |
| [NanoClaw](https://openfree.tools/zh/nanoclaw) | 您的个人 AI 代理。安全。轻量。属于您。 | 30.8K | MIT | [官网](https://nanoclaw.dev/) · [GitHub](https://github.com/nanocoai/nanoclaw) |
| [OpenAI Agents SDK](https://openfree.tools/zh/openai-agents-sdk) | 轻量且强大的多智能体工作流框架 | 29.7K | MIT | [官网](https://openai.github.io/openai-agents-python/) · [GitHub](https://github.com/openai/openai-agents-python) |
| [Agent Development Kit (ADK)](https://openfree.tools/zh/agent-development-kit-adk) | 开源、代码优先的 Python AI 智能体框架 | 21.6K | Apache-2.0 | [官网](https://google.github.io/adk-docs/) · [GitHub](https://github.com/google/adk-python) |
| [SWE-agent](https://openfree.tools/zh/swe-agent) | 自主软件工程智能体 | 20.4K | MIT | [官网](https://swe-agent.com/) · [GitHub](https://github.com/SWE-agent/SWE-agent) |
| [Browser Harness](https://openfree.tools/zh/browser-harness) | 基于 CDP 的自愈式浏览器代理工具 | 18.1K | MIT | [官网](https://browser-harness.com/) · [GitHub](https://github.com/browser-use/browser-harness) |
| [Harbor](https://openfree.tools/zh/harbor) | 评估并优化沙箱化智能体与模型。 | 5.6K | Apache-2.0 | [官网](https://harborframework.com/) · [GitHub](https://github.com/harbor-framework/harbor) |
| [Octop](https://openfree.tools/zh/octop) | 更智能的自托管 AI 助手，多用户、多智能体 | 5.3K | MIT | [官网](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/Octop) |
| [OpenDots](https://openfree.tools/zh/opendots) | 可在文本、通话和 Slack 之间切换的常驻 AI 同事 | 0.4K | MIT | [官网](https://www.copilotkit.ai/opendots) · [GitHub](https://github.com/CopilotKit/OpenDots) |
| [Octop Harness](https://openfree.tools/zh/octop-harness) | 生产级智能体运行时与自托管智能协作伙伴 | 0.1K | MIT | [官网](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-harness) |

<a id="category-multi-agent-systems"></a>

### 多智能体系统

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [n8n](https://openfree.tools/zh/n8n) | 可见可控的 AI 智能体与工作流 | 206.0K | Other | [官网](https://n8n.io/) · [GitHub](https://github.com/n8n-io/n8n) |
| [LobeHub](https://openfree.tools/zh/lobehub) | 你的首席智能体运营官，7×24 小时管理 AI 团队 | 82.8K | Other | [官网](https://lobehub.com/) · [GitHub](https://github.com/lobehub/lobehub) |
| [cmux](https://openfree.tools/zh/cmux) | 基于 Ghostty 的 macOS 终端，为编码代理打造 | 28.2K | Other | [官网](https://github.com/manaflow-ai/cmux) · [GitHub](https://github.com/manaflow-ai/cmux) |
| [OpenDots](https://openfree.tools/zh/opendots) | 可在文本、通话和 Slack 之间切换的常驻 AI 同事 | 0.4K | MIT | [官网](https://www.copilotkit.ai/opendots) · [GitHub](https://github.com/CopilotKit/OpenDots) |

<a id="category-agent-builders-studios"></a>

### 智能体构建器

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [OpenMontage](https://openfree.tools/zh/openmontage) | 开源、智能体驱动的视频制作系统 | 61.5K | AGPL-3.0 | [官网](https://www.openmontage.video/) · [GitHub](https://github.com/calesthio/OpenMontage) |

<a id="category-browser-agents"></a>

### 浏览器智能体

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [agent-browser](https://openfree.tools/zh/agent-browser) | 面向 AI 代理的浏览器自动化 CLI | 44.1K | Apache-2.0 | [官网](https://github.com/vercel-labs/agent-browser) · [GitHub](https://github.com/vercel-labs/agent-browser) |
| [Lightpanda](https://openfree.tools/zh/lightpanda) | 为AI代理与自动化而生的无头浏览器 | 35.6K | AGPL-3.0 | [官网](https://lightpanda.io/) · [GitHub](https://github.com/lightpanda-io/browser) |
| [ego lite](https://openfree.tools/zh/ego-lite) | AI 代理执行浏览器自动化的最快浏览器 | 16.5K | MIT | [官网](https://lite.ego.app/) · [GitHub](https://github.com/citrolabs/ego-lite) |

<a id="category-computer-use-gui-agents"></a>

### 计算机操作与 GUI 智能体

暂无已发布项目。

<a id="category-workflow-automation"></a>

### 工作流自动化

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [VideoLingo](https://openfree.tools/zh/videolingo) | Netflix 级字幕切割、翻译、对齐与配音，一键全自动视频本地化 AI 字幕组 | 18.7K | Apache-2.0 | [官网](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |

<a id="category-voice-agents"></a>

### 语音智能体

暂无已发布项目。

<a id="category-agent-infrastructure-protocols"></a>

## 智能体基础设施

<a id="category-mcp-servers-tool-connectors"></a>

### MCP 服务与工具连接器

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [REA](https://openfree.tools/zh/rea) | 用你的编程智能体进行逆向工程 | 263.5K | MIT | [官网](https://github.com/morluto/rea) · [GitHub](https://github.com/morluto/rea) |
| [Firecrawl](https://openfree.tools/zh/firecrawl) | 用于大规模搜索、抓取和交互的网页数据 API | 184.8K | AGPL-3.0 | [官网](https://firecrawl.dev/) · [GitHub](https://github.com/firecrawl/firecrawl) |
| [Gemini CLI](https://openfree.tools/zh/gemini-cli) | 将 Gemini 能力带入终端的开源 AI 智能体 | 107.2K | Apache-2.0 | [官网](https://geminicli.com/) · [GitHub](https://github.com/google-gemini/gemini-cli) |
| [Model Context Protocol](https://openfree.tools/zh/model-context-protocol) | 连接AI应用与外部系统的开放标准 | 90.6K | Other | [官网](https://modelcontextprotocol.io/) · [GitHub](https://github.com/modelcontextprotocol/servers) |
| [Crawl4AI](https://openfree.tools/zh/crawl4ai) | 面向 LLM 与 AI 代理的开源网络爬虫 | 84.3K | Apache-2.0 | [官网](https://crawl4ai.com/) · [GitHub](https://github.com/unclecode/crawl4ai) |
| [Chrome DevTools for agents](https://openfree.tools/zh/chrome-devtools-mcp) | 让 AI 编码代理控制并检查实时 Chrome 浏览器 | 53.7K | Apache-2.0 | [官网](https://github.com/ChromeDevTools/chrome-devtools-mcp) · [GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp) |
| [Cognee](https://openfree.tools/zh/cognee) | 面向 AI 智能体的开源记忆平台 | 31.0K | Apache-2.0 | [官网](https://www.cognee.ai/) · [GitHub](https://github.com/topoteretes/cognee) |
| [QMD](https://openfree.tools/zh/qmd) | 面向文档、笔记与知识库的设备端混合搜索 | 30.1K | MIT | [官网](https://github.com/tobi/qmd) · [GitHub](https://github.com/tobi/qmd) |
| [OpenWork](https://openfree.tools/zh/openwork) | 你的 AI 工作空间，无供应商锁定。 | 23.7K | Other | [官网](https://openworklabs.com/) · [GitHub](https://github.com/different-ai/openwork) |
| [OpenSEO](https://openfree.tools/zh/openseo) | Semrush 和 Ahrefs 的开源替代方案 | 23.2K | MIT | [官网](https://openseo.so/) · [GitHub](https://github.com/every-app/open-seo) |
| [OpenWorker](https://openfree.tools/zh/openworker) | AI 帮你把日常任务做完 | 18.3K | MIT | [官网](http://openworker.com/) · [GitHub](https://github.com/andrewyng/openworker) |
| [Bytebase](https://openfree.tools/zh/bytebase) | 统一数据库治理，覆盖团队与 AI 代理 | 14.6K | Other | [官网](https://github.com/bytebase/bytebase) · [GitHub](https://github.com/bytebase/bytebase) |
| [GenOffice](https://openfree.tools/zh/genoffice) | 免费开源的桌面 AI 办公套件 | 7.9K | Apache-2.0 | [官网](https://genoffice.ai/) · [GitHub](https://github.com/genspark-ai/genoffice) |
| [treg](https://openfree.tools/zh/treg) | 面向智能体工具的 OpenRouter | 4.8K | Other | [官网](https://treg.to/?ref=javayhu-qsn8e) · [GitHub](https://github.com/superdesigndev/treg) |
| [HQBase](https://openfree.tools/zh/hqbase) | 在您 Cloudflare 账户中运行的 AI 原生团队共享邮箱 | 0.3K | AGPL-3.0 | [官网](https://hqbase.io/) · [GitHub](https://github.com/HQBase/hqbase) |
| [Octop Browser](https://openfree.tools/zh/octop-browser) | 直连 CDP 的轻量级浏览器自动化工具，精准可靠。 | 0.0K | MIT | [官网](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-browser) |

<a id="category-agent-memory"></a>

### 智能体记忆

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Mem0](https://openfree.tools/zh/mem0) | 跨会话和智能体持久化的AI记忆 | 66.0K | Apache-2.0 | [官网](https://mem0.ai/) · [GitHub](https://github.com/mem0ai/mem0) |
| [Context Mode](https://openfree.tools/zh/context-mode) | 连接编码智能体与模型的控制平面 | 30.2K | Other | [官网](https://github.com/mksglu/context-mode) · [GitHub](https://github.com/mksglu/context-mode) |
| [ai-memory](https://openfree.tools/zh/ai-memory) | 面向 AI 编码代理的长期记忆 | 9.7K | MIT | [官网](https://github.com/akitaonrails/ai-memory) · [GitHub](https://github.com/akitaonrails/ai-memory) |
| [Hy-Memory](https://openfree.tools/zh/hy-memory) | 面向自演化 LLM 智能体的双系统认知记忆引擎。 | 0.3K | Other | [官网](https://github.com/Tencent-Hunyuan/Hy-Memory) · [GitHub](https://github.com/Tencent-Hunyuan/Hy-Memory) |
| [Octop Memory](https://openfree.tools/zh/octop-2) | 懂你、帮你、陪你成长的智能伙伴 | 0.1K | MIT | [官网](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-memory) |

<a id="category-context-management"></a>

### 上下文管理

暂无已发布项目。

<a id="category-agent-sdks-runtimes"></a>

### 智能体 SDK 与运行时

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Browser Use](https://openfree.tools/zh/browser-use) | 使用浏览器的智能体。 | 116.3K | MIT | [官网](https://browser-use.com/) · [GitHub](https://github.com/browser-use/browser-use) |
| [HarnessRouter](https://openfree.tools/zh/harnessrouter) | 智能体运行框架的统一接口 | 2.7K | Apache-2.0 | [官网](https://harnessrouter.ai/) · [GitHub](https://github.com/HarnessRouter/harnessrouter) |
| [Octop Gateway](https://openfree.tools/zh/octop-gateway) | 面向 AI Agent 与机器人的多平台 IM 通道桥接 | 0.1K | MIT | [官网](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-gateway) |

<a id="category-sandboxes-code-execution"></a>

### 沙箱与代码执行

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [SPACE](https://openfree.tools/zh/space) | 面向智能体代码执行的隔离沙箱平台 | 0.9K | Apache-2.0 | [官网](https://github.com/perplexityai/SPACE) · [GitHub](https://github.com/perplexityai/SPACE) |

<a id="category-agent-skills-tool-libraries"></a>

### 智能体技能与工具库

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Archify](https://openfree.tools/zh/archify) | 把系统、流程或计划变成可交互图解 | 81.9K | MIT | [官网](https://archify.si/) · [GitHub](https://github.com/tt-a1i/archify) |
| [HyperFrames](https://openfree.tools/zh/hyperframes) | 为智能体打造的视频编辑器：编写 HTML、渲染视频 | 59.2K | Apache-2.0 | [官网](https://hyperframes.dev/) · [GitHub](https://github.com/heygen-com/hyperframes) |
| [Marketing Skills](https://openfree.tools/zh/marketing-skills) | 面向 AI 代理的营销技能库 | 54.0K | MIT | [官网](https://marketing-skills.com/) · [GitHub](https://github.com/coreyhaines31/marketingskills) |
| [CLI-Anything](https://openfree.tools/zh/cli-anything) | 生成智能体原生 CLI，让 AI 智能体操作 | 53.5K | Apache-2.0 | [官网](https://github.com/HKUDS/CLI-Anything) · [GitHub](https://github.com/HKUDS/CLI-Anything) |
| [Guizang PPT Skill](https://openfree.tools/zh/guizang-ppt-skill) | 为 Agent 环境生成网页 PPT、配图与封面 | 27.6K | AGPL-3.0 | [官网](https://github.com/op7418/guizang-ppt-skill) · [GitHub](https://github.com/op7418/guizang-ppt-skill) |
| [baoyu-skills](https://openfree.tools/zh/baoyu-skills) | 为 AI Agent 提升日常工作效率的 Skill 集合 | 26.4K | MIT | [官网](https://github.com/JimLiu/baoyu-skills) · [GitHub](https://github.com/JimLiu/baoyu-skills) |
| [Ian Xiaohei Illustrations](https://openfree.tools/zh/ian-xiaohei-illustrations) | 为中文文章生成 16:9 小黑怪诞正文配图 | 12.4K | MIT | [官网](https://www.ianneo.xyz/) · [GitHub](https://github.com/helloianneo/ian-xiaohei-illustrations) |
| [Android Skills](https://openfree.tools/zh/skills) | 为 Android 开发提供 AI 优化模块化指令 | 8.3K | Apache-2.0 | [官网](https://github.com/android/skills) · [GitHub](https://github.com/android/skills) |
| [ASD-STE100 Skill](https://openfree.tools/zh/asd-ste100-skill) | 用 ASD-STE100 规则改写含糊的、面向智能体的英文 | 4.2K | MIT | [官网](https://github.com/danyuchn/asd-ste100-skill) · [GitHub](https://github.com/danyuchn/asd-ste100-skill) |
| [Plannotator](https://openfree.tools/zh/plannotator-2) | 为你的智能体提供计划与代码审查。 | 3.6K | MIT | [官网](https://plannotator.ai/) · [GitHub](https://github.com/plannotator/effective-html) |
| [engineering-review-board](https://openfree.tools/zh/engineering-review-board) | 可复用AI代理技能的规范本地源 | 0.0K | MIT | [官网](https://github.com/nledford/engineering-review-board) · [GitHub](https://github.com/nledford/engineering-review-board) |

<a id="category-agent-communication-protocols"></a>

### 智能体通信协议

暂无已发布项目。

<a id="category-models-inference"></a>

## 模型与推理

<a id="category-language-models"></a>

### 语言模型

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [llama.cpp](https://openfree.tools/zh/llama-cpp) | C/C++ 实现的 LLM 推理 | 129.5K | MIT | [官网](https://llama.app/) · [GitHub](https://github.com/ggml-org/llama.cpp) |
| [DeepSeek-V3](https://openfree.tools/zh/deepseek-v3) | 671B 参数混合专家语言模型，每 token 激活 37B | 104.5K | MIT | [官网](https://github.com/deepseek-ai/DeepSeek-V3) · [GitHub](https://github.com/deepseek-ai/DeepSeek-V3) |
| [Qwen3](https://openfree.tools/zh/qwen3) | 阿里云 Qwen 团队开发的大型语言模型系列 | 27.7K | — | [官网](https://github.com/QwenLM/Qwen3) · [GitHub](https://github.com/QwenLM/Qwen3) |
| [Qwen3-VL](https://openfree.tools/zh/qwen3-vl) | Qwen 团队开发的多模态大语言模型系列 | 20.0K | Apache-2.0 | [官网](https://github.com/QwenLM/Qwen3-VL) · [GitHub](https://github.com/QwenLM/Qwen3-VL) |

<a id="category-multimodal-models"></a>

### 多模态模型

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [SGLang](https://openfree.tools/zh/sglang) | 高性能大语言与多模态模型服务 | 37.2K | Apache-2.0 | [官网](https://sglang.io/) · [GitHub](https://github.com/sgl-project/sglang) |

<a id="category-embedding-models"></a>

### 嵌入模型

暂无已发布项目。

<a id="category-rerankers"></a>

### 重排模型

暂无已发布项目。

<a id="category-local-model-runners"></a>

### 本地模型运行器

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [ollama](https://openfree.tools/zh/ollama) | 使用开放模型开始构建。 | 181.7K | MIT | [官网](https://ollama.com/) · [GitHub](https://github.com/ollama/ollama) |

<a id="category-inference-servers-apis"></a>

### 推理服务与 API

暂无已发布项目。

<a id="category-quantization-acceleration"></a>

### 量化与加速

暂无已发布项目。

<a id="category-frameworks-rag"></a>

## 框架与 RAG

<a id="category-application-frameworks"></a>

### 应用框架

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [GDevelop](https://openfree.tools/zh/gdevelop) | 开源无代码游戏引擎，支持2D、3D和多人游戏 | 27.6K | Other | [官网](https://github.com/4ian/GDevelop) · [GitHub](https://github.com/4ian/GDevelop) |
| [Void](https://openfree.tools/zh/void) | 用 Vite 构建，用 Void 部署。 | 0.3K | MIT | [官网](https://github.com/voidzero-dev/void) · [GitHub](https://github.com/voidzero-dev/void) |

<a id="category-rag-frameworks"></a>

### RAG 框架

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [GraphRAG](https://openfree.tools/zh/graphrag) | 模块化的基于图的检索增强生成系统 | 36.1K | MIT | [官网](https://microsoft.github.io/graphrag/) · [GitHub](https://github.com/microsoft/graphrag) |

<a id="category-knowledge-applications"></a>

### 知识库应用

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Open Notebook](https://openfree.tools/zh/open-notebook) | 私密掌控你的研究 | 39.5K | MIT | [官网](https://www.open-notebook.ai/) · [GitHub](https://github.com/lfnovo/open-notebook) |
| [Tolaria](https://openfree.tools/zh/tolaria) | AI 时代的第二大脑。永久免费。 | 19.9K | AGPL-3.0 | [官网](https://tolaria.md/) · [GitHub](https://github.com/refactoringhq/tolaria) |
| [OpenKnowledge](https://openfree.tools/zh/openknowledge) | 漂亮的 AI 原生 Markdown 编辑器与知识库 | 4.3K | GPL-3.0 | [官网](https://openknowledge.ai/) · [GitHub](https://github.com/inkeep/open-knowledge) |

<a id="category-app-ui-sdks"></a>

### 应用界面与 SDK

暂无已发布项目。

<a id="category-model-gateways-routing"></a>

### 模型网关与路由

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Helicone](https://openfree.tools/zh/helicone) | AI 网关与 LLM 可观测性平台 | 6.2K | Apache-2.0 | [官网](https://www.helicone.ai/) · [GitHub](https://github.com/Helicone/helicone) |

<a id="category-prompting-structured-generation"></a>

### 提示词与结构化生成

暂无已发布项目。

<a id="category-data-retrieval"></a>

## 数据与检索

<a id="category-vector-databases"></a>

### 向量数据库

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [OpenViking](https://openfree.tools/zh/openviking) | 面向 AI 智能体的开源上下文数据库 | 38.7K | AGPL-3.0 | [官网](https://openviking.ai/) · [GitHub](https://github.com/volcengine/OpenViking) |
| [Qdrant](https://openfree.tools/zh/qdrant) | 高性能向量数据库与向量搜索引擎 | 34.8K | Apache-2.0 | [官网](https://qdrant.tech/) · [GitHub](https://github.com/qdrant/qdrant) |
| [Chroma](https://openfree.tools/zh/chroma) | 面向 AI 的开源搜索基础设施 | 29.4K | Apache-2.0 | [官网](https://www.trychroma.com/) · [GitHub](https://github.com/chroma-core/chroma) |
| [XERJ](https://openfree.tools/zh/xerj) | 为 AI 智能体打造的搜索 | 6.9K | Apache-2.0 | [官网](https://github.com/xerj-org/xerj) · [GitHub](https://github.com/xerj-org/xerj) |

<a id="category-retrieval-search-engines"></a>

### 检索与搜索引擎

暂无已发布项目。

<a id="category-document-parsing-ocr"></a>

### 文档解析与 OCR

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [PaddleOCR](https://openfree.tools/zh/paddleocr) | 全球领先的OCR工具包与文档AI引擎 | 90.2K | Apache-2.0 | [官网](https://www.paddleocr.com/) · [GitHub](https://github.com/PaddlePaddle/PaddleOCR) |
| [anydoc](https://openfree.tools/zh/anydoc) | 将各类文档转换为 GitHub 风格 Markdown 的 Rust 库 | 22.1K | MIT | [官网](https://firecrawl.github.io/anydoc/) · [GitHub](https://github.com/firecrawl/anydoc) |
| [@office-kit/xlsx](https://openfree.tools/zh/office-kit-xlsx) | 在 TypeScript 中读取、编辑和写入 Excel 文件 | 0.1K | MIT | [官网](https://office-kit.github.io/xlsx/) · [GitHub](https://github.com/office-kit/xlsx) |
| [@office-kit/pptx](https://openfree.tools/zh/office-kit-pptx) | 用 TypeScript 读取、编辑和写入 .pptx 文件 | 0.0K | MIT | [官网](https://office-kit.github.io/pptx/) · [GitHub](https://github.com/office-kit/pptx) |
| [@office-kit/docx](https://openfree.tools/zh/office-kit-docx) | 在 TypeScript 中读取、编辑和写入 Word 文档。 | 0.0K | MIT | [官网](https://office-kit.github.io/docx/) · [GitHub](https://github.com/office-kit/docx) |

<a id="category-web-scraping-extraction"></a>

### 网页抓取与提取

暂无已发布项目。

<a id="category-knowledge-graphs-graphrag"></a>

### 知识图谱与 GraphRAG

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Marble Skill Taxonomy](https://openfree.tools/zh/marble-skill-taxonomy) | 开放的小学学习主题与先修依赖分类体系 | 5.0K | ODbL-1.0 | [官网](https://github.com/withmarbleapp/os-taxonomy) · [GitHub](https://github.com/withmarbleapp/os-taxonomy) |

<a id="category-datasets-labeling-data-quality"></a>

### 数据集、标注与数据质量

暂无已发布项目。

<a id="category-training-mlops"></a>

## 训练与 MLOps

<a id="category-training-fine-tuning"></a>

### 训练与微调

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Unsloth](https://openfree.tools/zh/unsloth) | 开源框架，用于在本地运行和训练LLM | 76.8K | Apache-2.0 | [官网](https://unsloth.ai/docs) · [GitHub](https://github.com/unslothai/unsloth) |

<a id="category-distributed-training"></a>

### 分布式训练

暂无已发布项目。

<a id="category-rl-preference-optimization"></a>

### 强化学习与偏好优化

暂无已发布项目。

<a id="category-evaluation-benchmarks"></a>

### 评测与基准

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Langfuse](https://openfree.tools/zh/langfuse) | 开源智能体评估与可观测性 | 35.1K | Other | [官网](https://langfuse.com/) · [GitHub](https://github.com/langfuse/langfuse) |

<a id="category-observability-tracing"></a>

### 可观测性与追踪

暂无已发布项目。

<a id="category-experiment-tracking-model-registry"></a>

### 实验跟踪与模型注册

暂无已发布项目。

<a id="category-pipelines-deployment-compute"></a>

### 流水线、部署与计算

暂无已发布项目。

<a id="category-business-industry"></a>

## 商业与行业

<a id="category-data-analysis-business-intelligence"></a>

### 数据分析与商业智能

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Scientific Agent Skills](https://openfree.tools/zh/scientific-agent-skills) | 面向科研 AI 智能体的科学流程知识库 | 51.8K | MIT | [官网](https://github.com/K-Dense-AI/scientific-agent-skills) · [GitHub](https://github.com/K-Dense-AI/scientific-agent-skills) |
| [Rerun](https://openfree.tools/zh/rerun) | 面向物理 AI 的数据层，覆盖从采集到训练 | 11.6K | Apache-2.0 | [官网](https://github.com/rerun-io/rerun) · [GitHub](https://github.com/rerun-io/rerun) |

<a id="category-customer-support-service"></a>

### 客户支持与服务

暂无已发布项目。

<a id="category-sales-marketing-automation"></a>

### 销售与营销自动化

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [Marketing Skills](https://openfree.tools/zh/marketing-skills) | 面向 AI 代理的营销技能库 | 54.0K | MIT | [官网](https://marketing-skills.com/) · [GitHub](https://github.com/coreyhaines31/marketingskills) |
| [Mailcheap](https://openfree.tools/zh/mailcheap) | 基于 Amazon SES 的自托管邮件通讯工具 | 0.5K | MIT | [官网](https://github.com/marclou/mailcheap) · [GitHub](https://github.com/marclou/mailcheap) |
| [SEO Skills](https://openfree.tools/zh/seo-skills) | 面向 SEO 与产品工作的开源智能体技能 | 0.2K | — | [官网](https://il.ly/skills) · [GitHub](https://github.com/Illyism/seo-skills) |

<a id="category-finance-investing"></a>

### 金融与投资

暂无已发布项目。

<a id="category-legal-compliance"></a>

### 法律与合规

暂无已发布项目。

<a id="category-healthcare-medical"></a>

### 医疗与健康

暂无已发布项目。

<a id="category-education-learning"></a>

### 教育与学习

暂无已发布项目。

<a id="category-vision-robotics-edge"></a>

## 视觉与机器人

<a id="category-object-detection-tracking"></a>

### 目标检测与跟踪

暂无已发布项目。

<a id="category-segmentation-image-understanding"></a>

### 分割与图像理解

暂无已发布项目。

<a id="category-video-understanding"></a>

### 视频理解

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [VidBee](https://openfree.tools/zh/vidbee) | 下载视频并在本机生成可搜索的转录文本。 | 10.8K | MIT | [官网](https://vidbee.org/) · [GitHub](https://github.com/nexmoe/VidBee) |

<a id="category-robotics-embodied-intelligence"></a>

### 机器人与具身智能

暂无已发布项目。

<a id="category-edge-on-device-inference"></a>

### 边缘与端侧推理

暂无已发布项目。

<a id="category-security-privacy"></a>

## 安全与隐私

<a id="category-security-testing-red-teaming"></a>

### 安全测试与红队

暂无已发布项目。

<a id="category-guardrails-content-moderation"></a>

### 护栏与内容审核

| 项目 | 简介 | Stars | 许可证 | 链接 |
| --- | --- | ---: | --- | --- |
| [TrustGraph](https://openfree.tools/zh/trustgraph) | 图谱承载业务含义，运行时掌握业务授权 | 2.8K | Apache-2.0 | [官网](https://github.com/trustgraph-ai/trustgraph) · [GitHub](https://github.com/trustgraph-ai/trustgraph) |

<a id="category-privacy-preserving-learning"></a>

### 隐私保护学习

暂无已发布项目。

<a id="category-detection-content-provenance"></a>

### 检测与内容溯源

暂无已发布项目。

<a id="category-responsible-ai-governance"></a>

### 负责任 AI 与治理

暂无已发布项目。

## 关于数据

数据包含全部已发布的目录项目、公开分类和标签、项目与分类及标签的关联、
中英文介绍，以及已有的仓库信息。不会导出草稿、私人提交或用户账户信息。
缺失信息显示为 **—**，不会推测补全。Stars 和仓库信息采用 OpenFree
最近保存的数据，不代表 GitHub 实时数值。缺少中文字段时使用英文内容。

## 参与贡献

如需提交项目，请使用 OpenFree 的[提交入口](https://openfree.tools/zh/dashboard/submit)。
项目信息统一在 [OpenFree](https://openfree.tools/zh) 维护，本数据仓库不接受 GitHub Issue。

## 许可

各项目保留各自的许可证，具体使用条件以项目源码仓库为准。
收录不代表背书，也不改变项目的许可证。
介绍文字与元数据来自 [OpenFree](https://openfree.tools/zh)。
自动化代码使用 [MIT 许可证](LICENSE)，该代码许可证不适用于项目内容、标志或目录介绍文字。

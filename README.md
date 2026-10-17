# OpenFree Tools Dataset

[English](README.md) · [简体中文](README.zh-CN.md) · [Explore OpenFree](https://openfree.tools)

Discover open-source software, organized by category. This repository is the daily
public catalog snapshot of **[OpenFree](https://openfree.tools)**, with English
and Chinese project information maintained together.

**130 projects · 80 subcategories · Synced daily**

Browse the categories below, visit a project page for the full review, or use the
[machine-readable dataset](data/dataset.json) in your own tools. Projects may
appear in several categories; the project count counts each project once.

## Categories

- [Assistants &amp; Productivity](#category-assistants-productivity)
  - [Chat Interfaces](#category-chat-interfaces)
  - [Personal &amp; Desktop Assistants](#category-personal-desktop-assistants)
  - [Meeting Assistants &amp; Notes](#category-meeting-assistants-notes)
  - [Transcription &amp; Dictation](#category-transcription-dictation)
  - [Search &amp; Answer Engines](#category-search-answer-engines)
  - [Deep Research](#category-deep-research)
  - [Writing &amp; Knowledge Work](#category-writing-knowledge)
- [Generative Media &amp; Design](#category-generative-media-design)
  - [Image Generation &amp; Workflows](#category-image-generation-workflows)
  - [Image Editing &amp; Enhancement](#category-image-editing-enhancement)
  - [Video Generation](#category-video-generation)
  - [Video Editing &amp; Animation](#category-video-editing-animation)
  - [Speech &amp; Voice Generation](#category-speech-voice-generation)
  - [Music &amp; Audio Generation](#category-music-audio-generation)
  - [3D Generation &amp; Design](#category-3d-generation-design)
  - [Avatars &amp; Digital Humans](#category-avatars-digital-humans)
- [Coding &amp; Developer Tools](#category-ai-coding-developer-tools)
  - [Code Assistants &amp; Editors](#category-code-assistants-editors)
  - [Coding Agents](#category-coding-agents)
  - [App &amp; UI Generation](#category-app-ui-generation)
  - [Code Review](#category-code-review)
  - [Test Generation &amp; QA](#category-test-generation-qa)
  - [Debugging &amp; Program Repair](#category-debugging-program-repair)
  - [Code Search &amp; Understanding](#category-code-search-understanding)
  - [Coding Harnesses &amp; CLI Runtimes](#category-coding-harnesses-cli-runtimes)
- [Agents &amp; Automation](#category-agents-automation)
  - [Agent Frameworks](#category-agent-frameworks)
  - [Multi-Agent Systems](#category-multi-agent-systems)
  - [Agent Builders &amp; Studios](#category-agent-builders-studios)
  - [Browser Agents](#category-browser-agents)
  - [Computer Use &amp; GUI Agents](#category-computer-use-gui-agents)
  - [Workflow Automation](#category-workflow-automation)
  - [Voice Agents](#category-voice-agents)
- [Agent Infrastructure](#category-agent-infrastructure-protocols)
  - [MCP Servers &amp; Tool Connectors](#category-mcp-servers-tool-connectors)
  - [Agent Memory](#category-agent-memory)
  - [Context Management](#category-context-management)
  - [Agent SDKs &amp; Runtimes](#category-agent-sdks-runtimes)
  - [Sandboxes &amp; Code Execution](#category-sandboxes-code-execution)
  - [Agent Skills &amp; Tool Libraries](#category-agent-skills-tool-libraries)
  - [Agent Communication Protocols](#category-agent-communication-protocols)
- [Models &amp; Inference](#category-models-inference)
  - [Language Models](#category-language-models)
  - [Multimodal Models](#category-multimodal-models)
  - [Embedding Models](#category-embedding-models)
  - [Rerankers](#category-rerankers)
  - [Local Model Runners](#category-local-model-runners)
  - [Inference Servers &amp; APIs](#category-inference-servers-apis)
  - [Quantization &amp; Acceleration](#category-quantization-acceleration)
- [Frameworks &amp; RAG](#category-frameworks-rag)
  - [Application Frameworks](#category-application-frameworks)
  - [RAG Frameworks](#category-rag-frameworks)
  - [Knowledge Applications](#category-knowledge-applications)
  - [App UI &amp; SDKs](#category-app-ui-sdks)
  - [Model Gateways &amp; Routing](#category-model-gateways-routing)
  - [Prompting &amp; Structured Generation](#category-prompting-structured-generation)
- [Data &amp; Retrieval](#category-data-retrieval)
  - [Vector Databases](#category-vector-databases)
  - [Retrieval &amp; Search Engines](#category-retrieval-search-engines)
  - [Document Parsing &amp; OCR](#category-document-parsing-ocr)
  - [Web Scraping &amp; Extraction](#category-web-scraping-extraction)
  - [Knowledge Graphs &amp; GraphRAG](#category-knowledge-graphs-graphrag)
  - [Datasets, Labeling &amp; Data Quality](#category-datasets-labeling-data-quality)
- [Training &amp; MLOps](#category-training-mlops)
  - [Training &amp; Fine-Tuning](#category-training-fine-tuning)
  - [Distributed Training](#category-distributed-training)
  - [RL &amp; Preference Optimization](#category-rl-preference-optimization)
  - [Evaluation &amp; Benchmarks](#category-evaluation-benchmarks)
  - [Observability &amp; Tracing](#category-observability-tracing)
  - [Experiment Tracking &amp; Model Registry](#category-experiment-tracking-model-registry)
  - [Pipelines, Deployment &amp; Compute](#category-pipelines-deployment-compute)
- [Business &amp; Industry](#category-business-industry)
  - [Data Analysis &amp; Business Intelligence](#category-data-analysis-business-intelligence)
  - [Customer Support &amp; Service](#category-customer-support-service)
  - [Sales &amp; Marketing Automation](#category-sales-marketing-automation)
  - [Finance &amp; Investing](#category-finance-investing)
  - [Legal &amp; Compliance](#category-legal-compliance)
  - [Healthcare &amp; Medical](#category-healthcare-medical)
  - [Education &amp; Learning](#category-education-learning)
- [Vision &amp; Robotics](#category-vision-robotics-edge)
  - [Object Detection &amp; Tracking](#category-object-detection-tracking)
  - [Segmentation &amp; Image Understanding](#category-segmentation-image-understanding)
  - [Video Understanding](#category-video-understanding)
  - [Robotics &amp; Embodied Intelligence](#category-robotics-embodied-intelligence)
  - [Edge &amp; On-Device Inference](#category-edge-on-device-inference)
- [Security &amp; Privacy](#category-security-privacy)
  - [Security Testing &amp; Red Teaming](#category-security-testing-red-teaming)
  - [Guardrails &amp; Content Moderation](#category-guardrails-content-moderation)
  - [Privacy-Preserving Learning](#category-privacy-preserving-learning)
  - [Detection &amp; Content Provenance](#category-detection-content-provenance)
  - [Responsible AI &amp; Governance](#category-responsible-ai-governance)

<a id="category-assistants-productivity"></a>

## Assistants &amp; Productivity

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [VidBee](https://openfree.tools/vidbee) | Download videos and create searchable transcripts locally. | 10814 | MIT | TypeScript | — | [Website](https://vidbee.org/) · [GitHub](https://github.com/nexmoe/VidBee) |

<a id="category-chat-interfaces"></a>

### Chat Interfaces

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Open WebUI](https://openfree.tools/open-webui) | User-friendly AI interface for Ollama and OpenAI | 153204 | Other | Python | Yes | [Website](https://openwebui.com/) · [GitHub](https://github.com/open-webui/open-webui) |
| [Cherry Studio](https://openfree.tools/cherry-studio) | The All-in-One AI Workstation | 52157 | AGPL-3.0 | TypeScript | — | [Website](https://cherryai.com/) · [GitHub](https://github.com/CherryHQ/cherry-studio) |
| [OpenBot](https://openfree.tools/openbot) | The AI assistant your company can actually own. | 5626 | MIT | TypeScript | Yes | [Website](https://www.copilotkit.ai/openbot) · [GitHub](https://github.com/CopilotKit/OpenBot) |

<a id="category-personal-desktop-assistants"></a>

### Personal &amp; Desktop Assistants

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [OpenClaw](https://openfree.tools/openclaw) | The AI that really does things. | 390523 | Other | TypeScript | — | [Website](https://openclaw.ai/) · [GitHub](https://github.com/openclaw/openclaw) |
| [Inbox Zero](https://openfree.tools/inbox-zero) | Open-source AI email assistant to reach inbox zero fast | 12576 | Other | TypeScript | Yes | [Website](https://getinboxzero.com/) · [GitHub](https://github.com/elie222/inbox-zero) |

<a id="category-meeting-assistants-notes"></a>

### Meeting Assistants &amp; Notes

No published projects yet.

<a id="category-transcription-dictation"></a>

### Transcription &amp; Dictation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Whisper](https://openfree.tools/whisper) | General-purpose speech recognition model | 109610 | MIT | Python | — | [Website](https://github.com/openai/whisper) · [GitHub](https://github.com/openai/whisper) |
| [VideoLingo](https://openfree.tools/videolingo) | AI subtitle cutting, translation, alignment, and dubbing | 18742 | Apache-2.0 | Python | — | [Website](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |
| [VidBee](https://openfree.tools/vidbee) | Download videos and create searchable transcripts locally. | 10814 | MIT | TypeScript | — | [Website](https://vidbee.org/) · [GitHub](https://github.com/nexmoe/VidBee) |

<a id="category-search-answer-engines"></a>

### Search &amp; Answer Engines

No published projects yet.

<a id="category-deep-research"></a>

### Deep Research

No published projects yet.

<a id="category-writing-knowledge"></a>

### Writing &amp; Knowledge Work

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [WordCraft](https://openfree.tools/wordcraft) | Fast, open-source word processing, rebuilt in pure Rust. | 13797 | Apache-2.0 | Rust | — | [Website](https://github.com/storytold/wordcraft) · [GitHub](https://github.com/storytold/wordcraft) |

<a id="category-generative-media-design"></a>

## Generative Media &amp; Design

<a id="category-image-generation-workflows"></a>

### Image Generation &amp; Workflows

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [OpenDesign](https://openfree.tools/opendesign) | The open-source, local-first Claude Design alternative | 98286 | Apache-2.0 | TypeScript | — | [Website](https://open-design.ai/) · [GitHub](https://github.com/nexu-io/open-design) |
| [ArtCraft](https://openfree.tools/artcraft) | Open-source studio for controllable AI image and video. | 28932 | Apache-2.0 | Rust | — | [Website](https://github.com/storytold/artcraft) · [GitHub](https://github.com/storytold/artcraft) |
| [Ian Xiaohei Illustrations](https://openfree.tools/ian-xiaohei-illustrations) | Generate 16:9 Xiaohei illustrations for Chinese articles | 12428 | MIT | — | — | [Website](https://www.ianneo.xyz/) · [GitHub](https://github.com/helloianneo/ian-xiaohei-illustrations) |

<a id="category-image-editing-enhancement"></a>

### Image Editing &amp; Enhancement

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [PhotoCraft](https://openfree.tools/photocraft) | The open-source image editor you already know how to use. | 62721 | Apache-2.0 | Rust | — | [Website](https://github.com/storytold/photocraft) · [GitHub](https://github.com/storytold/photocraft) |

<a id="category-video-generation"></a>

### Video Generation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [HyperFrames](https://openfree.tools/hyperframes) | Write HTML. Render video. Built for agents. | 59243 | Apache-2.0 | TypeScript | — | [Website](https://hyperframes.dev/) · [GitHub](https://github.com/heygen-com/hyperframes) |

<a id="category-video-editing-animation"></a>

### Video Editing &amp; Animation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Recordly](https://openfree.tools/recordly) | Open-source screen recorder for polished demos | 33947 | Other | TypeScript | — | [Website](https://github.com/webadderallorg/Recordly) · [GitHub](https://github.com/webadderallorg/Recordly) |
| [VideoLingo](https://openfree.tools/videolingo) | AI subtitle cutting, translation, alignment, and dubbing | 18742 | Apache-2.0 | Python | — | [Website](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |

<a id="category-speech-voice-generation"></a>

### Speech &amp; Voice Generation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [VideoLingo](https://openfree.tools/videolingo) | AI subtitle cutting, translation, alignment, and dubbing | 18742 | Apache-2.0 | Python | — | [Website](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |

<a id="category-music-audio-generation"></a>

### Music &amp; Audio Generation

No published projects yet.

<a id="category-3d-generation-design"></a>

### 3D Generation &amp; Design

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Hunyuan3D](https://openfree.tools/hunyuan3d) | All-in-one AI creation platform for 3D content | 14969 | Other | Python | Yes | [Website](https://3d.hunyuan.tencent.com/) · [GitHub](https://github.com/Tencent-Hunyuan/Hunyuan3D-2) |

<a id="category-avatars-digital-humans"></a>

### Avatars &amp; Digital Humans

No published projects yet.

<a id="category-ai-coding-developer-tools"></a>

## Coding &amp; Developer Tools

<a id="category-code-assistants-editors"></a>

### Code Assistants &amp; Editors

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Claude Code](https://openfree.tools/claude-code) | Agentic coding tool for terminal, IDE, desktop, and browser. | 148305 | — | TypeScript | — | [Website](https://code.claude.com/docs/en/overview) · [GitHub](https://github.com/anthropics/claude-code) |
| [Zed](https://openfree.tools/zed) | Your last next editor | 90935 | Other | Rust | — | [Website](https://zed.dev/) · [GitHub](https://github.com/zed-industries/zed) |
| [Screenshot to Code](https://openfree.tools/screenshot-to-code) | Convert screenshots and designs into clean code | 79768 | MIT | Python | Yes | [Website](https://screenshottocode.com/) · [GitHub](https://github.com/abi/screenshot-to-code) |
| [Cline](https://openfree.tools/cline) | The open coding agent | 69343 | Apache-2.0 | TypeScript | — | [Website](https://cline.bot/) · [GitHub](https://github.com/cline/cline) |
| [Claude Code Plugins](https://openfree.tools/claude-plugins-official) | Official Anthropic-managed Claude Code plugin directory | 41033 | Apache-2.0 | Python | — | [Website](https://github.com/anthropics/claude-plugins-official) · [GitHub](https://github.com/anthropics/claude-plugins-official) |
| [omp](https://openfree.tools/omp) | A coding agent with the IDE wired in. | 33468 | MIT | TypeScript | — | [Website](https://omp.sh/) · [GitHub](https://github.com/can1357/oh-my-pi) |
| [Kilo Code](https://openfree.tools/kilo-code) | One open agent for every developer workflow | 27626 | MIT | TypeScript | — | [Website](https://kilo.ai/) · [GitHub](https://github.com/Kilo-Org/kilocode) |

<a id="category-coding-agents"></a>

### Coding Agents

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [ECC](https://openfree.tools/ecc) | Open-source skills and workflow tools for coding agents | 281545 | MIT | JavaScript | — | [Website](https://github.com/affaan-m/ECC) · [GitHub](https://github.com/affaan-m/ECC) |
| [OpenCode](https://openfree.tools/opencode) | The open source AI coding agent. | 210093 | MIT | TypeScript | — | [Website](https://opencode.ai/) · [GitHub](https://github.com/anomalyco/opencode) |
| [Codex](https://openfree.tools/codex) | Lightweight coding agent that runs in your terminal | 126520 | Apache-2.0 | Rust | — | [Website](https://github.com/openai/codex) · [GitHub](https://github.com/openai/codex) |
| [Caveman](https://openfree.tools/caveman) | Make AI agents say less and read less. | 113080 | Apache-2.0 | Go | — | [Website](https://github.com/JuliusBrussee/caveman) · [GitHub](https://github.com/JuliusBrussee/caveman) |
| [Orca](https://openfree.tools/orca) | Ship 100x with the agent IDE | 78471 | MIT | TypeScript | — | [Website](https://onorca.dev/) · [GitHub](https://github.com/stablyai/orca) |
| [Warp](https://openfree.tools/warp) | Open infrastructure for cloud software factories | 65181 | AGPL-3.0 | Rust | Yes | [Website](https://warp.dev/) · [GitHub](https://github.com/warpdotdev/warp) |
| [Open Code Review](https://openfree.tools/open-code-review) | AI code review agent with line-level precision | 47504 | Apache-2.0 | Go | Yes | [Website](https://github.com/alibaba/open-code-review) · [GitHub](https://github.com/alibaba/open-code-review) |
| [Codewhale](https://openfree.tools/codewhale) | Open-source coding agent that works with any model. | 41090 | MIT | Rust | Yes | [Website](https://github.com/codewhale-hq/Codewhale) · [GitHub](https://github.com/codewhale-hq/Codewhale) |
| [Grok Build](https://openfree.tools/grok-build) | SpaceXAI's coding agent harness and TUI | 27104 | Apache-2.0 | Rust | — | [Website](https://github.com/xai-org/grok-build) · [GitHub](https://github.com/xai-org/grok-build) |
| [Happy](https://openfree.tools/happy) | Remote control for Claude Code and Codex | 23923 | MIT | TypeScript | — | [Website](https://happy.engineering/) · [GitHub](https://github.com/slopus/happy) |
| [T3 Code](https://openfree.tools/t3-code) | The open-source control plane for coding agents. | 23583 | MIT | TypeScript | Yes | [Website](https://t3.codes/) · [GitHub](https://github.com/pingdotgg/t3code) |
| [Paseo](https://openfree.tools/paseo) | The control plane for coding agents | 18578 | Other | TypeScript | Yes | [Website](https://paseo.sh/) · [GitHub](https://github.com/getpaseo/paseo) |
| [magpie](https://openfree.tools/magpie) | Every agent's model. One place. | 3868 | MIT | Go | Yes | [Website](https://usemagpie.ai/) · [GitHub](https://github.com/yetone/magpie) |
| [Plannotator](https://openfree.tools/plannotator-2) | Plan and code review for your agents. | 3583 | MIT | HTML | — | [Website](https://plannotator.ai/) · [GitHub](https://github.com/plannotator/effective-html) |

<a id="category-app-ui-generation"></a>

### App &amp; UI Generation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [OpenUI](https://openfree.tools/openui) | Open Standard for Generative UI | 11357 | MIT | TypeScript | — | [Website](https://github.com/thesysdev/openui) · [GitHub](https://github.com/thesysdev/openui) |
| [Anatomy](https://openfree.tools/anatomy) | A Claude Code skill for live isometric machine figures | 1483 | MIT | JavaScript | — | [Website](https://skills.wheresryan.sh/anatomy) · [GitHub](https://github.com/wheresryan22/anatomy) |

<a id="category-code-review"></a>

### Code Review

No published projects yet.

<a id="category-test-generation-qa"></a>

### Test Generation &amp; QA

No published projects yet.

<a id="category-debugging-program-repair"></a>

### Debugging &amp; Program Repair

No published projects yet.

<a id="category-code-search-understanding"></a>

### Code Search &amp; Understanding

No published projects yet.

<a id="category-coding-harnesses-cli-runtimes"></a>

### Coding Harnesses &amp; CLI Runtimes

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [cf](https://openfree.tools/cf) | The agentic CLI for the entire Cloudflare API | 635 | Apache-2.0 | TypeScript | — | [Website](https://github.com/cloudflare/cf) · [GitHub](https://github.com/cloudflare/cf) |

<a id="category-agents-automation"></a>

## Agents &amp; Automation

<a id="category-agent-frameworks"></a>

### Agent Frameworks

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Superpowers](https://openfree.tools/superpowers) | Agentic skills framework and development methodology | 299648 | MIT | Shell | — | [Website](https://github.com/obra/superpowers) · [GitHub](https://github.com/obra/superpowers) |
| [Hermes Agent](https://openfree.tools/hermes-agent) | The agent that grows with you | 249012 | MIT | Python | — | [Website](https://hermes-agent.nousresearch.com/) · [GitHub](https://github.com/NousResearch/hermes-agent) |
| [DeepSeek Harness](https://openfree.tools/deepseek-harness) | Everything is a plugin. | 237503 | MIT | TypeScript | — | [Website](https://deepseek.com/harness) · [GitHub](https://github.com/deepseek-ai/deepseek-harness) |
| [Dify](https://openfree.tools/dify) | Open-source LLM app development platform | 157229 | Other | TypeScript | Yes | [Website](https://dify.ai/) · [GitHub](https://github.com/langgenius/dify) |
| [LangChain](https://openfree.tools/langchain) | The agent engineering platform. | 147077 | MIT | Python | — | [Website](https://docs.langchain.com/langchain/) · [GitHub](https://github.com/langchain-ai/langchain) |
| [pi](https://openfree.tools/pi) | AI agent toolkit | 109412 | MIT | TypeScript | — | [Website](https://github.com/earendil-works/pi) · [GitHub](https://github.com/earendil-works/pi) |
| [OpenHands](https://openfree.tools/openhands) | The open platform for agentic software development | 89177 | MIT | TypeScript | Yes | [Website](https://openhands.dev/) · [GitHub](https://github.com/OpenHands/OpenHands) |
| [Paperclip](https://openfree.tools/paperclip) | Manage a team of AI agents to run your business. | 85360 | MIT | TypeScript | Yes | [Website](https://paperclip.ing/) · [GitHub](https://github.com/paperclipai/paperclip) |
| [Ruflo](https://openfree.tools/ruflo) | An agent meta-harness for Claude Code and Codex. | 75627 | MIT | TypeScript | — | [Website](https://github.com/ruvnet/ruflo) · [GitHub](https://github.com/ruvnet/ruflo) |
| [Multica](https://openfree.tools/multica) | Agents that show up on the board. | 51359 | Other | Go | Yes | [Website](https://multica.ai/) · [GitHub](https://github.com/multica-ai/multica) |
| [AI Job Search](https://openfree.tools/ai-job-search) | The job search that runs on your machine. | 48560 | MIT | Python | — | [Website](https://github.com/MadsLorentzen/ai-job-search) · [GitHub](https://github.com/MadsLorentzen/ai-job-search) |
| [OpenHuman](https://openfree.tools/openhuman) | Open-source personal AI that runs on your laptop | 40139 | GPL-3.0 | Rust | Yes | [Website](https://tinyhumans.ai/openhuman) · [GitHub](https://github.com/tinyhumansai/openhuman) |
| [NanoClaw](https://openfree.tools/nanoclaw) | Your personal AI agent. Secure. Lightweight. Yours. | 30844 | MIT | TypeScript | Yes | [Website](https://nanoclaw.dev/) · [GitHub](https://github.com/nanocoai/nanoclaw) |
| [OpenAI Agents SDK](https://openfree.tools/openai-agents-sdk) | A lightweight, powerful framework for multi-agent workflows | 29703 | MIT | Python | — | [Website](https://openai.github.io/openai-agents-python/) · [GitHub](https://github.com/openai/openai-agents-python) |
| [Agent Development Kit (ADK)](https://openfree.tools/agent-development-kit-adk) | Open-source, code-first Python framework for AI agents | 21646 | Apache-2.0 | Python | — | [Website](https://google.github.io/adk-docs/) · [GitHub](https://github.com/google/adk-python) |
| [SWE-agent](https://openfree.tools/swe-agent) | Autonomous software engineering agent | 20408 | MIT | Python | — | [Website](https://swe-agent.com/) · [GitHub](https://github.com/SWE-agent/SWE-agent) |
| [Browser Harness](https://openfree.tools/browser-harness) | Self-healing browser agents built directly on CDP | 18143 | MIT | Python | — | [Website](https://browser-harness.com/) · [GitHub](https://github.com/browser-use/browser-harness) |
| [Harbor](https://openfree.tools/harbor) | Evaluate and optimize sandboxed agents and models. | 5637 | Apache-2.0 | Python | — | [Website](https://harborframework.com/) · [GitHub](https://github.com/harbor-framework/harbor) |
| [Octop](https://openfree.tools/octop) | A smarter, self-hosted, multi-user, multi-agent AI assistant | 5307 | MIT | Python | Yes | [Website](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/Octop) |
| [OpenDots](https://openfree.tools/opendots) | Always-on AI coworkers for text, calls and Slack | 422 | MIT | TypeScript | Yes | [Website](https://www.copilotkit.ai/opendots) · [GitHub](https://github.com/CopilotKit/OpenDots) |
| [Octop Harness](https://openfree.tools/octop-harness) | Production-grade agent runtime and self-hosted collaboration | 74 | MIT | Python | Yes | [Website](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-harness) |

<a id="category-multi-agent-systems"></a>

### Multi-Agent Systems

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [n8n](https://openfree.tools/n8n) | AI agents and workflows you can see and control | 206006 | Other | TypeScript | Yes | [Website](https://n8n.io/) · [GitHub](https://github.com/n8n-io/n8n) |
| [LobeHub](https://openfree.tools/lobehub) | Your Chief Agent Operator for 7×24 AI team operations | 82831 | Other | TypeScript | Yes | [Website](https://lobehub.com/) · [GitHub](https://github.com/lobehub/lobehub) |
| [cmux](https://openfree.tools/cmux) | Ghostty-based macOS terminal for coding agents | 28207 | Other | Swift | — | [Website](https://github.com/manaflow-ai/cmux) · [GitHub](https://github.com/manaflow-ai/cmux) |
| [OpenDots](https://openfree.tools/opendots) | Always-on AI coworkers for text, calls and Slack | 422 | MIT | TypeScript | Yes | [Website](https://www.copilotkit.ai/opendots) · [GitHub](https://github.com/CopilotKit/OpenDots) |

<a id="category-agent-builders-studios"></a>

### Agent Builders &amp; Studios

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [OpenMontage](https://openfree.tools/openmontage) | The open-source, agentic video production system | 61499 | AGPL-3.0 | Python | — | [Website](https://www.openmontage.video/) · [GitHub](https://github.com/calesthio/OpenMontage) |

<a id="category-browser-agents"></a>

### Browser Agents

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [agent-browser](https://openfree.tools/agent-browser) | Browser automation CLI for AI agents | 44128 | Apache-2.0 | Rust | — | [Website](https://github.com/vercel-labs/agent-browser) · [GitHub](https://github.com/vercel-labs/agent-browser) |
| [Lightpanda](https://openfree.tools/lightpanda) | Headless browser built for AI agents and automation. | 35578 | AGPL-3.0 | Zig | — | [Website](https://lightpanda.io/) · [GitHub](https://github.com/lightpanda-io/browser) |
| [ego lite](https://openfree.tools/ego-lite) | The fastest browser for AI agents to run browser automation | 16516 | MIT | JavaScript | — | [Website](https://lite.ego.app/) · [GitHub](https://github.com/citrolabs/ego-lite) |

<a id="category-computer-use-gui-agents"></a>

### Computer Use &amp; GUI Agents

No published projects yet.

<a id="category-workflow-automation"></a>

### Workflow Automation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [VideoLingo](https://openfree.tools/videolingo) | AI subtitle cutting, translation, alignment, and dubbing | 18742 | Apache-2.0 | Python | — | [Website](https://docs.videolingo.io/) · [GitHub](https://github.com/Huanshere/VideoLingo) |

<a id="category-voice-agents"></a>

### Voice Agents

No published projects yet.

<a id="category-agent-infrastructure-protocols"></a>

## Agent Infrastructure

<a id="category-mcp-servers-tool-connectors"></a>

### MCP Servers &amp; Tool Connectors

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [REA](https://openfree.tools/rea) | Reverse engineering, with your coding agent | 263487 | MIT | TypeScript | — | [Website](https://github.com/morluto/rea) · [GitHub](https://github.com/morluto/rea) |
| [Firecrawl](https://openfree.tools/firecrawl) | The web data API to search, scrape, and interact at scale. | 184846 | AGPL-3.0 | TypeScript | Yes | [Website](https://firecrawl.dev/) · [GitHub](https://github.com/firecrawl/firecrawl) |
| [Gemini CLI](https://openfree.tools/gemini-cli) | Gemini-powered AI agent in your terminal | 107165 | Apache-2.0 | TypeScript | — | [Website](https://geminicli.com/) · [GitHub](https://github.com/google-gemini/gemini-cli) |
| [Model Context Protocol](https://openfree.tools/model-context-protocol) | Open standard for connecting AI apps to external systems | 90603 | Other | TypeScript | — | [Website](https://modelcontextprotocol.io/) · [GitHub](https://github.com/modelcontextprotocol/servers) |
| [Crawl4AI](https://openfree.tools/crawl4ai) | Open-source web crawler for LLMs and AI agents | 84278 | Apache-2.0 | Python | Yes | [Website](https://crawl4ai.com/) · [GitHub](https://github.com/unclecode/crawl4ai) |
| [Chrome DevTools for agents](https://openfree.tools/chrome-devtools-mcp) | Live Chrome browser control for AI coding agents | 53706 | Apache-2.0 | TypeScript | — | [Website](https://github.com/ChromeDevTools/chrome-devtools-mcp) · [GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp) |
| [Cognee](https://openfree.tools/cognee) | Open-source memory platform for AI agents | 31032 | Apache-2.0 | Python | Yes | [Website](https://www.cognee.ai/) · [GitHub](https://github.com/topoteretes/cognee) |
| [QMD](https://openfree.tools/qmd) | On-device hybrid search for docs, notes, and knowledge bases | 30067 | MIT | TypeScript | — | [Website](https://github.com/tobi/qmd) · [GitHub](https://github.com/tobi/qmd) |
| [OpenWork](https://openfree.tools/openwork) | Your AI workspace. Without vendor lock-in. | 23733 | Other | TypeScript | Yes | [Website](https://openworklabs.com/) · [GitHub](https://github.com/different-ai/openwork) |
| [OpenSEO](https://openfree.tools/openseo) | Open source alternative to Semrush and Ahrefs | 23215 | MIT | TypeScript | Yes | [Website](https://openseo.so/) · [GitHub](https://github.com/every-app/open-seo) |
| [OpenWorker](https://openfree.tools/openworker) | AI that gets your everyday tasks done. | 18302 | MIT | Python | Yes | [Website](http://openworker.com/) · [GitHub](https://github.com/andrewyng/openworker) |
| [GenOffice](https://openfree.tools/genoffice) | Free, open-source AI office suite for desktop | 7947 | Apache-2.0 | TypeScript | — | [Website](https://genoffice.ai/) · [GitHub](https://github.com/genspark-ai/genoffice) |
| [treg](https://openfree.tools/treg) | OpenRouter for agent tools | 4815 | Other | Python | Yes | [Website](https://treg.to/?ref=javayhu-qsn8e) · [GitHub](https://github.com/superdesigndev/treg) |
| [HQBase](https://openfree.tools/hqbase) | AI-native shared email workspace on your Cloudflare account | 343 | AGPL-3.0 | TypeScript | Yes | [Website](https://hqbase.io/) · [GitHub](https://github.com/HQBase/hqbase) |
| [Octop Browser](https://openfree.tools/octop-browser) | Agent-first browser automation via direct CDP. | 39 | MIT | Python | — | [Website](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-browser) |

<a id="category-agent-memory"></a>

### Agent Memory

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Mem0](https://openfree.tools/mem0) | AI memory that persists across sessions and agents | 66005 | Apache-2.0 | Python | Yes | [Website](https://mem0.ai/) · [GitHub](https://github.com/mem0ai/mem0) |
| [Context Mode](https://openfree.tools/context-mode) | The control plane between coding agents and models. | 30248 | Other | TypeScript | — | [Website](https://github.com/mksglu/context-mode) · [GitHub](https://github.com/mksglu/context-mode) |
| [ai-memory](https://openfree.tools/ai-memory) | Long-term memory for AI coding agents | 9674 | MIT | Rust | Yes | [Website](https://github.com/akitaonrails/ai-memory) · [GitHub](https://github.com/akitaonrails/ai-memory) |
| [Hy-Memory](https://openfree.tools/hy-memory) | Dual-system cognitive memory for self-evolving LLM agents. | 306 | Other | Python | — | [Website](https://github.com/Tencent-Hunyuan/Hy-Memory) · [GitHub](https://github.com/Tencent-Hunyuan/Hy-Memory) |
| [Octop Memory](https://openfree.tools/octop-2) | Your intelligent partner that understands and grows with you | 59 | MIT | Python | Yes | [Website](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-memory) |

<a id="category-context-management"></a>

### Context Management

No published projects yet.

<a id="category-agent-sdks-runtimes"></a>

### Agent SDKs &amp; Runtimes

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Browser Use](https://openfree.tools/browser-use) | Agents that use the browser. | 116329 | MIT | Python | — | [Website](https://browser-use.com/) · [GitHub](https://github.com/browser-use/browser-use) |
| [HarnessRouter](https://openfree.tools/harnessrouter) | The unified interface for agent harnesses. | 2692 | Apache-2.0 | Python | Yes | [Website](https://harnessrouter.ai/) · [GitHub](https://github.com/HarnessRouter/harnessrouter) |
| [Octop Gateway](https://openfree.tools/octop-gateway) | Multi-platform IM channel bridge for AI agents and bots | 55 | MIT | Python | Yes | [Website](https://octop.cloud/) · [GitHub](https://github.com/TencentCloud/octop-gateway) |

<a id="category-sandboxes-code-execution"></a>

### Sandboxes &amp; Code Execution

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [SPACE](https://openfree.tools/space) | Sandboxed platform for agentic code execution | 867 | Apache-2.0 | Rust | Yes | [Website](https://github.com/perplexityai/SPACE) · [GitHub](https://github.com/perplexityai/SPACE) |

<a id="category-agent-skills-tool-libraries"></a>

### Agent Skills &amp; Tool Libraries

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Archify](https://openfree.tools/archify) | Turn any system, process, or plan into an interactive | 81911 | MIT | JavaScript | — | [Website](https://archify.si/) · [GitHub](https://github.com/tt-a1i/archify) |
| [HyperFrames](https://openfree.tools/hyperframes) | Write HTML. Render video. Built for agents. | 59243 | Apache-2.0 | TypeScript | — | [Website](https://hyperframes.dev/) · [GitHub](https://github.com/heygen-com/hyperframes) |
| [Marketing Skills](https://openfree.tools/marketing-skills) | AI agent skills for marketing tasks | 54024 | MIT | JavaScript | — | [Website](https://marketing-skills.com/) · [GitHub](https://github.com/coreyhaines31/marketingskills) |
| [CLI-Anything](https://openfree.tools/cli-anything) | Generate agent-native CLIs and let AI agents operate them | 53491 | Apache-2.0 | Python | — | [Website](https://github.com/HKUDS/CLI-Anything) · [GitHub](https://github.com/HKUDS/CLI-Anything) |
| [Guizang PPT Skill](https://openfree.tools/guizang-ppt-skill) | Generate web decks, images, and covers for AI agents. | 27581 | AGPL-3.0 | HTML | — | [Website](https://github.com/op7418/guizang-ppt-skill) · [GitHub](https://github.com/op7418/guizang-ppt-skill) |
| [baoyu-skills](https://openfree.tools/baoyu-skills) | AI Agent skills for daily work efficiency | 26439 | MIT | TypeScript | — | [Website](https://github.com/JimLiu/baoyu-skills) · [GitHub](https://github.com/JimLiu/baoyu-skills) |
| [Ian Xiaohei Illustrations](https://openfree.tools/ian-xiaohei-illustrations) | Generate 16:9 Xiaohei illustrations for Chinese articles | 12428 | MIT | — | — | [Website](https://www.ianneo.xyz/) · [GitHub](https://github.com/helloianneo/ian-xiaohei-illustrations) |
| [Android Skills](https://openfree.tools/skills) | AI-optimized modular instructions for Android development | 8255 | Apache-2.0 | Kotlin | — | [Website](https://github.com/android/skills) · [GitHub](https://github.com/android/skills) |
| [ASD-STE100 Skill](https://openfree.tools/asd-ste100-skill) | Rewrite ambiguous agent-facing English with ASD-STE100 rules | 4160 | MIT | Python | — | [Website](https://github.com/danyuchn/asd-ste100-skill) · [GitHub](https://github.com/danyuchn/asd-ste100-skill) |
| [Plannotator](https://openfree.tools/plannotator-2) | Plan and code review for your agents. | 3583 | MIT | HTML | — | [Website](https://plannotator.ai/) · [GitHub](https://github.com/plannotator/effective-html) |
| [engineering-review-board](https://openfree.tools/engineering-review-board) | Canonical local source for reusable AI agent skills | 0 | MIT | JavaScript | — | [Website](https://github.com/nledford/engineering-review-board) · [GitHub](https://github.com/nledford/engineering-review-board) |

<a id="category-agent-communication-protocols"></a>

### Agent Communication Protocols

No published projects yet.

<a id="category-models-inference"></a>

## Models &amp; Inference

<a id="category-language-models"></a>

### Language Models

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [llama.cpp](https://openfree.tools/llama-cpp) | LLM inference in C/C++ | 129536 | MIT | C++ | Yes | [Website](https://llama.app/) · [GitHub](https://github.com/ggml-org/llama.cpp) |
| [DeepSeek-V3](https://openfree.tools/deepseek-v3) | Mixture-of-Experts language model with 671B parameters | 104492 | MIT | Python | — | [Website](https://github.com/deepseek-ai/DeepSeek-V3) · [GitHub](https://github.com/deepseek-ai/DeepSeek-V3) |
| [Qwen3](https://openfree.tools/qwen3) | Large language model series by the Qwen team, Alibaba Cloud | 27655 | — | Python | — | [Website](https://github.com/QwenLM/Qwen3) · [GitHub](https://github.com/QwenLM/Qwen3) |
| [Qwen3-VL](https://openfree.tools/qwen3-vl) | Multimodal large language model series by Qwen team | 20000 | Apache-2.0 | Jupyter Notebook | — | [Website](https://github.com/QwenLM/Qwen3-VL) · [GitHub](https://github.com/QwenLM/Qwen3-VL) |

<a id="category-multimodal-models"></a>

### Multimodal Models

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [SGLang](https://openfree.tools/sglang) | High-performance LLM and multimodal model serving | 37237 | Apache-2.0 | Python | — | [Website](https://sglang.io/) · [GitHub](https://github.com/sgl-project/sglang) |

<a id="category-embedding-models"></a>

### Embedding Models

No published projects yet.

<a id="category-rerankers"></a>

### Rerankers

No published projects yet.

<a id="category-local-model-runners"></a>

### Local Model Runners

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [ollama](https://openfree.tools/ollama) | Start building with open models. | 181741 | MIT | Go | Yes | [Website](https://ollama.com/) · [GitHub](https://github.com/ollama/ollama) |

<a id="category-inference-servers-apis"></a>

### Inference Servers &amp; APIs

No published projects yet.

<a id="category-quantization-acceleration"></a>

### Quantization &amp; Acceleration

No published projects yet.

<a id="category-frameworks-rag"></a>

## Frameworks &amp; RAG

<a id="category-application-frameworks"></a>

### Application Frameworks

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [GDevelop](https://openfree.tools/gdevelop) | Open-source no-code engine for 2D, 3D and multiplayer games | 27621 | Other | JavaScript | — | [Website](https://github.com/4ian/GDevelop) · [GitHub](https://github.com/4ian/GDevelop) |
| [Void](https://openfree.tools/void) | Build with Vite. Deploy with Void. | 326 | MIT | TypeScript | Yes | [Website](https://github.com/voidzero-dev/void) · [GitHub](https://github.com/voidzero-dev/void) |

<a id="category-rag-frameworks"></a>

### RAG Frameworks

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [GraphRAG](https://openfree.tools/graphrag) | A modular graph-based Retrieval-Augmented Generation system | 36105 | MIT | Python | — | [Website](https://microsoft.github.io/graphrag/) · [GitHub](https://github.com/microsoft/graphrag) |

<a id="category-knowledge-applications"></a>

### Knowledge Applications

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Open Notebook](https://openfree.tools/open-notebook) | Take Control of Your Research, Privately | 39509 | MIT | TypeScript | Yes | [Website](https://www.open-notebook.ai/) · [GitHub](https://github.com/lfnovo/open-notebook) |
| [Tolaria](https://openfree.tools/tolaria) | A second brain for the AI era. Free forever. | 19906 | AGPL-3.0 | TypeScript | — | [Website](https://tolaria.md/) · [GitHub](https://github.com/refactoringhq/tolaria) |
| [OpenKnowledge](https://openfree.tools/openknowledge) | Beautiful, AI-native markdown editor | 4336 | GPL-3.0 | TypeScript | — | [Website](https://openknowledge.ai/) · [GitHub](https://github.com/inkeep/open-knowledge) |

<a id="category-app-ui-sdks"></a>

### App UI &amp; SDKs

No published projects yet.

<a id="category-model-gateways-routing"></a>

### Model Gateways &amp; Routing

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Helicone](https://openfree.tools/helicone) | AI Gateway and LLM observability platform | 6176 | Apache-2.0 | TypeScript | Yes | [Website](https://www.helicone.ai/) · [GitHub](https://github.com/Helicone/helicone) |

<a id="category-prompting-structured-generation"></a>

### Prompting &amp; Structured Generation

No published projects yet.

<a id="category-data-retrieval"></a>

## Data &amp; Retrieval

<a id="category-vector-databases"></a>

### Vector Databases

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [OpenViking](https://openfree.tools/openviking) | Open-source context database for AI agents | 38698 | AGPL-3.0 | Python | Yes | [Website](https://openviking.ai/) · [GitHub](https://github.com/volcengine/OpenViking) |
| [Qdrant](https://openfree.tools/qdrant) | High-performance vector database and vector search engine | 34831 | Apache-2.0 | Rust | Yes | [Website](https://qdrant.tech/) · [GitHub](https://github.com/qdrant/qdrant) |
| [Chroma](https://openfree.tools/chroma) | Open-source search infrastructure for AI | 29389 | Apache-2.0 | Rust | Yes | [Website](https://www.trychroma.com/) · [GitHub](https://github.com/chroma-core/chroma) |
| [XERJ](https://openfree.tools/xerj) | Search built for AI agents. | 6919 | Apache-2.0 | Rust | Yes | [Website](https://github.com/xerj-org/xerj) · [GitHub](https://github.com/xerj-org/xerj) |

<a id="category-retrieval-search-engines"></a>

### Retrieval &amp; Search Engines

No published projects yet.

<a id="category-document-parsing-ocr"></a>

### Document Parsing &amp; OCR

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [PaddleOCR](https://openfree.tools/paddleocr) | Global Leading OCR Toolkit &amp; Document AI Engine | 90227 | Apache-2.0 | Python | Yes | [Website](https://www.paddleocr.com/) · [GitHub](https://github.com/PaddlePaddle/PaddleOCR) |
| [anydoc](https://openfree.tools/anydoc) | Convert documents to GitHub-Flavored Markdown in Rust. | 22090 | MIT | Rust | — | [Website](https://firecrawl.github.io/anydoc/) · [GitHub](https://github.com/firecrawl/anydoc) |
| [@office-kit/xlsx](https://openfree.tools/office-kit-xlsx) | Read, edit, and write Excel files in TypeScript | 63 | MIT | TypeScript | — | [Website](https://office-kit.github.io/xlsx/) · [GitHub](https://github.com/office-kit/xlsx) |
| [@office-kit/pptx](https://openfree.tools/office-kit-pptx) | Read, edit, and write .pptx files in TypeScript | 25 | MIT | TypeScript | — | [Website](https://office-kit.github.io/pptx/) · [GitHub](https://github.com/office-kit/pptx) |
| [@office-kit/docx](https://openfree.tools/office-kit-docx) | Read, edit, and write Word documents in TypeScript | 9 | MIT | TypeScript | — | [Website](https://office-kit.github.io/docx/) · [GitHub](https://github.com/office-kit/docx) |

<a id="category-web-scraping-extraction"></a>

### Web Scraping &amp; Extraction

No published projects yet.

<a id="category-knowledge-graphs-graphrag"></a>

### Knowledge Graphs &amp; GraphRAG

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Marble Skill Taxonomy](https://openfree.tools/marble-skill-taxonomy) | Open taxonomy of primary learning topics and prerequisites | 5038 | ODbL-1.0 | JavaScript | — | [Website](https://github.com/withmarbleapp/os-taxonomy) · [GitHub](https://github.com/withmarbleapp/os-taxonomy) |

<a id="category-datasets-labeling-data-quality"></a>

### Datasets, Labeling &amp; Data Quality

No published projects yet.

<a id="category-training-mlops"></a>

## Training &amp; MLOps

<a id="category-training-fine-tuning"></a>

### Training &amp; Fine-Tuning

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Unsloth](https://openfree.tools/unsloth) | Open-source framework to run and train LLMs locally | 76800 | Apache-2.0 | Python | — | [Website](https://unsloth.ai/docs) · [GitHub](https://github.com/unslothai/unsloth) |

<a id="category-distributed-training"></a>

### Distributed Training

No published projects yet.

<a id="category-rl-preference-optimization"></a>

### RL &amp; Preference Optimization

No published projects yet.

<a id="category-evaluation-benchmarks"></a>

### Evaluation &amp; Benchmarks

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Langfuse](https://openfree.tools/langfuse) | Open Source Agent Evals &amp; Observability | 35056 | Other | TypeScript | Yes | [Website](https://langfuse.com/) · [GitHub](https://github.com/langfuse/langfuse) |

<a id="category-observability-tracing"></a>

### Observability &amp; Tracing

No published projects yet.

<a id="category-experiment-tracking-model-registry"></a>

### Experiment Tracking &amp; Model Registry

No published projects yet.

<a id="category-pipelines-deployment-compute"></a>

### Pipelines, Deployment &amp; Compute

No published projects yet.

<a id="category-business-industry"></a>

## Business &amp; Industry

<a id="category-data-analysis-business-intelligence"></a>

### Data Analysis &amp; Business Intelligence

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Scientific Agent Skills](https://openfree.tools/scientific-agent-skills) | Procedural knowledge library for scientific AI agents | 51833 | MIT | Python | — | [Website](https://github.com/K-Dense-AI/scientific-agent-skills) · [GitHub](https://github.com/K-Dense-AI/scientific-agent-skills) |
| [Rerun](https://openfree.tools/rerun) | The data layer for physical AI. From collection to training. | 11603 | Apache-2.0 | Rust | — | [Website](https://github.com/rerun-io/rerun) · [GitHub](https://github.com/rerun-io/rerun) |

<a id="category-customer-support-service"></a>

### Customer Support &amp; Service

No published projects yet.

<a id="category-sales-marketing-automation"></a>

### Sales &amp; Marketing Automation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [Marketing Skills](https://openfree.tools/marketing-skills) | AI agent skills for marketing tasks | 54024 | MIT | JavaScript | — | [Website](https://marketing-skills.com/) · [GitHub](https://github.com/coreyhaines31/marketingskills) |
| [Mailcheap](https://openfree.tools/mailcheap) | Self-hosted newsletters on Amazon SES | 499 | MIT | JavaScript | Yes | [Website](https://github.com/marclou/mailcheap) · [GitHub](https://github.com/marclou/mailcheap) |
| [SEO Skills](https://openfree.tools/seo-skills) | Open-source agent skills for SEO and product work | 155 | — | — | — | [Website](https://il.ly/skills) · [GitHub](https://github.com/Illyism/seo-skills) |

<a id="category-finance-investing"></a>

### Finance &amp; Investing

No published projects yet.

<a id="category-legal-compliance"></a>

### Legal &amp; Compliance

No published projects yet.

<a id="category-healthcare-medical"></a>

### Healthcare &amp; Medical

No published projects yet.

<a id="category-education-learning"></a>

### Education &amp; Learning

No published projects yet.

<a id="category-vision-robotics-edge"></a>

## Vision &amp; Robotics

<a id="category-object-detection-tracking"></a>

### Object Detection &amp; Tracking

No published projects yet.

<a id="category-segmentation-image-understanding"></a>

### Segmentation &amp; Image Understanding

No published projects yet.

<a id="category-video-understanding"></a>

### Video Understanding

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [VidBee](https://openfree.tools/vidbee) | Download videos and create searchable transcripts locally. | 10814 | MIT | TypeScript | — | [Website](https://vidbee.org/) · [GitHub](https://github.com/nexmoe/VidBee) |

<a id="category-robotics-embodied-intelligence"></a>

### Robotics &amp; Embodied Intelligence

No published projects yet.

<a id="category-edge-on-device-inference"></a>

### Edge &amp; On-Device Inference

No published projects yet.

<a id="category-security-privacy"></a>

## Security &amp; Privacy

<a id="category-security-testing-red-teaming"></a>

### Security Testing &amp; Red Teaming

No published projects yet.

<a id="category-guardrails-content-moderation"></a>

### Guardrails &amp; Content Moderation

| Project | Description | Stars | License | Language | Self-hosted | Links |
| --- | --- | ---: | --- | --- | --- | --- |
| [TrustGraph](https://openfree.tools/trustgraph) | Business meaning in the graph, authority in the runtime | 2811 | Apache-2.0 | Python | Yes | [Website](https://github.com/trustgraph-ai/trustgraph) · [GitHub](https://github.com/trustgraph-ai/trustgraph) |

<a id="category-privacy-preserving-learning"></a>

### Privacy-Preserving Learning

No published projects yet.

<a id="category-detection-content-provenance"></a>

### Detection &amp; Content Provenance

No published projects yet.

<a id="category-responsible-ai-governance"></a>

### Responsible AI &amp; Governance

No published projects yet.

## About this dataset

The snapshot includes all published catalog projects, every public category and
tag, category/tag relationships, bilingual editorial content, and available
repository metadata. Drafts, private submissions, and account information are
excluded. Missing metadata is shown as **—**; it is not inferred. Stars and
repository details reflect OpenFree's latest stored metadata, rather than live
GitHub counters. Chinese fields fall back to English when unavailable.

The [daily workflow](.github/workflows/sync.yml) requests OpenFree's authenticated
read-only API and regenerates both READMEs and the JSON snapshot together. It is
scheduled for **01:17 UTC / 09:17 Asia/Shanghai**; GitHub may delay scheduled runs.
Unchanged data creates no commit. A failed sync preserves the last committed
snapshot. Check [Actions](https://github.com/MkThingsHQ/openfree-tools-dataset/actions/workflows/sync.yml)
for the latest successful run and Git history for snapshot changes.

## Contributing

Submit a project or suggest a correction on [OpenFree](https://openfree.tools).
For automation issues, [open an issue](https://github.com/MkThingsHQ/openfree-tools-dataset/issues).
Read [CONTRIBUTING.md](CONTRIBUTING.md) before changing the generator or templates;
the README catalog and JSON snapshot are generated files.

## Licenses and attribution

Each listed project retains its own license; follow the project's repository for
license terms. Inclusion is not an endorsement or a change to that license.
Editorial content and metadata are sourced from [OpenFree](https://openfree.tools).
The automation code is available under the [MIT License](LICENSE); this code
license does not relicense project content, logos, or the catalog's editorial text.

Inspired by the category navigation in
[open-source-alternatives](https://github.com/piotrkulpinski/open-source-alternatives).
If this catalog helps you, star the repository and support the listed maintainers.

[Back to categories](#categories)

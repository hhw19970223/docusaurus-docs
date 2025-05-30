---
sidebar_position: 1
---

# 文档调研
---

## [Docusaurus](https://docusaurus.io/)

**简介**：
Docusaurus 是由 Meta（前 Facebook）开发的开源静态网站生成器，专注于文档网站建设，基于 React 和 Markdown，支持高度自定义。

**优势**：
- **开源免费**
- **React 插件生态丰富，可开发定制化需求**
- **内置国际化支持**
- **支持私有化部署**

**劣势**：
- **不支持API文档,没办法通过openapi.json文件生成API文档**
- **没有办法在线编辑，后期维护成本高** 

---

## [Mintlify](https://mintlify.com/docs)

**简介**：
Mintlify 是一个专注于为 SaaS 公司、API 提供商打造美观、易用文档的商业化平台，强调“像产品页面一样漂亮的文档”。

**优势**：
- **开箱即用,能够使用openapi.json文件生成API文档**
- **API 文档体验极佳**
- **支持 Markdown 编辑, 同时允许通过可视化界面管理内容，但是不能新增和删除**

**劣势**：
- **商业化产品, 核心功能需要付费订阅**
- **没有办法私有化部署, 需要托管在 Mintlify**
- **没办法修改文档布局，只能通过全局样式微调**

---

## [apidog](https://docs.apidog.com/)

**简介**：
apidog 主要面向接口调试和API文档管理，强调 "接口测试 + 文档生成 + 团队协作" 一体化。

**优势**：
- **接口调试+文档一体化**
- **支持在线编辑**
- **支持导入 Swagger/Postman 生成API文档**
- **界面直观，使用门槛低。**

**劣势**：
- **偏重 API 场景**
- **需要账号注册，数据托管在平台，安全敏感项目可能受限。**
- **界面设计偏实用，不如 Mintlify 那样美观。无法定制化设计**

---

# 总结对比

| 评估维度     | Docusaurus                  | Mintlify                    | apidog                       |
| ------------- | ----------------------------- | ---------------------------- | ----------------------------- |
| 开源/收费    | 开源免费                     | 商业收费（基础版免费）        | 免费基础版/部分功能收费        |
| 核心特点     | Markdown文档、React自定义     | 漂亮的API文档+分析功能         | API文档生成+接口调试            |
| 上手难度     | 中等（需开发基础）            | 低（即用即改）                | 很低（注册即用）                |
| 自定义程度   | 高                           | 中等                         | 中等                          |
| 适合对象     | 技术社区、开源项目            | 初创公司、SaaS平台             | API开发测试团队                |
| 美观程度     | 自定义可很美                  | 开箱即美观                   | 实用型，UI一般                  |

---

# 建议
- **如果需要极致自由度和开源控制权** ➔ 推荐使用 **Docusaurus**。
- **如果想快速拥有漂亮、可分析的API文档** ➔ 推荐使用 **Mintlify**。
- **如果项目以接口开发调试为主** ➔ 推荐使用 **apidog**。


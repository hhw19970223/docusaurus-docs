import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// https://docusaurus.io/zh-CN/docs/next/api/docusaurus-config

const config: Config = {
  title: 'My Site',
  /** 网站标语 */
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'http://zibird.com/',

  baseUrl: '/',

  /** 拥有这个仓库的 GitHub 用户或组织。 如果你不使用 docusaurus deploy 命令，就不需要这个字段。 */
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  /** GitHub 仓库的名称。 如果你不使用 docusaurus deploy 命令，就不需要这个字段。 */
  // projectName: 'docusaurus', // Usually your repo name.

  /** Docusaurus 在检测到无效链接时的行为。 'ignore' | 'log' | 'warn' | 'throw' */
  onBrokenLinks: 'throw',
  /** Docusaurus 在检测到无效 Markdown 链接时的行为 */
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
      locales: ['en', 'zh'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        'zh': {
          label: '中文',
          htmlLang: 'zh',
        },
      },
  },
  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: './docs',
          sidebarPath: './sidebars.ts',
          //在每一页文档的底部自动生成一个 "编辑此页面" 的链接。点击后可以直接跳转到 GitHub（或其他 git 仓库）中对应文档的源文件，方便协作者快速提出改动或 PR。
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // ❌ 禁用博客
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  clientModules: [require.resolve('./src/client-modules/routeModules.ts')],
  themeConfig: {
    giscus: {
      theme: 'preferred_color_scheme',
      darkTheme: 'transparent_dark',
      repo: 'hhw19970223/docusaurus-docs',
      repoId: 'R_kgDOOhCF_w',
      category: 'Q&A',
      categoryId: 'DIC_kwDOOhCF_84CpjFd'
    },
    docs: {
      /** 定义首选文档版本的浏览器持久性。 */
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: true,
      },
    },
    /** <meta property="og:image" content="https://your-docusaurus-site.example.com/img/docusaurus-social-card.jpg" data-rh="true"> */
    image: 'img/zibird.png',
    metadata: [{name: 'zibird', content: 'summary'}],
    /** 广告条 */
    announcementBar: {
      /** 任何能够唯一标识此信息的值。 */
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },

    navbar: {
      title: 'Zibird',
      logo: {
        alt: 'Zibird Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        // href: 'http://zibird.com/',
        // target: '_self',
        // width: 32,
        // height: 32,
        // className: 'custom-navbar-logo-class',
        // style: {border: 'solid red'},
      },
      /** 当用户向下滚动时，导航栏是否隐藏。 */
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'test1',
          label: 'Docs',
          // html: '<span>Docs</span>'
        },
        {
          /* 把这个项目的类型设置为侧边栏链接。 */
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'api',
          label: 'API',
          docsPluginId: 'api',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          // dropdownItemsAfter: [
          //   {
          //     to: 'https://my-site.com/help-us-translate',
          //     label: 'Help us translate',
          //   },
          // ],
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: { start: 'error-start', end: 'error-end' },
        },
      ],
    },

  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api', // 必须设置唯一 id
        path: './api',
        routeBasePath: 'api', // 访问路径：/api
        sidebarPath: './sidebars.ts', // 可以单独设置侧边栏
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
      },
    ]
  ],
};

export default config;

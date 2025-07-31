export const zhCnConfig = {
  label: '简体中文',
  lang: 'zh-cn',
  title: 'ITOC 百科',
  description: '官方 ITOC 百科',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh-cn/' },
      { text: '贡献', link: '/zh-cn/contributing/development' }
    ],

    sidebar: [
      {
        text: '世界生成',
        items: [
          { text: '原版', link: '/zh-cn/content/world-generation/vanilla' },
          { text: '纹理树', link: '/zh-cn/content/world-generation/pattern-tree' },
        ]
      },
      {
        text: '区块',
        items: [
          { text: 'LOD', link: '/zh-cn/content/chunks/LOD' },
          { text: '渲染', link: '/zh-cn/content/chunks/rendering' },
          { text: 'Multipass 生成', link: '/zh-cn/content/chunks/multipass' }
        ]
      },
      {
        text: '图形',
        items: [
          { text: '光照', link: '/zh-cn/content/graphics/lighting' }
        ]
      },
      {
        text: '贡献',
        items: [
          { text: '开发指南', link: '/zh-cn/contributing/development' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CLB-S/itoc-wiki' }
    ],

    // Chinese specific labels
    editLink: {
      pattern: 'https://github.com/your-org/itoc-wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },
    footer: {
      copyright: '版权所有 © 2025 CLB Studio'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short' as const,
        timeStyle: 'medium' as const
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
}

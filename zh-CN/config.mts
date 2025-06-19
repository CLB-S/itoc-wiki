export const zhCNConfig = {
  label: '简体中文',
  lang: 'zh-CN',
  title: 'ITOC 百科',
  description: '官方 ITOC 百科',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh-CN/' },
      { text: '贡献', link: '/zh-CN/contributing/development' }
    ],

    sidebar: [
      {
        text: '贡献',
        items: [
          { text: '开发指南', link: '/zh-CN/contributing/development' }
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

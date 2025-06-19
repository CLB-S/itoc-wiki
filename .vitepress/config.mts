import { defineConfig } from 'vitepress'
import { zhCNConfig } from '../zh-CN/config.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ITOC Wiki",
  description: "The Official ITOC Wiki",
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'ITOC Wiki',
      description: 'The Official ITOC Wiki',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Contributing', link: '/contributing/development' }
        ],

        sidebar: [
          {
            text: 'Contributing',
            items: [
              { text: 'Development', link: '/contributing/development' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/CLB-S/itoc-wiki' }
        ],

        // English specific labels
        editLink: {
          pattern: 'https://github.com/CLB-S/itoc-wiki/edit/main/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          copyright: 'Copyright © 2025 CLB Studio'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        langMenuLabel: 'Change language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    },
    
    'zh-CN': zhCNConfig
  }
})

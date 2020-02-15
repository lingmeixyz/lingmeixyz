module.exports = {
    title: 'lingmei.xyz',
    locales: { 
      '/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
       },
       '/zh/': {
        lang: 'zh-CN', 
       },
       '/jp/': {
        lang: 'ja-JP', 
       },
     },
    themeConfig: {
    search: false,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        algolia: {},
        nav: [
          { text: 'Home', link: '/', }
        ],
      },  
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '中文',
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '首页', link: '/zh/' }
        ],
      },
      '/jp/': {
        // 多语言下拉菜单的标题
        selectText: '言語',
        // 该语言在下拉菜单中的标签
        label: '日本語',
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: 'トップページ', link: '/jp/' }
        ],
      }
    }
  }
}
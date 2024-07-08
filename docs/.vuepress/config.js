module.exports = {
  title: '导航站',
  themeConfig: {
    sidebar: [
      {
        title: '常用工具',
        path: '/tools/',
        collapsable: false,
        children: [
          { title: '搜索引擎', path: '/tools/search-engines' },
          { title: '在线工具', path: '/tools/online-tools' },
        ]
      },
      {
        title: '学习资源',
        path: '/resources/',
        collapsable: false,
        children: [
          { title: '编程学习', path: '/resources/programming' },
          { title: '语言学习', path: '/resources/languages' },
        ]
      },
    ]
  },
  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top', '@vuepress/medium-zoom']
}

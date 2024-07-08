module.exports = {
  title: '导航站',
  description: '一个简单的导航站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '分类1', link: '/category1/' },
      { text: '分类2', link: '/category2/' },
      { text: '管理', link: '/admin/' }
    ],
    sidebar: {
      '/category1/': [
        '',
        'sites'
      ],
      '/category2/': [
        '',
        'sites'
      ]
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

module.exports = {
  title: 'MyNAV 导航站',
  description: '一个简单的导航站示例',
  themeConfig: {
    sidebar: {
      '/category1/': [
        '',
        'sites'  // 对应 category1/sites.md
      ],
      '/category2/': [
        '',
        'sites'  // 对应 category2/sites.md
      ],
      '/admin/': [
        ''
      ]
    }
  }
}

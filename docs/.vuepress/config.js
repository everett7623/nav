module.exports = {
  title: '导航站',
  themeConfig: {
    sidebar: [
      {
        title: '分类1',
        children: [
          '/category1/site1',
          '/category1/site2',
        ]
      },
      {
        title: '分类2',
        children: [
          '/category2/site1',
          '/category2/site2',
        ]
      },
    ]
  }
}

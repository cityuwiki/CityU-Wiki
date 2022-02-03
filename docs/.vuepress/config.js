module.exports = {
  lang: 'zh-CN',
  title: 'CityU Wiki',
  description: 'A comprehensive guide for CityU',
  head: [['link', { rel: 'icon', href: '/images/logo-dark.svg' }]],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'images/logo.svg',
    logoDark: 'images/logo-dark.svg',

    navbar: [
      {
        text: '开始阅读',
        children: [
          {
            text: '个人申请总结',
            link: '/grad-application/college-of-engineering/README.md',
          },
          {
            text: '海外项目',
            link: '/oversea/two-plus-two/README.md',
          },
          {
            text: '实习分享',
            link: '/internship/it/README.md',
          },
          {
            text: '科研',
            link: '/research/on-campus/README.md',
          },
          {
            text: '转专业与多主修辅修',
            link: '/major-minor/change-major/README.md',
          },
          {
            text: '奖学金申请',
            link: '/scholarship/on-campus/README.md',
          },
          {
            text: '语言学习',
            link: '/language/gre/README.md',
          },
          {
            text: '其他',
            link: '/others/README.md',
          },
        ],
      },
      { text: '最近更新', link: '/update' },
      { text: '贡献指南', link: '/contributing/' },
      { text: '意见反馈', link: '/feedback/' },
      { text: '鸣谢名单', link: '/acknowledgements/' },
    ],
    sidebar: [
      {
        text: '个人申请总结',
        collapsible: true,
        children: [
          {
            text: '工学院',
            link: '/grad-application/college-of-engineering/',
            children: [],
          },
          {
            text: '商学院',
            link: '/grad-application/college-of-business/',
            children: [],
          },
          {
            text: '理学院',
            link: '/grad-application/college-of-science/',
            children: [],
          },
          {
            text: '人文社会科学院',
            link: '/grad-application/college-of-liberal-arts-and-social-sciences/',
            children: [],
          },
          {
            text: '创意媒体学院',
            link: '/grad-application/school-of-creative-media/',
            children: [],
          },
          {
            text: '赛马会动物医学及生命科学院',
            link: '/grad-application/veterinary-medicine-life-sciences/',
            children: [],
          },
          {
            text: '数据科学学院',
            link: '/grad-application/school-of-data-science/',
            children: [],
          },
          {
            text: '法律学院',
            link: '/grad-application/school-of-law/',
            children: [],
          },
        ],
      },
      {
        text: '海外项目',
        collapsible: true,
        children: [
          {
            text: '2+2',
            link: '/oversea/two-plus-two/',
            children: [],
          },
          {
            text: '交换与暑校',
            link: '/oversea/exchange/',
            children: [],
          },
          {
            text: '转学',
            link: '/oversea/transfer/',
            children: [],
          },
        ],
      },
      {
        text: '实习分享',
        collapsible: true,
        children: [
          {
            text: '互联网',
            link: '/internship/it/',
            children: [],
          },
          {
            text: '金融',
            link: '/internship/finance/',
            children: [],
          },
          {
            text: '校内兼职',
            link: '/internship/campus/',
            children: [],
          },
        ],
      },
      {
        text: '科研',
        collapsible: true,
        children: [
          {
            text: '校内',
            link: '/research/on-campus/',
            children: [],
          },
          {
            text: '暑研',
            link: '/research/summer/',
            children: [],
          },
        ],
      },
      {
        text: '转专业与多主修辅修',
        collapsible: true,
        children: [
          {
            text: '转专业',
            link: '/major-minor/change-major/',
            children: [],
          },
          {
            text: '多主修辅修',
            link: '/major-minor/multi-major-minor/',
            children: [],
          },
        ],
      },
      {
        text: '奖学金申请',
        collapsible: true,
        children: [
          {
            text: '校内奖学金',
            link: '/scholarship/on-campus/',
            children: [],
          },
          {
            text: '外部奖学金',
            link: '/scholarship/off-campus/',
            children: [],
          },
        ],
      },
      {
        text: '语言学习',
        collapsible: true,
        children: [
          {
            text: 'GRE',
            link: '/language/gre/',
            children: [],
          },
          {
            text: 'TOEFL',
            link: '/language/toefl/',
            children: [],
          },
          {
            text: 'IELTS',
            link: '/language/ielts/',
            children: [],
          },
          {
            text: '粤语',
            link: '/language/cantonese/',
            children: [],
          },
        ],
      },
      {
        text: '其他',
        collapsible: true,
        children: ['/others/'],
      },
    ],
    sidebarDepth: 3,
    repo: 'https://github.com/FyisFe/CityU-Wiki',
    notFound: [
      '看起来我们迷路了',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-K194THLEF0',
      },
    ],
  ],
};

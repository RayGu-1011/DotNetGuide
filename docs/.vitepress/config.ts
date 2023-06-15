import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DotNetGuide",
  description: "DotNetGuide",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    lastUpdatedText: '上次更新时间',
    nav: nav(),

    sidebar: {
      '/interview/': sidebarInterview(),
      '/about/': sidebarAbout()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarGuideX/DotNetGuide' }
    ],
    footer: {
      message: '津ICP备2023003698号',
      copyright: 'Copyright © 2023 DotNetGuide'
    },
    editLink: {
      pattern: 'https://github.com/StarGuideX/DotNetGuide/edit/main/docs/:path',
      text: '在GitHub上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})

function nav() {
  return [
    { text: '主页', link: '/' },
    { text: '面试指南', link: '/interview/index' },
    { text: '关于网站', link: '/about/index' }
  ]
}

function sidebarInterview() {
  return [
    {
      text: '面试突破',
      items: [
        { text: '阅读指引',link: '/interview/index' },
        { 
          text: 'C#基础',
          collapsed: true,
          items: [
            { text: 'C# 基础面试题（一）', link: '/interview/csharp/questions_1' },
            { text: 'C# 基础面试题（二）', link: '/interview/csharp/questions_2' },
            { text: 'C# 基础面试题（三）', link: '/interview/csharp/questions_3' },
          ],
        },
        { 
          text: 'ASP.NET Core',
          collapsed: true,
          items: [
            { text: 'ASP.NET Core面试题（一）', link: '/interview/asp/questions_1' },
            { text: 'ASP.NET Core面试题（二）', link: '/interview/asp/questions_2' },
            { text: 'ASP.NET Core面试题（三）', link: '/interview/asp/questions_3' },
            {
              text: '新版本特性',
              items: [
                { text: 'ASP.NET Core 1.1 新特性', link: '/interview/asp/features/version_1_1' },
                { text: 'ASP.NET Core 2.0 新特性', link: '/interview/asp/features/version_2_0' },
                { text: 'ASP.NET Core 2.2 新特性', link: '/interview/asp/features/version_2_2' },
                { text: 'ASP.NET Core 3.0 新特性', link: '/interview/asp/features/version_3_0' },
                { text: 'ASP.NET Core 3.1 新特性', link: '/interview/asp/features/version_3_1' },
                { text: 'ASP.NET Core 5.0 新特性', link: '/interview/asp/features/version_5_0' },
                { text: 'ASP.NET Core 6.0 新特性', link: '/interview/asp/features/version_6_0' },
                { text: 'ASP.NET Core 7.0 新特性', link: '/interview/asp/features/version_7_0' },
              ],
              collapsed: true
            }
          ]
        },
        {
          text: '数据库',
          items: [
            { text: '数据库通用面试题（一）', link: '/interview/database/questions_1' },
            { 
              text: '基础知识',
              items: [
                { text: '数据库介绍', link: '/interview/database/foundation/index' },
                { text: '数据据范式讲解', link: '/interview/database/foundation/database_nf' },
              ],
              collapsed: true
            },
            { 
              text: 'MySQL',
              items: [
                { text: '面试题（基础篇一）', link: '/interview/database/mysql/questions_1' },
                { text: '面试题（基础篇二）', link: '/interview/database/mysql/questions_2' },
                { text: '面试题（引擎&事务篇）', link: '/interview/database/mysql/questions_3' },
                { text: '面试题（索引篇）', link: '/interview/database/mysql/questions_4' },
                { 
                  text: '核心知识', 
                  items: [
                    { text: '慢查询', link: '/interview/database/mysql/important/querylog' },
                  ],
                },
              ],
              collapsed: true 
            },
            { 
              text: 'Redis',
              items: [
                { 
                  text: '核心知识', 
                  items: [
                    { text: '五种常用数据类型', link: '/interview/database/redis/important/dataType_5' },
                    { text: '五种特殊数据类型', link: '/interview/database/redis/important/dataType_10' },
                    { text: '三种持久化策略', link: '/interview/database/redis/important/persistence' },
                    { text: '四种缓存更新策略', link: '/interview/database/redis/important/cache_update_strategy' },
                    { text: '内存淘汰及回收机制', link: '/interview/database/redis/important/memory_available' },
                    { text: '缓存击穿、穿透、雪崩', link: '/interview/database/redis/important/strike_through_avalanche' }, 
                    { text: '缓存预热、限流', link: '/interview/database/redis/important/preheat_limit' }, 
                  ],
                }
              ],
              collapsed: true 
            },
          ]
        }
      ]
    }
  ]
}

function sidebarAbout(){
  return [
    {
      text: '',
      items: [
        { text: '关于网站', link: '/about/index' },
        { text: '更新计划', link: '/about/plan' },
      ]
    }
  ]
}


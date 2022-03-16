import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-US',
    title: '全自動股票管理表',
    description: 'Just playing around',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        // navbar: [
        //     // NavbarItem
        //     {
        //         text: 'Foo',
        //         link: '/foo/',
        //     },
        //     // NavbarGroup
        //     {
        //         text: 'Group',
        //         children: ['/group/foo.md', '/group/bar.md'],
        //     },
        //     // 字符串 - 頁面文件路徑
        //     '/bar/README.md',
        // ],
        //導航欄
        navbar: [
            { text: 'Home', link: '/' },  //text:導航標題內容
            { text: 'TimeLine', link: '/timeline/' },
            {
                text: '指南',
                children: [
                    { text: '快速上手', link: '/StockProfolioDocs/' }  //item： 子導航
                ]
            },
            {
                text: '版本',
                children: [
                    { text: '台股免費版', link: '/StockProfolioDocs/' },
                    { text: '台股付費版', link: '/StockProfolioDocs/' },
                    { text: '美股付費版', link: '/StockProfolioDocs/' },
                    { text: '客製化版(含範例)', link: '/StockProfolioDocs/' },
                ]
            },
            {
                text: 'Contact',
                children: [
                    { text: 'GitHub', link: 'https://github.com/recoluan' }
                ]
            }
        ],
        // sidebar: 'auto',
        sidebar: {
            '/StockProfolioDocs/': [
                '/StockProfolioDocs/',
                '/StockProfolioDocs/Category_1/',
                {
                    text: '類別2',
                    collapsible: true,
                    link: '/StockProfolioDocs/Category_2/test1.md',
                    children: [
                        '/StockProfolioDocs/Category_2/test1.md',
                        '/StockProfolioDocs/Category_2/test2.md',
                    ]
                }
            ],
        }
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
    ],
})
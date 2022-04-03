import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    // lang: 'en-US',
    lang: 'zh-TW',
    title: '全自動股票管理表',
    description: 'Just playing around',
    base: '/MyBlog/',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        contributorsText:"作者",
        lastUpdatedText:"最後更新",
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
            {
                text: '指南',
                children: [
                    { text: '快速上手', link: '/StockProfolioDocs/QuickStart/介紹.md', activeMatch: '^/StockProfolioDocs/QuickStart/',  },
                    { text: '基本功能', link: '/StockProfolioDocs/Introduction/儀表板.md', activeMatch: '^/StockProfolioDocs/Introduction/',  },
                    { text: '進階功能', link: '/StockProfolioDocs/PayOnly/進階功能簡介.md', activeMatch: '^/StockProfolioDocs/PayOnly/', },
                ]
            },
            {
                text: '版本',
                children: [
                    { text: '台股免費版', link: '/StockProfolioDocs/' },
                    { text: '台股付費版', link: '/StockProfolioDocs/' },
                    { text: '美股付費版', link: '/StockProfolioDocs/' },
                    { text: '客製化(含範例)', link: '/StockProfolioDocs/' },
                ]
            },
            {
                text: 'Contact',
                children: [
                    { text: '懶魚', link: '/' },
                    { text: 'Markdown語法', link: '/StockProfolioDocs/Introduction/Introduction0.md'},
                ]
            },
            { text: '贊助', link: 'https://payment.ecpay.com.tw/Broadcaster/Donate/C014318DF58EE9F80D220D97FB4FE5C8' },
        ],
        // sidebar: 'auto',
        sidebar: {
            '/StockProfolioDocs/': [
                // '/StockProfolioDocs/',
                // '/StockProfolioDocs/Introduction/',
                {
                    text: '快速上手',
                    collapsible: true,
                    children: [
                        '/StockProfolioDocs/QuickStart/介紹.md',
                        '/StockProfolioDocs/QuickStart/快速上手.md',
                    ]
                },
                {
                    text: '基本功能',
                    collapsible: true,
                    children: [
                        '/StockProfolioDocs/Introduction/儀表板.md',
                        '/StockProfolioDocs/Introduction/交易紀錄.md',
                        '/StockProfolioDocs/Introduction/持股&歷史損益.md',
                        '/StockProfolioDocs/Introduction/券商與分類.md',
                        '/StockProfolioDocs/Introduction/股票代號.md',
                    ]
                },
                {
                    text: '⭐進階功能',
                    collapsible: true,
                    // link: '/StockProfolioDocs/PayOnly/test1.md',
                    children: [
                        '/StockProfolioDocs/PayOnly/進階簡介.md',
                        '/StockProfolioDocs/PayOnly/購買.md',
                        '/StockProfolioDocs/PayOnly/功能.md',
                    ]
                },
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
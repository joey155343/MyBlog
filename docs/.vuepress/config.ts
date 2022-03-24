import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
// import { GoogleFontsPlugin  } from "google-fonts-webpack-plugin"
// const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    // lang: 'en-US',
    lang: 'zh-TW',
    title: '全自動股票管理表',
    description: 'Just playing around',

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
                    { text: '快速上手', link: '/StockProfolioDocs/README.md', },  //item： 子導航
                    { text: '基本功能介紹', link: '/StockProfolioDocs/Introduction/Introduction1.md', activeMatch: '^/StockProfolioDocs/Introduction/',  },
                    { text: '收費版限定功能', link: '/StockProfolioDocs/PayOnly/test1.md', activeMatch: '^/StockProfolioDocs/PayOnly/', },
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
                // '/StockProfolioDocs/Introduction/',
                {
                    text: '基本功能',
                    collapsible: true,
                    children: [
                        '/StockProfolioDocs/Introduction/Introduction1.md',
                        '/StockProfolioDocs/Introduction/Introduction2.md',
                    ]
                },
                {
                    text: '進階功能',
                    collapsible: true,
                    // link: '/StockProfolioDocs/PayOnly/test1.md',
                    children: [
                        '/StockProfolioDocs/PayOnly/test1.md',
                        '/StockProfolioDocs/PayOnly/test2.md',
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
        // [
        //     new GoogleFontsPlugin({
        //         fonts: [
        //             { family: "Source Sans Pro" }
        //         ]
        //     })
        // ],
    ],
})
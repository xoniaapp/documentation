import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
    theme: "vt",
    title: "Xonia",
    themeConfig: {
        enableDarkMode: true,
        repo: "https://raw.githubusercontent.com/xoniaapp/app/main/logo.png",
        logo: "/logo.svg",
        nav: [
            {
                text: "Website", link: "https://app.xoniaapp.com/"
            },
        ],
        sidebar: {
            "/docs/": [
                {
                    title: "Overview",
                    collapsable: false,
                    children: [
                        "/docs/",
                        "/docs/getting-started"
                    ],
                },
                {
                    title: "Contact",
                    collapsable: false,
                    children: [
                        ['https://xoniaapp.com/support', 'Helpdesk'],
                    ],
                },
            ],
        },
        codeSwitcher: {
            groups: {
                default: {
                    ts: 'TypeScript',
                    js: 'JavaScript',
                    go: 'Golang',
                    rs: 'Rust',
                },
                'plugin-usage': { tuple: 'Tuple', object: 'Object' },
            }
        }
    },
}));

module.exports = {
	title: "Vocabulary",
    description: "Han Han 背單字",
    base: "/Vocabulary/",
    plugins: [
        "@vuepress/back-to-top",
    ],
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Category", link: "/categories/" },
            { text: "Author's Github", link: "https://github.com/saberLiou", target:'_blank' },
        ],
        sidebar: {
            "/categories/": [
                "",
                "root",
                "prefix",
                "postfix"
            ]
        }
    }
}
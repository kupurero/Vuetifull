const path = require("path")
const packageConfig = require("../package.json")
const chalk = require("chalk")
const merge = require("webpack-merge");
const baseConfig = require("../build/webpack.base.conf.js")

module.exports = {
    /**
     * Name of your design system. Changes both page title and sidebar logo.
     */
    title: "Vuetifull",
    /**
     * Most of the styles are defined in /docs/docs.styles.scss
     */
    version: packageConfig.version,
    theme: {
        maxWidth: "100%",
        sidebarWidth: 240,
        fontFamily: {
            base: ["'Arial'", "Helvetica", "Arial", "sans-serif"],
            monospace: ["Consolas", "'Liberation Mono'", "Menlo", "monospace"],
        },
    },
    /**
     * Disabled props sorting
     */
    sortProps: props => props,
    /**
     * Path to static assets directory
     */
    assetsDir: path.join(__dirname, "../src/assets"),
    /**
     * Enabling the below option will break things in Vuetifull!
     */
    skipComponentsWithoutExample: false,
    /**
     * We’re defining below JS and SCSS requires for the documentation.
     */
    require: [
        path.join(__dirname, "../docs/docs.helpers.js"),
		path.join(__dirname, "../docs/docs.styles.scss"),
    ],
    /**
     * Enabling the following option splits sections into separate views.
     */
    pagePerSection: true,
    sections: [{
        name: "Getting Started",
        content: "../docs/started.md",
        sectionDepth: 1,
        exampleMode: "hide",
        usageMode: "hide",
    }, {
        name: "Design Tokens",
        content: "../docs/tokens.md",
        sectionDepth: 1,
        exampleMode: "hide",
        usageMode: "hide",
        components: "../docs/components/tokens/**.vue",
    }, {
        name: "UI Elements",
        content: "../docs/elements.md",
        components: "../src/components/**/index.vue",
        exampleMode: "expand",
        usageMode: "expand",
        sectionDepth: 2,
    }, {
        /**
         * Private components have to be loaded into the documentation as well,
         * otherwise anything using them will be broken. We’re loading them in
         * their own section, which then gets hidden in docs/docs.styles.scss
         */
        name: "Private Components",
        exampleMode: "hide",
        usageMode: "hide",
        components: () => [
            "../src/components/**/child.vue",
            "../docs/components/status/components.vue"
        ],
    }],
    template: {
        title: "Vuetifull",
        lang: "en",
        trimWhitespace: true,
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1.0",
                }, {
                    name: "format-detection",
                    content: "telephone=no",
                },
            ],
        },
    },
    ignore: [
        "**/__tests__/**",
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.spec.js",
        "**/*.spec.jsx",
    ],
    webpackConfig: merge(baseConfig, {
        module: {
            rules: [{
                test: /\.(css?|scss|sass)(\?.*)?$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader", {
                    loader: "sass-resources-loader",
                    options: {
                        resources: [path.join(__dirname, "../src/assets/tokens/tokens.scss")],
                    }
                }]
            }]
        }
    }),
    styleguideDir: "../dist/docs",
    printServerInstructions() {},
    printBuildInstructions(config) {
        console.log(chalk.cyan("\n  Design System Docs build finished succesfully!\n"))
        console.log(chalk.yellow(
            "  Tip: You can now deploy the docs as a static website.\n" +
            "  Copy the build files from " +
            `${config.styleguideDir}\n`
        ))
    },
}

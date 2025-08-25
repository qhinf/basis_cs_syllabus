const { build, context } = require("esbuild")
const { copy } = require("esbuild-plugin-copy")
const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")

const entryPoints = [
    "src/*.html",
    "src/*.tldrev",
    "src/*.md",
    "src/index.ts"
]

// Load substitutions from _config.yml
function getSubstitutions() {
    const extConfigPath = path.resolve(__dirname, "../syllabus/_config_ext.yml")
    const baseConfigPath = path.resolve(__dirname, "../syllabus/_config.yml")
    let configPath
    if (fs.existsSync(extConfigPath)) {
        configPath = extConfigPath
    } else {
        configPath = baseConfigPath
    }
    const config = yaml.load(fs.readFileSync(configPath, "utf8"))
    return (
        config?.sphinx?.config?.myst_substitutions
        || {}
    )
}

// esbuild plugin for .md and .html substitution
function mdHtmlSubstitutionPlugin() {
    return {
        name: "md-html-substitution",
        setup(build) {
            const substitutions = getSubstitutions()
            build.onLoad({ filter: /\.(md|html)$/ }, async (args) => {
                let content = await fs.promises.readFile(args.path, "utf8")
                const warnings = []
                // Find all {{ key }} occurrences and substitute
                const regex = /{{\s*(\w+)\s*}}/g
                let match
                let newContent = ""
                let lastIndex = 0
                while ((match = regex.exec(content)) !== null) {
                    const [fullMatch, key] = match
                    const start = match.index
                    const end = regex.lastIndex
                    // Add content before match
                    newContent += content.slice(lastIndex, start)
                    if (substitutions[key] === undefined) {
                        // Find line/column for warning
                        const before = content.slice(0, start)
                        const lines = before.split("\n")
                        const lineNum = lines.length
                        const lineText = lines[lines.length - 1] + content.slice(start, end)
                        const colNum = Buffer.byteLength(lines[lines.length - 1], "utf8")
                        warnings.push({
                            text: `Substitution key '${key}' not found in myst_substitutions`,
                            location: {
                                file: args.path,
                                namespace: "file",
                                line: lineNum,
                                column: colNum,
                                length: Buffer.byteLength(fullMatch, "utf8"),
                                lineText
                            }
                        })
                        newContent += fullMatch
                    } else {
                        newContent += substitutions[key]
                    }
                    lastIndex = end
                }
                newContent += content.slice(lastIndex)
                return {
                    contents: newContent,
                    loader: "copy",
                    warnings
                }
            })
        }
    }
}

function config(isProduction) {
    return {
        entryPoints,
        outdir: "dist",
        bundle: true,
        sourcemap: true,
        loader: {
            ".woff": "file",
            ".eot": "file",
            ".ttf": "file",
            ".html": "copy",
            ".tldrev": "copy",
            ".md": "copy"
        },
        plugins: [
            mdHtmlSubstitutionPlugin(),
            copy({
                assets: {
                    from: [ "./src/assets/**/*" ],
                    to: [ "./assets" ]
                }
            })
        ],
        define: {
            "process.env.NODE_ENV": isProduction ? "\"production\"" : "\"dev\"",
            "process.env.IS_PREACT": "\"false\""
        },
        logLevel: "info"
    }
}

switch (process.argv[2]) {
    case "serve":
        (async () => {
            const ctx = await context({
                ...config(false),
                inject: [ "live-reload.js" ]
            })
            await ctx.watch()
            await ctx.serve({
                servedir: "dist"
            })
        })()
        break;
    case "build":
        build({
            ...config(true),
            minify: true
        })
        break;
    default:
        console.warn("Specify either serve or build as an argument.")
        break;
}

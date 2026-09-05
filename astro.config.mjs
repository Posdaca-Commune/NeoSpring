import fs from "node:fs";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopics from "starlight-sidebar-topics";
import { sidebar } from "./src/sidebar/sidebar.ts";

export default defineConfig({
    integrations: [
        starlight({
            title: "NeoSpring",
            description: "P社模组制作文档",
            defaultLocale: "root",
            locales: {
                root: {
                    label: "简体中文",
                    lang: "zh-CN",
                },
            },
            expressiveCode: {
                themes: ["dracula", "github-light"],
                shiki: {
                    langs: [
                        JSON.parse(
                            fs.readFileSync("./src/code/pdx.grammar.json", "utf-8"),
                        ),
                    ],
                    langAlias: {
                        paradox_script: "pdx",
                        paradox_localisation: "pdx",
                        pdx_lang: "pdx",
                    },
                },
            },
            plugins: [starlightSidebarTopics(sidebar)],
        }),
    ],
});
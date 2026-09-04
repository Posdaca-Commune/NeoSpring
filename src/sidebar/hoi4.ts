export const hoi4Sidebar = [
    { label: "概览", link: "hoi4" },
    { label: "入门", link: "hoi4/start" },
    { label: "descriptor.mod", link: "hoi4/descriptor" },
    { label: "本体目录", link: "hoi4/folders" },
    {
        label: "common",
        items: [{ autogenerate: { directory: "hoi4/common" } }],
    },
    { label: "events", link: "hoi4/events" },
    {
        label: "history",
        items: [{ autogenerate: { directory: "hoi4/history" } }],
    },
    {
        label: "interface",
        items: [{ autogenerate: { directory: "hoi4/interface" } }],
    },
    { label: "localisation", link: "hoi4/localisation" },
    { label: "music", link: "hoi4/music" },
];
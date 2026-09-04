import { coreSidebar } from "./core";
import { hoi4Sidebar } from "./hoi4";

export const sidebar = [
    {
        id: "core",
        label: "核心",
        icon: "setting",
        link: "/core/",
        items: coreSidebar,
    },
    {
        id: "hoi4",
        label: "Hearts of Iron IV",
        icon: "open-book",
        link: "/hoi4/",
        items: hoi4Sidebar,
    },
];
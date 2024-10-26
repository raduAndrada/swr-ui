import { compileDeclareClassMetadata } from "@angular/compiler";

export interface MenuItem {
    name: string;
    link: string;
    icon?: string;
    tooltip?: string;
    submenu?: MenuItem[];
    subheading?: { name: string, link: string };
}


export const menuItems: MenuItem[] = [
    { name: `Acasa`, link: "/about" },
    { name: `Meniu`, link: "/menu", icon: "fa-book-open" },
    { name: `Catering`, link: "/catering" },
    { name: `Evenimente`, link: "/private-events" },
    { name: `Noutati`, link: "/trending", icon: "fa-timeline" },
    // { name: `Newsletter`, link: "/newsletter", icon: "fa-timeline" },

]


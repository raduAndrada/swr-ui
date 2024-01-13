export interface MenuItem {
    name: string;
    link?: string;
    icon?: string;
    tooltip?: string;
    submenu?: MenuItem[];
    subheading?: {name : string, link: string};
}


export const menuItems: MenuItem [] = [
    {name: "Our Menu", link: "/menu", icon: "fa-book-open"},
    {name: "Our Story", link: "/about"},
    {name: "Book your Gram expedience", link: "/private-events", icon: "fa-calendar-check",
        submenu: [
            {name: "Catering"},
            {name: "Private party"}] },
    {name: "Trending", link: "/trending", icon: "fa-timeline"},
    {name: "Gallery", link: "/gallery", icon: "fa-images"},
    // {name: "Reservations", link: "/reservations"},

]
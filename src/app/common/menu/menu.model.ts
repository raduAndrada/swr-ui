export interface MenuItem {
    name: string;
    link: string;
    icon?: string;
    tooltip?: string;
    submenu?: MenuItem[];
    subheading?: {name : string, link: string};
}


export const menuItems: MenuItem [] = [
    {name: $localize`Our Menu`, link: "/menu", icon: "fa-book-open"},
    {name: $localize`Our Story`, link: "/about"},
    {name: $localize`Book your Gram expedience`, link: "/private-events", icon: "fa-calendar-check",
        submenu: [
            {name: $localize`Catering`, link: ""},
            {name: $localize`Private party`, link: ""}] },
    {name: $localize`Trending`, link: "/trending", icon: "fa-timeline"},
    {name: $localize`Gallery`, link: "/gallery", icon: "fa-images"},
    // {name: "Reservations", link: "/reservations"},

]
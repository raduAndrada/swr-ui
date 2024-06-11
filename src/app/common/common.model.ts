export interface Category {
    name : string;
    subcategories : Subcategory[] ; 
}

export interface Subcategory {
    name : string;
    menuItems : MenuItem[] ; 
}

export interface MenuItem {
    name : string;
    description : string; 
    price : string;
    quantity : string;
}

export interface ImageBlock {
    id: number;
    title: string;
    description: string;
    origin: string;
    additionalData: string; //JSON store anything else needed
    image: any;
    filename: string;
    contentType: string;
}

export interface ContactData {
    location: { address: string; googleLink: string };
    phoneNumber: string;
    email?: string;
    openHours: string[];
}


export interface SocialLink {
    link: string;
    name: string;
    color?: string;
}


export interface SearchResponse<T> {
    data: Page<T>
}

export interface Page<T> {
    content: T[];

    totalElements: number;
    totalPages: number;
    size: number;
    number: number;

    last: boolean;
    first: boolean;

    empty: boolean;
}
export interface SearchRequest<T> {
    offset: number;
    size: number;
    sortBy: string;
    orderBy: string;
    filterOptions: T;
}


export const social_links: SocialLink[] = [
    { link: "https://www.instagram.com/bistro__gram/", name: "fab fa-instagram", color: "#ac2bac" },
    { link: "https://www.facebook.com/BistroGramCluj", name: "fab fa-facebook", color: "#3b5998" },
    // { link: "", name: "fab fa-twitter", color: "#55acee" },
    { link: "https://www.tiktok.com/@gram.bistrobrunch?_t=8mpxmhXwhnt&_r=1", name: "fab fa-tiktok", color: "#1f2122" }
];
export const contact: ContactData = {
    location: {
        address: 'Alexandru Vaida Voevod 14A', googleLink: 'https://maps.app.goo.gl/eUMd2DnhLqL3SHjM6'
    },
    phoneNumber: '0730165163',
    openHours: [$localize`Mon-Fri: 09-22`, $localize`Sat: 10-22`, $localize`Sun: Closed`]
}

export interface DishCategory {
    name: string;
    subcategory: string;
    icon?: string
}

export interface ReservationConfirmation {
    name: string;
    email: string;
    partyType: string;
    tel: string;
    company: string;
    requestDate: string;
    noOfPeople: number;
    additionalInfo: string;
}

export const menuCategories
    = [
        { name: "Sandwiches", icon: "fa-bread-slice" },
        { name: "ToGo", icon: "fa-person-running" },
        { name: "Brunch", icon: "fa-bacon" },
        { name: "Drinks", icon: " fa-martini-glass" }
    ]
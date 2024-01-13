export enum Label {
    FISH,
    DAIRY,
    SUGAR_FREE,
    GLUTEN_FREE,
    VEGAN,
    VEGETARIAN,
    EGGS
}


export interface NutritionalValue {
    kcal: number;
    kj: number;
    values: Map<string, number>
    ingredients: Map<Ingredient, number>;
}


export interface Ingredient {
    shortName: string;
    longName: string;
    description: string;
    quantity: number;
    um: string;
    recipeName: string;
}

export interface Dish {
    name: string;
    ingredients: Ingredient[];
    price: number;
    nutritionalValue: NutritionalValue;
    labels: Label[];
    category: DishCategory;
    description: string;
    quantity: string;
}

export interface DishMenu {
    subcategoryMenu: DishWrapper[]
}

export interface Subcategory {
    category: DishCategory;
    icon: string;
    name: string;
}

export interface DishWrapper {
    subcategory: Subcategory;
    dishes: Dish[];
}


export interface Recipe {
    name: string;
    nutritionalValue: NutritionalValue;
    ingredients: Ingredient[];
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
    // { link: "", name: "fab fa-tiktok", color: "#1f2122" }
];
export const contact: ContactData = {
    location: {
        address: 'Alexandru Vaida Voevod 14A', googleLink: 'https://maps.app.goo.gl/eUMd2DnhLqL3SHjM6'
    },
    phoneNumber: '0730165163',
    openHours: ["Mon-Fri: 08-16", "Sat: 10-16", "Sun: Closed"]
}

export interface DishCategory {
    name: string;
    subcategory: string;
    icon?: string
}

export const menuCategories
    = [
        { name: "Sandwiches", icon: "fa-bread-slice" },
        { name: "ToGo", icon: "fa-person-running" },
        { name: "Brunch", icon: "fa-bacon" },
        { name: "Drinks", icon: " fa-martini-glass" }
    ]
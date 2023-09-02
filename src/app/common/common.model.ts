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
    values: Map<string,number>
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
    { link: "", name: "fab fa-instagram" },
    { link: "", name: "fab fa-facebook" },
    { link: "", name: "fab fa-twitter" },
    { link: "", name: "fab fa-tiktok" },
];



export const contact: ContactData = {
    location: {
        address: 'Alexandru Vaida Voevod 14A', googleLink: 'https://goo.gl/maps/KPKFiWMv4nCVJwHy6'
    },
    phoneNumber: '0732336978',
    openHours: ["Mon-Sat: 08-18", "Sun: Closed"]
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
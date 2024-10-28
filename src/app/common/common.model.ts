export interface Category {
    name: string;
    subcategories: Subcategory[];
}

export interface Subcategory {
    name: string;
    menuItems: MenuItem[];
    img: []
}

export interface MenuItem {
    name: string;
    description: string;
    price: string;
    quantity: string;
    img: string;
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

export const social_links: SocialLink[] = [
    { link: "https://www.instagram.com/bistro__gram/", name: "fab fa-instagram fa-xl", color: "#ac2bac" },
    { link: "https://www.facebook.com/BistroGramCluj", name: "fab fa-facebook fa-xl", color: "#3b5998" },
    // { link: "", name: "fab fa-twitter", color: "#55acee" },
    { link: "https://www.tiktok.com/@gram.bistrobrunch?_t=8mpxmhXwhnt&_r=1", name: "fab fa-tiktok fa-xl", color: "#1f2122" }
];
export const contact: ContactData = {
    location: {
        address: 'Alexandru Vaida Voevod 14A, Cluj-Napoca', googleLink: 'https://maps.app.goo.gl/eUMd2DnhLqL3SHjM6'
    },
    phoneNumber: '0730165163',
    openHours: [`Lun-Vin: 09-22`, `Sam: 10-22`, `Dum: Inchis`],
    email: 'rezervari@bistrogram.com'
}

export const eggs_benedict = {
    dishName: "Eggs Benedict-39ron",
    description: "Two poached eggs, bacon, English muffin, hollandaise sauce",
    img: "./assets/eggs-benedict.jpeg",
    imgAlt: "best eggs benedict"
}

export const foccacia = {
    dishName: "Foccacia cu mortadella-39ron",
    description: "Focaccia artizanala, pesto, mortadella, salsa de rosii, mozzarella bufala, ulei de masline",
    img: "./assets/foccacia.jpeg",
    imgAlt: "best foccacia"
}

export const pie_combo = {
    dishName: "COMBO:Placinta + Cafea-21ron",
    description: "Placinta dulce sau sarata + cafea la alegere",
    img: "./assets/pie.jpeg",
    imgAlt: "best pie"
}


export const daily_meal = {
    dishName: "Meniul zilei-39ron",
    description: "Format din supa zilei + preparatul zilei",
    img: "./assets/soup.jpeg",
    imgAlt: "best meal"
}

export const private_events_1 = {
    dishName: "Atmosfera",
    description: "Atmosfera perfecta pentru evenimentul tau. Ne place la nebunie sa iti servim mancarea care iti aduce zambetul de buze.",
    img: "./assets/private-events-1.jpeg",
    imgAlt: "best vibes"
}

export const private_events_2 = {
    dishName: "Mancarea",
    description: "Fiecare preparat este atent preparat si asezonat astfel incat sa iti aduca aminte de cele mai frumoase momente",
    img: "./assets/private-events-2.jpeg",
    imgAlt: "best food"
}

export const private_events_3 = {
    dishName: "Bautura",
    description: "Avem o gama variata de bauturi pentru toate gusturile. De la vinuri fine la cocktailuri speciale.",
    img: "./assets/wines-1.jpeg",
    imgAlt: "best wine"
}

export const catering_1 = {
    dishName: "Sandwich boxes",
    description: "",
    img: "./assets/catering-1.jpeg",
    imgAlt: "best catering"
}

export const coffee =
    { img: "assets/coffee.jpeg", imgAlt: "best coffee" }


export const clients_top_picks = [
    eggs_benedict,
    foccacia
]


export const menu_carousel_1 = [
    eggs_benedict,
    foccacia,
    pie_combo,
    { img: "./assets/caesar.jpeg", imgAlt: "best caesar salad" },
    { img: "./assets/sandwich.jpeg", imgAlt: "best sandwich" },
    { img: "./assets/steak.jpeg", imgAlt: "best steak" }

]

export const menu_carousel_2 = [
    coffee,
    { img: "./assets/ice-coffee.jpeg", imgAlt: "best ice coffee" },
    { img: "./assets/wines-1.jpeg", imgAlt: "best white wine" }

]


export const catering = [
    catering_1,
    pie_combo,
    foccacia
]

export const new_on_the_menu = [
    pie_combo,
    daily_meal
]

export const private_parties = [
    private_events_1,
    private_events_2,
    private_events_3
]


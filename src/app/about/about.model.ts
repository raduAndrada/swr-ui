import { ImageBlock } from "../common/common.model";

export const srcFolderPath = `../../assets/`;

export const our_sorty_slides: SlideShow[] = [
    {name: "", src: srcFolderPath + "350811583_799486835102897_5528563752625140410_n.jpg"},
    {name: "", src: srcFolderPath + "350665236_212148991686162_1978839169242448486_n.jpg"},
    {name: "", src: srcFolderPath + "350248762_1472180999986300_1998991938092589334_n.jpg"},
]



export interface TeamBlock {
    id: number;
    title: string;
    name: string;
    socialMedia: Map<string, string>; //TODO
    image: ImageBlock;
    description: string[];
}

export interface SlideShow {
    name: string;
    src: string;
} 


import { ImageBlock } from "../common/common.model";

export interface TrendingBlock {
    id: number;
    name: string;
    shortDescription: string;
    date: string;
    author: string;
    description: string;
    inTrending: boolean;
    images: ImageBlock[];
    title: string;

}


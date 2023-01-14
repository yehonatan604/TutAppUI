import { CategoryTypes } from "./enums";

export interface Article {
    id: number,
    userId: number;
    imageId: number;
    category: CategoryTypes;
    title: string;
    content: string;
    date: Date;
    stars: number;
    views: number;
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Image } from "../models/image.model.interface";

@Injectable()
export class ImagesService {
    constructor (private http: HttpClient) { 
    }

    imagesUrl: string = 'https://localhost:7012/api/Images';

    fetchImages() {
        return this.http.get<Image[]>(this.imagesUrl);
    }

    fetchImageById(id: number) {
        return this.http.get<Image>(`${this.imagesUrl}/${id}`);
    }
    
    postImage(imageUrl: string, imageTitle: string) {
        return this.http.post(this.imagesUrl, {
            Title: imageTitle,
            Location: imageUrl
        });
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "../models/article.model.interface";
import { UsersService } from "./users.service";

@Injectable({ providedIn: 'root' })
export class ArticlesService {
    constructor(
        private http: HttpClient,
        private usersService: UsersService,
    ) {
    }

    articlesUrl: string = 'https://localhost:7012/api/Articles';
    searchUrl: string = 'https://localhost:7012/api/Articles/search/';

    fetchArticles() {
        return this.http.get<Article[]>(this.articlesUrl);
    }

    searchArticles(word: string) {
        return this.http.get<Article[]>(this.searchUrl + word);
    }

    postArticle(article: Article, imageId: number) {
            let uId = this.usersService.loggedInUser ? this.usersService.loggedInUser.id : 0;
        return this.http.post(`${this.articlesUrl}/${uId}/${imageId}`, {
            UserId: null,
            ImageId: null,
            category: article.category,
            Title: article.title,
            Content: article.content,
            Created: new Date(),
            Stars: 0,
            Views: 0
        });
    }

    // addArticle() {
    //     this.http.post(this.articlesUrl + '/11' + '/5', {
    //         userId: 11,
    //         imageId: 5,
    //         category: 0,
    //         title: "title",
    //         content: "content",
    //         created: new Date(),
    //         stars: 0,
    //         views: 0
    //     }).subscribe();
    // }
}
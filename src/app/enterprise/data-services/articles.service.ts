import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "../models/article.model";
import { ArticlePostDto } from "../../core/DTOs/article.dtos";

@Injectable({ providedIn: 'root' })
export class ArticlesService {
    constructor(
        private http: HttpClient
    ) { }

    articlesUrl: string = 'https://localhost:7012/api/Articles';

    fetchArticles() {
        return this.http.get<Article[]>(this.articlesUrl);
    }

    searchArticles(word: string) {
        return this.http.get<Article[]>(`${this.articlesUrl}/?$filter=contains(title, '${word}')`);
    }
    fetchUserArticles(userName: string) {
        return this.http.get<Article[]>(`${this.articlesUrl}/?$filter=contains(userEmail, '${userName}')`); 
    }

    fetchArticlesBy(term: string) {
        return this.http.get<Article[]>(`${this.articlesUrl}/?$orderby=${term}`); 
    }

    postArticle(article: ArticlePostDto) {
        return this.http.post<ArticlePostDto>(`${this.articlesUrl}/addNewArticle`, article);
    }
}
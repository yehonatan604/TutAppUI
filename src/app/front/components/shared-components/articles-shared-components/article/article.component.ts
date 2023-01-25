import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/enterprise/models/article.model';
import { ArticlesService } from 'src/app/enterprise/data-services/articles.service';
import { LoremIpsumService } from 'src/app/enterprise/data-services/lorem-ipsum.service'; 
import { ImagesService } from 'src/app/enterprise/data-services/images.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article!: Article;
  imagePath!: string;
  title = "";
  content = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private loremService: LoremIpsumService,
    private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.subscribeRouteParams();
  }

  subscribeRouteParams() {
    this.activatedRoute.params.subscribe(params => {
      this.articlesService.fetchArticles().subscribe(items => {

        let index = items.findIndex(e => {
          return e.id == params['id'];
        });
        
        this.article = items[index];
        this.title = this.article.title;
        this.content = this.article.content == '*' ? this.loremService.lorem : this.article.content;

        this.imagesService.fetchImages().subscribe(images => {
          this.imagePath = images[images.findIndex(e => e.id == this.article.imageId)].location;
        });
      });
    });
  }
}

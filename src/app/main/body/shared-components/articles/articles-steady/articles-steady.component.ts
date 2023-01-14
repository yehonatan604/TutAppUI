import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model.interface';
import { ArticlesListTypes, CategoryTypes, SenderTypes } from 'src/app/models/enums';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-steady',
  templateUrl: './articles-steady.component.html',
  styleUrls: ['./articles-steady.component.css']
})
export class ArticlesSteadyComponent implements OnInit {
  @Input() articles!: Article[];
  title!: string;
  sender!: string;
  articleType = ArticlesListTypes;
  categoryType = CategoryTypes;
  senderType = SenderTypes;
  category!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.subscribeRouteParams();
  }

  subscribeRouteParams() {
    this.activatedRoute.params.subscribe(params => {
      this.articlesService.fetchArticles().subscribe(items => {
        this.articles = items.filter(e => {
          this.sender = this.senderType[params['sender']];
          if (this.sender === 'Home') {
            this.title = this.articleType[params['articleType']]
            return e !== undefined;
          }
          else {
            this.title = this.categoryType[params['articleType']];
            return e.category == params['articleType'];
          }
        });
        this.translateTitle();
      });
    });
  }

  translateTitle() {
    if (this.sender === 'Home') {
      this.title = this.title === this.articleType[0] ? 'החדשים ביותר' :
        this.title === this.articleType[1] ? 'המדורגים ביותר' :
          this.title === this.articleType[2] ? 'הנצפים ביותר' :
            ''
    }
    else {
      this.title = this.title == this.categoryType[0] ? 'שפות תכנות' :
        this.title === this.categoryType[1] ? 'אינטרנט ורשתות' :
          this.title === this.categoryType[2] ? 'עיצוב גרפי' :
            this.title === this.categoryType[3] ? 'בית חכם' :
              '';
    }
  }

}

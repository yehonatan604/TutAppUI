import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/enterprise/models/article.model';
import { LoremIpsumService } from 'src/app/enterprise/data-services/lorem-ipsum.service'; 
import { ImagesService } from 'src/app/enterprise/data-services/images.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: Article;
  author!: string;
  imagePath!: string;

  constructor(
    
    private router: Router, 
    private loremService: LoremIpsumService, 
    private imagesService: ImagesService) 
  { }

  ngOnInit(): void {
    this.article.content = (
      this.article.content == '*' ?
        this.loremService.lorem :
        this.article.content
    );
    this.author = this.article.userName;
    this.imagesService.fetchImageById(this.article.imageId).subscribe(images => {
      this.imagePath = images[0].location;
    })
  }

  onClick() {
    this.router.navigate(['/articles', this.article.id]);
  }
}

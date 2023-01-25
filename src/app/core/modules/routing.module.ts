import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/front/components/outlet/auth/auth.component';
import { CreateComponent } from 'src/app/front/components/outlet/create/create.component';
import { HomeComponent } from 'src/app/front/components/outlet/home/home.component';
import { LibraryComponent } from 'src/app/front/components/outlet/library/library.component';
import { MessagesComponent } from 'src/app/front/components/outlet/messages/messages.component';
import { PersonalComponent } from 'src/app/front/components/outlet/personal/personal.component';
import { SearchComponent } from 'src/app/front/components/outlet/search/search.component';
import { ArticleComponent } from 'src/app/front/components/shared-components/articles-shared-components/article/article.component';
import { ArticlesSteadyComponent } from 'src/app/front/components/shared-components/articles-shared-components/articles-steady/articles-steady.component';

import { AuthGuard } from '../guards/auth.guard';
import { CreatorGuard } from '../guards/creator.guard';



@NgModule({
    imports: [
      BrowserModule, CommonModule
    ]
  })
  export class RoutingModule { 
    public static forRoot = RouterModule.forRoot([
        { path: 'home', component: HomeComponent},
        { path: 'search', component: SearchComponent},
        { path: 'library', component: LibraryComponent},
        { path: 'create', component: CreateComponent, canActivate: [AuthGuard, CreatorGuard]},
        { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
        { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard]},
        { path: 'login', component: AuthComponent},
        { path: 'articles/:id', component: ArticleComponent},
        { path: 'category/:title', component: ArticlesSteadyComponent},
        { path: '**', component: HomeComponent}
    ])
  }
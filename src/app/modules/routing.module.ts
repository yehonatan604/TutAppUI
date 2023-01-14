import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CreatorGuard } from '../guards/creator.guard';
import { CreateComponent } from '../main/body/create/create.component';
import { HomeComponent } from '../main/body/home/home.component';
import { LibraryComponent } from '../main/body/library/library.component';
import { LoginComponent } from '../main/body/login/login.component';
import { PersonalComponent } from '../main/body/personal/personal.component';
import { SearchComponent } from '../main/body/search/search.component';
import { ArticleComponent } from '../main/body/shared-components/articles/article/article.component';
import { ArticlesSteadyComponent } from '../main/body/shared-components/articles/articles-steady/articles-steady.component';
import { MessagesComponent } from '../main/body/shared-components/messages/messages.component';

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
        { path: 'login', component: LoginComponent},
        { path: 'articles/:id', component: ArticleComponent},
        { path: 'category/:sender/:articleType', component: ArticlesSteadyComponent},
        { path: '**', component: HomeComponent}
    ])
  }
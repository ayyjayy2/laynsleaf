import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { TechComponent } from './tech/tech.component';
import { AviationComponent } from './aviation/aviation.component';
import { ShopComponent } from './shop/shop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { CheckrideFlashcardsComponent } from './flashcards/components/checkride-flashcards/checkride-flashcards.component';
import { BlogComponent } from './blog/blog.component';
import { Jan24Component } from './blog/components/articles/categories/the-leaf-chronicles/jan24/jan24.component';
import { Feb3Component } from './blog/components/articles/categories/mindset/feb3/feb3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TravelComponent,
    TechComponent,
    AviationComponent,
    ShopComponent,
    FlashcardsComponent,
    CheckrideFlashcardsComponent,
    BlogComponent,
    Jan24Component,
    Feb3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

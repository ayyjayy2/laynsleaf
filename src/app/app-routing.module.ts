import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AviationComponent } from './aviation/aviation.component';
import { BlogComponent } from './blog/blog.component';
import { Feb3Component } from './blog/components/articles/categories/mindset/feb3/feb3.component';
import { Jan24Component } from './blog/components/articles/categories/the-leaf-chronicles/jan24/jan24.component';
import { CheckrideFlashcardsComponent } from './flashcards/components/checkride-flashcards/checkride-flashcards.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { TechComponent } from './tech/tech.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'jan24', component: Jan24Component},
  { path: 'feb3', component: Feb3Component },
  { path: 'travel', component: TravelComponent},
  { path: 'tech', component: TechComponent},
  { path: 'aviation', component: CheckrideFlashcardsComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'store', component: ShopComponent},
  { path: 'flashcards', component: FlashcardsComponent,
      children: [ 
        { path: 'checkride', component: CheckrideFlashcardsComponent },
        { path: 'checkrideprep', component: CheckrideFlashcardsComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

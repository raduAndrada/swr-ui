import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DishesMenuComponent } from './dishes/dishes-menu/dishes-menu.component';
import { TrendingComponent } from './trending/trending.component';
import { CateringComponent } from './catering/catering/catering.component';
import { PrivateEventsComponent } from './private-events/private-events.component';

const routes: Routes = [
  { path: "about", component: AboutComponent, pathMatch: "full"},
  { path: "menu", component: DishesMenuComponent, pathMatch: "full"},
  { path: "catering", component: CateringComponent, pathMatch: "full"},
  { path: "private-events", component: PrivateEventsComponent, pathMatch: "full"},
  { path: "trending", component: TrendingComponent, pathMatch: "full"},
  { path: "", component: AboutComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

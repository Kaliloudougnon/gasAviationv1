import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {OurServiceComponent} from "./our-service/our-service.component";
import {StocksComponent} from "./stocks/stocks.component";

export const routes: Routes = [
  {path: "about",component:AboutComponent},
  {path: "accueil",component: HomeComponent},
  {path: "ourService",component: OurServiceComponent},
  {path: "stocks",component: StocksComponent},
  {path: "contact",component: ContactComponent}];

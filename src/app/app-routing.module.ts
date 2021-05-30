import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes = [
  {path: 'home', component : HomeComponent},
  {path: '',redirectTo : 'home' , pathMatch : 'full'},
  {path: 'portfolio', component : PortfolioComponent},
  {path: 'about', component : AboutComponent},
  {path: 'contact', component :ContactComponent},
  {path: '**' , component : NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { CareerComponent } from './public/career/career.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { HomeComponent } from './public/home/home.component';
import { IndustryComponent } from './public/industry/industry.component';
import { IntegrationPageComponent } from './public/integration-page/integration-page.component';
import { PublicMenuComponent } from './public/menu/public-menu/public-menu.component';
import { ResourcesComponent } from './public/resources/resources.component';
import { SolutionsComponent } from './public/solutions/solutions.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "career", component: CareerComponent },
  { path: "about", component: AboutUsComponent },
  { path: "industry", component: IndustryComponent },
  { path: "solution", component: SolutionsComponent },
  { path: "resource", component: ResourcesComponent },
  { path: "integration", component: IntegrationPageComponent },
  { path: "contact", component: ContactUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
